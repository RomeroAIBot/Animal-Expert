// Draws the app icons (a cream paw print on forest green) as PNG files in public/icons.
// No image libraries needed: shapes are rasterized here and written with zlib.
// Usage: node scripts/make-icons.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';

const GREEN = [45, 80, 22];
const CREAM = [245, 240, 232];
const AMBER = [212, 160, 23];

// Shapes in a 0..1 box. Ellipse: [cx, cy, rx, ry, rotationRadians].
const toes = [
  [0.27, 0.39, 0.068, 0.092, -0.4],
  [0.405, 0.27, 0.07, 0.095, -0.12],
  [0.595, 0.27, 0.07, 0.095, 0.12],
  [0.73, 0.39, 0.068, 0.092, 0.4]
];
const pad = [0.5, 0.6, 0.18, 0.15, 0];

const inEllipse = (x, y, [cx, cy, rx, ry, rot]) => {
  const dx = x - cx;
  const dy = y - cy;
  const c = Math.cos(rot);
  const s = Math.sin(rot);
  const u = (dx * c + dy * s) / rx;
  const v = (-dx * s + dy * c) / ry;
  return u * u + v * v <= 1;
};

// Pad: a rounded heart-ish blob from three overlapping ellipses.
const inPad = (x, y) =>
  inEllipse(x, y, pad) || inEllipse(x, y, [0.4, 0.67, 0.11, 0.1, 0.3]) || inEllipse(x, y, [0.6, 0.67, 0.11, 0.1, -0.3]);

// scale < 1 shrinks the paw toward the centre (maskable icons need a safe margin).
const colorAt = (x, y, { scale, rounded }) => {
  if (rounded) {
    const r = 0.18;
    const qx = Math.max(Math.abs(x - 0.5) - (0.5 - r), 0);
    const qy = Math.max(Math.abs(y - 0.5) - (0.5 - r), 0);
    if (qx * qx + qy * qy > r * r) return null;
  }
  const px = (x - 0.5) / scale + 0.5;
  const py = (y - 0.5) / scale + 0.5 + 0.02;
  if (inPad(px, py) || toes.some((t) => inEllipse(px, py, t))) return CREAM;
  // A thin amber ring near the edge.
  const d = Math.hypot(x - 0.5, y - 0.5);
  if (!rounded && scale === 1 && d > 0.455 && d < 0.47) return AMBER;
  return GREEN;
};

const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (buf) => {
  let c = 0xffffffff;
  for (const b of buf) c = crcTable[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
};

const drawPng = (size, options) => {
  const SS = 4;
  const raw = Buffer.alloc(size * (size * 4 + 1));
  for (let y = 0; y < size; y += 1) {
    raw[y * (size * 4 + 1)] = 0;
    for (let x = 0; x < size; x += 1) {
      let r = 0;
      let g = 0;
      let b = 0;
      let a = 0;
      for (let sy = 0; sy < SS; sy += 1) {
        for (let sx = 0; sx < SS; sx += 1) {
          const color = colorAt((x + (sx + 0.5) / SS) / size, (y + (sy + 0.5) / SS) / size, options);
          if (!color) continue;
          r += color[0];
          g += color[1];
          b += color[2];
          a += 1;
        }
      }
      const o = y * (size * 4 + 1) + 1 + x * 4;
      raw[o] = a ? Math.round(r / a) : 0;
      raw[o + 1] = a ? Math.round(g / a) : 0;
      raw[o + 2] = a ? Math.round(b / a) : 0;
      raw[o + 3] = Math.round((a / (SS * SS)) * 255);
    }
  }
  const header = Buffer.alloc(13);
  header.writeUInt32BE(size, 0);
  header.writeUInt32BE(size, 4);
  header[8] = 8;
  header[9] = 6;
  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk('IHDR', header),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
};

const out = new URL('../public/icons/', import.meta.url);
mkdirSync(out, { recursive: true });
const icons = [
  ['icon-192.png', 192, { scale: 1, rounded: false }],
  ['icon-512.png', 512, { scale: 1, rounded: false }],
  ['icon-maskable-512.png', 512, { scale: 0.72, rounded: false }],
  // iOS rounds the corners itself and shows transparency as black, so this one is a full square.
  ['apple-touch-icon.png', 180, { scale: 0.9, rounded: false }],
  ['favicon-32.png', 32, { scale: 1.1, rounded: true }]
];
icons.forEach(([name, size, options]) => {
  writeFileSync(new URL(name, out), drawPng(size, options));
  console.log(`wrote public/icons/${name}`);
});
