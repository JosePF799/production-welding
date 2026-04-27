const fs = require("fs");
const path = require("path");
const sharp = require("C:/Users/JosePF/AppData/Roaming/npm/node_modules/netlify-cli/node_modules/sharp");

const root = path.resolve(__dirname, "..");

const heroes = [
  { name: "roof", index: 4 },
  { name: "mobile-welding", index: 6 },
  { name: "gate-railing", index: 2 },
  { name: "trailer-equipment", index: 22 },
  { name: "custom-fabrication", index: 21 },
  { name: "commercial-welding", index: 51 },
];

async function generateHero() {
  const outDir = path.join(root, "assets", "hero");
  fs.mkdirSync(outDir, { recursive: true });

  const widths = [1600, 1200, 768];
  for (const hero of heroes) {
    const idx = String(hero.index).padStart(2, "0");
    const src = path.join(root, "assets", "gallery", `production-welding-project-${idx}.jpg`);
    if (!fs.existsSync(src)) {
      console.warn(`skipping ${hero.name}: source ${src} missing`);
      continue;
    }
    for (const w of widths) {
      const h = Math.round((w * 9) / 16);
      const base = sharp(src)
        .resize({ width: w, height: h, fit: "cover", position: hero.position || "center" })
        .sharpen();

      await base.clone().jpeg({ quality: 92, mozjpeg: true }).toFile(path.join(outDir, `hero-${hero.name}-${w}.jpg`));
      await base.clone().webp({ quality: 90 }).toFile(path.join(outDir, `hero-${hero.name}-${w}.webp`));
    }
    console.log(`hero-${hero.name} variants written`);
  }
}

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="10" fill="#17211d"/>
  <text x="32" y="40"
        font-family="'Roboto Slab','Times New Roman',Georgia,serif"
        font-weight="700"
        font-size="30"
        text-anchor="middle"
        fill="#efc46d"
        letter-spacing="-0.5">PW</text>
  <rect x="14" y="46" width="36" height="2" fill="#c58b2c"/>
</svg>`;

const appleSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="32" fill="#17211d"/>
  <text x="90" y="112"
        font-family="'Roboto Slab','Times New Roman',Georgia,serif"
        font-weight="700"
        font-size="84"
        text-anchor="middle"
        fill="#efc46d"
        letter-spacing="-2">PW</text>
  <rect x="46" y="128" width="88" height="4" fill="#c58b2c"/>
</svg>`;

async function generateFavicons() {
  fs.writeFileSync(path.join(root, "favicon.svg"), faviconSvg);
  await sharp(Buffer.from(faviconSvg)).resize(32, 32).png().toFile(path.join(root, "favicon-32.png"));
  await sharp(Buffer.from(faviconSvg)).resize(16, 16).png().toFile(path.join(root, "favicon-16.png"));
  await sharp(Buffer.from(appleSvg)).resize(180, 180).png().toFile(path.join(root, "apple-touch-icon.png"));
  console.log("favicons written");
}

(async () => {
  await generateHero();
  await generateFavicons();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
