import { put } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const MANIFEST_PATH = path.join(__dirname, '../utils/blob-manifest.json');
const COMPONENTS_DIR = path.join(__dirname, '../components');

async function optimizeImages() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ Missing BLOB_READ_WRITE_TOKEN in .env.local');
    process.exit(1);
  }

  console.log('🚀 Starting Image Optimization to WebP...');

  let manifest = {};
  try {
    const data = await fs.readFile(MANIFEST_PATH, 'utf-8');
    manifest = JSON.parse(data);
  } catch (err) {
    console.error('❌ Could not load manifest:', err.message);
    process.exit(1);
  }

  const entries = Object.entries(manifest);
  const imageEntries = entries.filter(([key]) => /\.(png|jpg|jpeg)$/i.test(key));

  console.log(`🔍 Found ${imageEntries.length} images to optimize.`);

  let updatedManifest = { ...manifest };
  let processedCount = 0;
  let errorCount = 0;
  let codeReplacements = [];

  for (const [originalKey, url] of imageEntries) {
    // Skip if already webp (shouldn't happen based on filter, but good practice)
    if (originalKey.endsWith('.webp')) continue;

    const webpKey = originalKey.replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    // Check if webp version already exists in manifest
    if (updatedManifest[webpKey]) {
      console.log(`⏭️  Skipping (already optimized): ${originalKey}`);
      continue;
    }

    console.log(`🔄 Processing: ${originalKey}`);

    try {
      // 1. Download image
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to fetch ${url}`);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // 2. Convert to WebP
      const webpBuffer = await sharp(buffer)
        .webp({ quality: 80 })
        .toBuffer();

      // 3. Upload to Blob
      // Remove leading slash for blob path if present
      const blobPath = webpKey.startsWith('/') ? webpKey.slice(1) : webpKey;
      
      const blob = await put(blobPath, webpBuffer, {
        access: 'public',
        addRandomSuffix: false
      });

      // 4. Update manifest
      updatedManifest[webpKey] = blob.url;
      // We keep the original key too for now, or we can choose to replace usages.
      // The plan is to update usages, so we will keep both in manifest for safety, 
      // but we will generate a list of replacements for the codebase.
      
      codeReplacements.push({
        from: originalKey,
        to: webpKey
      });

      console.log(`✅ Optimized: ${webpKey}`);
      processedCount++;

    } catch (err) {
      console.error(`❌ Error processing ${originalKey}:`, err.message);
      errorCount++;
    }
  }

  // Save updated manifest
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(updatedManifest, null, 2));
  console.log(`💾 Manifest updated.`);

  console.log('\n==================================================');
  console.log('🎉 Optimization Completed');
  console.log(`✅ Processed: ${processedCount}`);
  console.log(`❌ Errors:    ${errorCount}`);
  console.log('==================================================\n');

  if (processedCount > 0) {
    console.log('📝 Recommended Code Replacements:');
    // We can also automate this part if desired, but let's print for now or write to a file
    const replacementsPath = path.join(__dirname, 'replacements.json');
    await fs.writeFile(replacementsPath, JSON.stringify(codeReplacements, null, 2));
    console.log(`   Saved replacements to ${replacementsPath}`);
  }
}

optimizeImages();
