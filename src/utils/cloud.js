// Accounts and cloud sync through Supabase's REST APIs (plain fetch, no client library).
// Publishable keys are meant to ship in browser code; row-level security in the database
// (supabase/migrations) is what keeps each player's data private.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://kyyhplnqebmvvsbxqazd.supabase.co';
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_NcEvrwkVYkGyofsPoFy4Gg_hKsa7OJn';
const SESSION_KEY = 'animalExpert:v1:session';

const readSession = () => {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
  } catch {
    return null;
  }
};

const writeSession = (session) => {
  try {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else localStorage.removeItem(SESSION_KEY);
  } catch {
    // Storage blocked: the player stays signed in for this page load only.
  }
};

const request = async (path, { method = 'GET', body, token, headers = {} } = {}) => {
  const response = await fetch(`${SUPABASE_URL}${path}`, {
    method,
    headers: {
      apikey: SUPABASE_KEY,
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers
    },
    body: body === undefined ? undefined : JSON.stringify(body)
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const error = new Error(data?.msg || data?.message || data?.error_description || `Request failed (${response.status})`);
    error.status = response.status;
    error.code = data?.code || data?.error_code;
    throw error;
  }
  return data;
};

const toSession = ({ access_token, refresh_token, expires_in, expires_at, user }) => ({
  accessToken: access_token,
  refreshToken: refresh_token,
  expiresAt: Number(expires_at) || Math.floor(Date.now() / 1000) + Number(expires_in || 3600),
  user: { id: user.id, email: user.email }
});

// --- Sign-in ---

// A display name given here is used when the link creates a new account.
export const sendSignInLink = (email, displayName) =>
  request(`/auth/v1/otp?redirect_to=${encodeURIComponent(`${window.location.origin}/account`)}`, {
    method: 'POST',
    body: { email, create_user: true, data: displayName ? { display_name: displayName } : {} }
  });

// The emailed link returns here with the session (or an error) in the URL fragment.
export const completeSignInFromUrl = async () => {
  const params = new URLSearchParams(window.location.hash.slice(1));
  if (!params.has('access_token') && !params.has('error')) return null;
  window.history.replaceState(null, '', window.location.pathname + window.location.search);

  if (params.has('error')) {
    const description = params.get('error_description') || params.get('error');
    return { error: description.includes('expired') ? 'That sign-in link has expired. Send yourself a new one.' : description };
  }

  const accessToken = params.get('access_token');
  const user = await request('/auth/v1/user', { token: accessToken });
  const session = toSession({
    access_token: accessToken,
    refresh_token: params.get('refresh_token'),
    expires_in: params.get('expires_in'),
    expires_at: params.get('expires_at'),
    user
  });
  writeSession(session);
  return { session };
};

let refreshing = null;

// Returns a session with a fresh access token, or null when signed out.
export const getSession = async () => {
  const session = readSession();
  if (!session) return null;
  if (session.expiresAt - 60 > Date.now() / 1000) return session;

  refreshing ||= request('/auth/v1/token?grant_type=refresh_token', {
    method: 'POST',
    body: { refresh_token: session.refreshToken }
  })
    .then((data) => {
      const next = toSession(data);
      writeSession(next);
      return next;
    })
    .catch((error) => {
      // A rejected refresh token means the sign-in is over; a network error keeps it for later.
      if (error.status === 400 || error.status === 401) writeSession(null);
      return null;
    })
    .finally(() => {
      refreshing = null;
    });
  return refreshing;
};

export const getSignedInUser = () => readSession()?.user || null;

export const signOut = async () => {
  const session = readSession();
  writeSession(null);
  if (session) await request('/auth/v1/logout', { method: 'POST', token: session.accessToken }).catch(() => {});
};

export const deleteAccount = async () => {
  const session = await getSession();
  if (!session) throw new Error('You are not signed in.');
  await request('/rest/v1/rpc/delete_my_account', { method: 'POST', token: session.accessToken, body: {} });
  writeSession(null);
};

// --- Profile ---

export const getProfile = async () => {
  const session = await getSession();
  if (!session) return null;
  const rows = await request(`/rest/v1/profiles?select=display_name,show_on_leaderboard&id=eq.${session.user.id}`, {
    token: session.accessToken
  });
  return rows[0] || { display_name: null, show_on_leaderboard: false };
};

export const updateProfile = async ({ displayName, showOnLeaderboard }) => {
  const session = await getSession();
  if (!session) throw new Error('You are not signed in.');
  try {
    await request(`/rest/v1/profiles?id=eq.${session.user.id}`, {
      method: 'PATCH',
      token: session.accessToken,
      headers: { Prefer: 'return=minimal' },
      body: { display_name: displayName || null, show_on_leaderboard: Boolean(showOnLeaderboard) }
    });
  } catch (error) {
    if (error.code === '23505') throw new Error('That display name is already taken. Try another.');
    if (error.code === '23514') throw new Error('Display names are 2 to 24 letters, numbers, spaces, dots, dashes or underscores.');
    throw error;
  }
};

// --- Game results ---

const detailFields = ['correct', 'total', 'size', 'pairs', 'flips', 'seconds', 'identified', 'crosswordSolved'];

const toRow = (entry) => ({
  entry_id: entry.id,
  mode: entry.mode,
  category: entry.category,
  date_key: entry.date,
  score: entry.score,
  details: Object.fromEntries(detailFields.filter((key) => entry[key] !== undefined).map((key) => [key, entry[key]]))
});

const fromRow = (row) => ({
  id: row.entry_id,
  date: row.date_key,
  mode: row.mode,
  category: row.category,
  score: row.score,
  ...row.details
});

const insertRows = (rows, token) =>
  request('/rest/v1/game_results', {
    method: 'POST',
    token,
    // The first saved daily result is official; duplicates are ignored, never overwritten.
    headers: { Prefer: 'resolution=ignore-duplicates,return=minimal' },
    body: rows
  });

// Saves results; a result the database rejects (for example, a score that doesn't add up) stays local.
export const saveResults = async (entries) => {
  const session = await getSession();
  if (!session || entries.length === 0) return { saved: 0, rejected: 0 };
  const rows = entries.map(toRow);
  try {
    await insertRows(rows, session.accessToken);
    return { saved: rows.length, rejected: 0 };
  } catch (error) {
    if (rows.length === 1 || !error.status || error.status >= 500) throw error;
    let saved = 0;
    for (const row of rows) {
      try {
        await insertRows([row], session.accessToken);
        saved += 1;
      } catch {
        // Skip this one result; the rest still sync.
      }
    }
    return { saved, rejected: rows.length - saved };
  }
};

export const fetchResults = async () => {
  const session = await getSession();
  if (!session) return null;
  const rows = await request(
    '/rest/v1/game_results?select=entry_id,mode,category,date_key,score,details&order=date_key.desc&limit=1000',
    { token: session.accessToken }
  );
  return rows.map(fromRow);
};

// --- Public leaderboard ---

export const getDailyLeaderboard = ({ date, mode, category, size }) =>
  request('/rest/v1/rpc/get_daily_leaderboard', {
    method: 'POST',
    body: { p_date: date, p_mode: mode, p_category: category, p_size: size ?? null, p_limit: 50 }
  });

// --- Reports of inaccurate questions ---

// Saved in Supabase and emailed to the site owner by the report-question function.
export const sendReport = async (report) => {
  const session = await getSession().catch(() => null);
  return request('/functions/v1/report-question', {
    method: 'POST',
    token: session?.accessToken,
    body: report
  });
};
