import sharp from "sharp";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = join(__dirname, "..");

async function main() {
    const input = join(root, "src", "assets", "logo.png");
    const output = join(root, "src", "assets", "logo.png");

    const info = await sharp(input)
        .resize(200, 200, { fit: "contain", withoutEnlargement: true })
        .png({ quality: 80, compressionLevel: 9, palette: true })
        .toFile(output + ".tmp");

    await writeFile(output, await readFile(output + ".tmp"));
    await writeFile(join(root, "public", "logo.png"), await readFile(output + ".tmp"));

    const { rm } = await import("fs/promises");
    await rm(output + ".tmp");

    console.log(`Logo optimized: ${(info.size / 1024).toFixed(1)}KB`);
}

main().catch(console.error);
