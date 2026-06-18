import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

const root = process.cwd();
const logoPath = path.join(root, "public", "images", "logo.png");
const outputPath = path.join(root, "src", "lib", "brand-colors.ts");

const buffer = fs.readFileSync(logoPath);
const png = PNG.sync.read(buffer);
const buckets = new Map();

for (let y = 0; y < png.height; y += 1) {
  for (let x = 0; x < png.width; x += 1) {
    const index = (png.width * y + x) << 2;
    const r = png.data[index];
    const g = png.data[index + 1];
    const b = png.data[index + 2];
    const a = png.data[index + 3];
    if (a < 20) continue;
    if (r < 8 && g < 8 && b < 8) continue;

    const key = [Math.round(r / 5) * 5, Math.round(g / 5) * 5, Math.round(b / 5) * 5].join(",");
    buckets.set(key, (buckets.get(key) ?? 0) + 1);
  }
}

const [dominant] = [...buckets.entries()].sort((a, b) => b[1] - a[1]);
if (!dominant) {
  throw new Error("No usable logo color found.");
}

const rgb = dominant[0].split(",").map(Number);
const hex = `#${rgb.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
const ts = `export const brandColors = {
  primary: "${hex}",
  primaryRgb: [${rgb.join(", ")}],
  source: "public/images/logo.png",
} as const;
`;

fs.writeFileSync(outputPath, ts);
console.log(`Extracted brand color ${hex} from ${logoPath}`);
