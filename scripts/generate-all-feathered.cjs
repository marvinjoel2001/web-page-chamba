const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processHeroWorker() {
  const inputPath = 'C:/Users/marvi/.gemini/antigravity/brain/b4115f90-57f9-4cde-b312-6e37a44714fa/bolivia_workers_group_1791421499932.jpg';
  const outputPath = path.join(__dirname, '../public/images/workers_dissolve.png');

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Hero Worker size: ${width}x${height}`);

  // Maximize visible area so workers appear much larger and fill the frame
  const cx = width / 2;
  const cy = height * 0.49;
  const rx = width * 0.495;
  const ry = height * 0.495;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;

      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let alphaFactor = 1.0;
      if (dist <= 0.72) {
        alphaFactor = 1.0;
      } else if (dist >= 1.0) {
        alphaFactor = 0.0;
      } else {
        const t = (dist - 0.72) / (1.0 - 0.72);
        alphaFactor = 0.5 * (1 + Math.cos(Math.PI * t));
      }

      // Smooth bottom edge fade
      if (y > height * 0.85) {
        const bottomT = (y - height * 0.85) / (height * 0.15);
        const bottomFactor = 0.5 * (1 + Math.cos(Math.PI * bottomT));
        alphaFactor *= bottomFactor;
      }

      // Outer perimeter is strictly 0
      if (x < 3 || x >= width - 3 || y < 3 || y >= height - 3) {
        alphaFactor = 0;
      }

      data[idx + 3] = Math.round(255 * alphaFactor);
    }
  }

  await sharp(data, {
    raw: { width, height, channels: 4 }
  })
    .png({ quality: 100, compressionLevel: 8 })
    .toFile(outputPath);

  console.log('Successfully updated workers_dissolve.png (larger framing + smooth fade)');
}

async function processFeatureWorker() {
  const inputPath = path.join(__dirname, '../public/images/feature2.png');
  const outputPath = path.join(__dirname, '../public/images/feature_worker_feathered.png');

  // Also keep a backup of original feature2 if needed
  if (!fs.existsSync(path.join(__dirname, '../public/images/feature2_original.png'))) {
    fs.copyFileSync(inputPath, path.join(__dirname, '../public/images/feature2_original.png'));
  }

  const { data, info } = await sharp(path.join(__dirname, '../public/images/feature2_original.png'))
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Feature2 size: ${width}x${height}`);

  const cx = width / 2;
  const cy = height * 0.48; // center slightly higher to favor head and body
  const rx = width * 0.48;
  const ry = height * 0.48;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;

      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let alphaFactor = 1.0;
      if (dist <= 0.60) {
        alphaFactor = 1.0;
      } else if (dist >= 1.0) {
        alphaFactor = 0.0;
      } else {
        const t = (dist - 0.60) / (1.0 - 0.60);
        alphaFactor = 0.5 * (1 + Math.cos(Math.PI * t));
      }

      // Bottom fade for grounding
      if (y > height * 0.85) {
        const bottomT = (y - height * 0.85) / (height * 0.15);
        const bottomFactor = 0.5 * (1 + Math.cos(Math.PI * bottomT));
        alphaFactor *= bottomFactor;
      }

      if (x < 3 || x >= width - 3 || y < 3 || y >= height - 3) {
        alphaFactor = 0;
      }

      data[idx + 3] = Math.round(255 * alphaFactor);
    }
  }

  // Save to feature_worker_feathered.png
  await sharp(data, {
    raw: { width, height, channels: 4 }
  })
    .png({ quality: 100, compressionLevel: 8 })
    .toFile(outputPath);

  // Also overwrite feature2.png so any existing link gets the feathered version
  fs.copyFileSync(outputPath, inputPath);

  console.log('Successfully generated feature_worker_feathered.png and updated feature2.png with smooth degradado!');
}

async function run() {
  await processHeroWorker();
  await processFeatureWorker();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
