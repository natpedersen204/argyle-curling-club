import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC_BASE = path.join(ROOT, 'src', 'assets');
const OUT_DIR = path.join(ROOT, 'src', 'assets', 'images-optimized');

const HERO_LADDER = [640, 1024, 1600, 2048];
const CARD_LADDER = [400, 640, 900];
const LOGO_LADDER = [80, 160, 240];

// slug: output filename base (also manifest export name in camelCase)
// src: path relative to src/assets
// tier: determines width ladder
// dropAlpha: true for PNGs that are fully opaque (no real transparency needed)
const entries = [
  { slug: 'logo', src: 'logos/argyle-logo1.png', tier: 'logo', keepAlpha: true },

  { slug: 'about-location', src: 'images/image0000021.jpg', tier: 'card' },
  { slug: 'about-history', src: 'images/IMG_7132.JPEG', tier: 'card' },
  { slug: 'about-facility', src: 'images/IMG_4243.jpeg', tier: 'card' },
  { slug: 'about-clubroom', src: 'images/IMG_9456.JPEG', tier: 'card' },

  { slug: 'glow-hero', src: 'images/IMG_3064.JPEG', tier: 'hero' },
  { slug: 'glow-g1', src: 'images/IMG_3074.JPEG', tier: 'card' },
  { slug: 'glow-g1b', src: 'images/IMG_3065.JPEG', tier: 'card' },
  { slug: 'glow-g2', src: 'images/IMG_2627.jpeg', tier: 'card' },
  { slug: 'glow-g3', src: 'images/74874A57-CCCA-49CF-B15A-D2FEAEEA1C36.JPG', tier: 'card' },
  { slug: 'glow-g4', src: 'images/IMG_1364.jpeg', tier: 'card' },
  { slug: 'glow-g5', src: 'images/IMG_3062.JPEG', tier: 'card' },
  { slug: 'glow-g6', src: 'images/IMG_3063.JPEG', tier: 'card' },
  { slug: 'glow-g7', src: 'images/IMG_2626.jpeg', tier: 'card' },
  { slug: 'glow-g8', src: 'images/IMG_2624.jpeg', tier: 'card' },

  { slug: 'news-2021', src: 'images/glow/dec 2021 glow.png', tier: 'card', dropAlpha: true },
  { slug: 'news-2023', src: 'images/glow/2023 glow.png', tier: 'card', dropAlpha: true },
  { slug: 'news-2024', src: 'images/glow/2nd ladies.png', tier: 'card', dropAlpha: true },
  { slug: 'news-2025', src: 'images/glow/3rd ladies.png', tier: 'card', dropAlpha: true },
  { slug: 'news-glowthrow', src: 'images/glow/feb202025 tribune.png', tier: 'card', dropAlpha: true },
  { slug: 'news-ladies2026', src: 'images/glow/ladies 2026.png', tier: 'card', dropAlpha: true },
  { slug: 'news-mixed2026', src: 'images/glow/mixed2026.png', tier: 'card', dropAlpha: true },

  { slug: 'home-hero', src: 'images/IMG_0030.JPEG', tier: 'hero' },
  { slug: 'home-league', src: 'images/IMG_9944.JPEG', tier: 'card' },
  { slug: 'home-bonspiel', src: 'images/IMG_9977.JPEG', tier: 'card' },
  { slug: 'home-mens', src: 'images/IMG_0025.JPEG', tier: 'card' },
  { slug: 'home-rentals', src: 'images/IMG_9908.jpeg', tier: 'card' },

  { slug: 'bonspiels-seniors', src: 'images/IMG_6270.JPEG', tier: 'card' },
  { slug: 'bonspiels-crockatt', src: 'images/IMG_3636.jpeg', tier: 'card' },
];

function ladderFor(tier) {
  if (tier === 'hero') return HERO_LADDER;
  if (tier === 'logo') return LOGO_LADDER;
  return CARD_LADDER;
}

function toCamel(slug) {
  return slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
}

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifestEntries = [];
  const importLines = [];
  let importCounter = 0;

  for (const entry of entries) {
    const srcPath = path.join(SRC_BASE, entry.src);
    const img = sharp(srcPath);
    const meta = await img.metadata();
    const origWidth = meta.width;
    const origHeight = meta.height;
    const keepAlpha = !!entry.keepAlpha;

    const ladder = [...new Set(ladderFor(entry.tier).map((w) => Math.min(w, origWidth)))].sort((a, b) => a - b);
    const maxW = ladder[ladder.length - 1];

    const avifVars = [];
    const webpVars = [];

    for (const w of ladder) {
      const avifName = `${entry.slug}-${w}.avif`;
      const webpName = `${entry.slug}-${w}.webp`;
      await sharp(srcPath).resize({ width: w }).avif({ quality: 55 }).toFile(path.join(OUT_DIR, avifName));
      await sharp(srcPath).resize({ width: w }).webp({ quality: 72 }).toFile(path.join(OUT_DIR, webpName));

      const avifVar = `img${importCounter++}`;
      importLines.push(`import ${avifVar} from './${avifName}'`);
      avifVars.push({ varName: avifVar, width: w });

      const webpVar = `img${importCounter++}`;
      importLines.push(`import ${webpVar} from './${webpName}'`);
      webpVars.push({ varName: webpVar, width: w });
    }

    // Fallback (broad-compatibility) image for the plain <img src>
    let fallbackVar;
    if (keepAlpha) {
      const fallbackName = `${entry.slug}-${maxW}.png`;
      await sharp(srcPath).resize({ width: maxW }).png({ quality: 80, compressionLevel: 9, palette: true }).toFile(path.join(OUT_DIR, fallbackName));
      fallbackVar = `img${importCounter++}`;
      importLines.push(`import ${fallbackVar} from './${fallbackName}'`);
    } else {
      const fallbackName = `${entry.slug}-${maxW}.jpg`;
      await sharp(srcPath).resize({ width: maxW }).flatten({ background: '#ffffff' }).jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(OUT_DIR, fallbackName));
      fallbackVar = `img${importCounter++}`;
      importLines.push(`import ${fallbackVar} from './${fallbackName}'`);
    }

    manifestEntries.push({
      name: toCamel(entry.slug),
      origWidth,
      origHeight,
      avifVars,
      webpVars,
      fallbackVar,
    });

    console.log(`done: ${entry.slug} (${origWidth}x${origHeight}) -> widths [${ladder.join(', ')}]`);
  }

  const exportLines = manifestEntries.map((m) => {
    const avifSrcSet = m.avifVars.map((v) => `\${${v.varName}} ${v.width}w`).join(', ');
    const webpSrcSet = m.webpVars.map((v) => `\${${v.varName}} ${v.width}w`).join(', ');
    return [
      `export const ${m.name} = {`,
      `  width: ${m.origWidth},`,
      `  height: ${m.origHeight},`,
      `  avifSrcSet: \`${avifSrcSet}\`,`,
      `  webpSrcSet: \`${webpSrcSet}\`,`,
      `  src: ${m.fallbackVar},`,
      `}`,
    ].join('\n');
  });

  const manifestSource = [
    importLines.join('\n'),
    '',
    exportLines.join('\n\n'),
    '',
  ].join('\n');

  fs.writeFileSync(path.join(OUT_DIR, 'manifest.ts'), manifestSource);
  console.log('\nManifest written to', path.join(OUT_DIR, 'manifest.ts'));
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
