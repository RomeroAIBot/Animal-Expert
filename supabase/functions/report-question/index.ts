// Receives "this question is inaccurate" reports from the game, stores them in
// public.question_reports, and emails them to the site owner through Gmail.
//
// Secrets (Supabase dashboard > Edge Functions > Secrets):
//   GMAIL_USER          the Gmail address that sends (default romeroaibot@gmail.com)
//   GMAIL_APP_PASSWORD  a Google app password for that account
//   REPORT_TO           where reports go (default romeroaibot@gmail.com)
// Without GMAIL_APP_PASSWORD, reports are still saved, just not emailed.
import { createClient } from 'npm:@supabase/supabase-js@2.45.4';
import nodemailer from 'npm:nodemailer@6.9.14';

const MAX_PER_HOUR = 5;
const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, apikey, content-type, x-client-info',
  'Access-Control-Allow-Methods': 'POST, OPTIONS'
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, 'Content-Type': 'application/json' } });

const clip = (value: unknown, max: number) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

const sha256 = async (text: string) => {
  const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return [...new Uint8Array(digest)].map((b) => b.toString(16).padStart(2, '0')).join('');
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });
  if (req.method !== 'POST') return json(405, { error: 'Use POST.' });

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'Invalid request.' });
  }

  const report = {
    game: clip(body.game, 40),
    question_id: clip(body.questionId, 120),
    category: clip(body.category, 20) || null,
    question_text: clip(body.question, 1000),
    answer_text: clip(body.answer, 500),
    suggestion: clip(body.suggestion, 2000),
    reporter_email: clip(body.email, 254) || null
  };
  if (!report.game || !report.question_id || !report.question_text || !report.answer_text) {
    return json(400, { error: 'Missing question details.' });
  }
  if (report.suggestion.length < 5) return json(400, { error: 'Please describe what is inaccurate.' });

  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

  // Signed-in players are linked to their report; everyone else is limited by a hashed IP address.
  let userId: string | null = null;
  let userEmail: string | null = null;
  const token = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '');
  if (token && token.split('.').length === 3) {
    const { data } = await supabase.auth.getUser(token);
    userId = data.user?.id ?? null;
    userEmail = data.user?.email ?? null;
  }
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  const ipHash = await sha256(`${ip}:animal-expert-reports`);

  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from('question_reports')
    .select('id', { count: 'exact', head: true })
    .eq('ip_hash', ipHash)
    .gte('created_at', since);
  if ((count ?? 0) >= MAX_PER_HOUR) {
    return json(429, { error: 'Thanks! You have sent several reports recently. Please try again in an hour.' });
  }

  const { data: saved, error } = await supabase
    .from('question_reports')
    .insert({ ...report, reporter_email: report.reporter_email || userEmail, user_id: userId, ip_hash: ipHash })
    .select('id')
    .single();
  if (error) return json(500, { error: 'Could not save the report.' });

  let emailed = false;
  const password = Deno.env.get('GMAIL_APP_PASSWORD');
  if (password) {
    const user = Deno.env.get('GMAIL_USER') || 'romeroaibot@gmail.com';
    try {
      const transport = nodemailer.createTransport({ host: 'smtp.gmail.com', port: 465, secure: true, auth: { user, pass: password } });
      await transport.sendMail({
        from: `Animal Expert <${user}>`,
        to: Deno.env.get('REPORT_TO') || 'romeroaibot@gmail.com',
        replyTo: report.reporter_email || userEmail || undefined,
        subject: `Question report #${saved.id}: ${report.question_id}`,
        text: [
          `Game: ${report.game}${report.category ? ` (${report.category})` : ''}`,
          `Question id: ${report.question_id}`,
          '',
          `Question: ${report.question_text}`,
          `Answer shown: ${report.answer_text}`,
          '',
          'What the player says is correct:',
          report.suggestion,
          '',
          `Reported by: ${report.reporter_email || userEmail || 'anonymous player'}`
        ].join('\n')
      });
      emailed = true;
      await supabase.from('question_reports').update({ emailed: true }).eq('id', saved.id);
    } catch (mailError) {
      console.error('report email failed', mailError);
    }
  }

  return json(200, { ok: true, id: saved.id, emailed });
});
