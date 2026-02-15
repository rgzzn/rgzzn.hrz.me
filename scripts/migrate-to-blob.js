
import { put } from '@vercel/blob';
import fs from 'fs/promises';
import path from 'path';
import { glob } from 'glob';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SOURCE_DIR = path.join(__dirname, '../public/media/work'); // Adjust this if your assets are elsewhere
const MANIFEST_PATH = path.join(__dirname, '../src/blob-manifest.json'); // Save manifest in src to be imported

async function migrate() {
  // Check for token
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('❌ Missing BLOB_READ_WRITE_TOKEN in .env.local');
    console.error('👉 Please get your token from Vercel Project Settings > Storage > Blob');
    process.exit(1);
  }

  console.log('🚀 Starting Vercel Blob Migration...');
  console.log(`📂 Source Directory: ${SOURCE_DIR}`);

  try {
    // Ensure manifest directory exists
    await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });

    // Load existing manifest
    let manifest = {};
    try {
      const data = await fs.readFile(MANIFEST_PATH, 'utf-8');
      manifest = JSON.parse(data);
      console.log(`📝 Loaded existing manifest (${Object.keys(manifest).length} entries)`);
    } catch {
      console.log('✨ Creating new manifest file');
    }

    // Find files
    const files = await glob('**/*.*', { 
      cwd: SOURCE_DIR, 
      nodir: true,
      ignore: ['.DS_Store'] 
    });

    console.log(`🔍 Found ${files.length} files to process`);

    let uploadedCount = 0;
    let skippedCount = 0;
    let errorCount = 0;

    for (const file of files) {
      // Create the public path key (e.g., /media/work/image.jpg)
      const relativePath = file;
      const publicPath = `/media/work/${relativePath}`;
      
      // Check if already in manifest
      if (manifest[publicPath]) {
        console.log(`⏭️  Skipping (already uploaded): ${relativePath}`);
        skippedCount++;
        continue;
      }

      const absolutePath = path.join(SOURCE_DIR, relativePath);
      const blobPath = `media/work/${relativePath}`; // Structure in Blob storage

      console.log(`⬆️  Uploading: ${relativePath}...`);

      try {
        const content = await fs.readFile(absolutePath);
        const blob = await put(blobPath, content, {
          access: 'public',
          addRandomSuffix: false // Keep filenames clean if possible, or true if you want uniqueness
        });

        manifest[publicPath] = blob.url;
        uploadedCount++;
        console.log(`✅ Uploaded: ${blob.url}`);

        // Save manifest immediately to save progress
        await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));

      } catch (err) {
        console.error(`❌ Error uploading ${relativePath}:`, err.message);
        errorCount++;
      }
    }

    console.log('\n==================================================');
    console.log('🎉 Migration Completed');
    console.log(`✅ Uploaded: ${uploadedCount}`);
    console.log(`⏭️  Skipped:  ${skippedCount}`);
    console.log(`❌ Errors:    ${errorCount}`);
    console.log(`📄 Manifest saved to: ${MANIFEST_PATH}`);
    console.log('==================================================\n');

  } catch (error) {
    console.error('🔥 Critical Migration Error:', error);
    process.exit(1);
  }
}

migrate();
