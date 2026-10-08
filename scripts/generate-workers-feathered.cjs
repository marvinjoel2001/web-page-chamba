const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createPerfectFeatheredImage() {
  const inputPath = 'C:/Users/marvi/.gemini/antigravity/brain/b4115f90-57f9-4cde-b312-6e37a44714fa/bolivia_workers_group_1791421499932.jpg';
  const outputPath = path.join(__dirname, '../public/images/workers_dissolve.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image size: ${width}x${height}, channels: ${channels}`);

  const cx = width / 2;
  const cy = height * 0.48; // center slightly above middle to preserve heads & faces
  const rx = width * 0.47;
  const ry = height * 0.47;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;

      // Elliptical normalized distance
      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let alphaFactor = 1.0;
      if (dist <= 0.65) {
        alphaFactor = 1.0;
      } else if (dist >= 1.0) {
        alphaFactor = 0.0;
      } else {
        // Smooth cosine falloff from 1.0 to 0.0
        const t = (dist - 0.65) / (1.0 - 0.65);
        alphaFactor = 0.5 * (1 + Math.cos(Math.PI * t));
      }

      // Smooth bottom linear fade for a natural grounding dissolve
      if (y > height * 0.82) {
        const bottomT = (y - height * 0.82) / (height * (1 - 0.82));
        const bottomFactor = 0.5 * (1 + Math.cos(Math.PI * bottomT));
        alphaFactor *= bottomFactor;
      }

      // Ensure exact 0 at the extreme outer perimeter
      if (x < 3 || x >= width - 3 || y < 3 || y >= height - 3) {
        alphaFactor = 0;
      }

      // Apply to alpha channel
      data[idx + 3] = Math.round(255 * alphaFactor);
    }
  }

  await sharp(data, {
    raw: {
      width,
      height,
      channels: 4
    }
  })
    .png({ quality: 100, compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Successfully written perfect feathered workers_dissolve.png!');
}

createPerfectFeatheredImage().catch(err => {
  console.error(err);
  process.exit(1);
});
