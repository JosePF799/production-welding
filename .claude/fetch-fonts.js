const fs = require("fs");
const path = require("path");
const https = require("https");

const root = path.resolve(__dirname, "..");
const fontsDir = path.join(root, "assets", "fonts");
fs.mkdirSync(fontsDir, { recursive: true });

const CHROME_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";

const cssUrl =
  "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Roboto+Slab:wght@500;600;700&display=swap";

function fetch(url, headers = {}) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetch(res.headers.location, headers).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
      })
      .on("error", reject);
  });
}

(async () => {
  const cssBuf = await fetch(cssUrl, { "User-Agent": CHROME_UA });
  const css = cssBuf.toString("utf8");

  const blocks = css.split(/(?=\/\*\s*[a-z\-0-9]+\s*\*\/)/g);
  const wanted = blocks.filter((b) => /\/\*\s*latin\s*\*\//.test(b));

  let outCss = "";
  for (const block of wanted) {
    const familyMatch = block.match(/font-family:\s*'([^']+)'/);
    const weightMatch = block.match(/font-weight:\s*(\d+)/);
    const urlMatch = block.match(/url\((https:\/\/[^)]+\.woff2)\)/);
    if (!familyMatch || !weightMatch || !urlMatch) continue;

    const family = familyMatch[1];
    const weight = weightMatch[1];
    const url = urlMatch[1];
    const slug = family.toLowerCase().replace(/\s+/g, "-");
    const fileName = `${slug}-${weight}.woff2`;
    const filePath = path.join(fontsDir, fileName);

    const fontBuf = await fetch(url);
    fs.writeFileSync(filePath, fontBuf);
    console.log(`saved ${fileName} (${fontBuf.length} bytes)`);

    outCss +=
      `@font-face {\n` +
      `  font-family: '${family}';\n` +
      `  font-style: normal;\n` +
      `  font-weight: ${weight};\n` +
      `  font-display: swap;\n` +
      `  src: url('assets/fonts/${fileName}') format('woff2');\n` +
      `}\n`;
  }

  fs.writeFileSync(path.join(fontsDir, "fonts.css"), outCss);
  console.log("\nwrote fonts.css with", outCss.split("@font-face").length - 1, "@font-face declarations");
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
