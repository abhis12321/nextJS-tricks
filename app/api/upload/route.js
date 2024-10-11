import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import os from 'os';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Function to upload a file to Cloudinary
const uploadToCloudinary = (filePath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, (error, result) => {
      if (error) return reject(error);
      resolve(result);
    });
  });
};

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded.' }, { status: 400 });
  }

  // Use the system's temporary directory
  const tmpDir = os.tmpdir();
  const tempFilePath = path.join(tmpDir, `upload_${Date.now()}_${file.name}`);

  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Write the buffer to the temporary file
    fs.writeFileSync(tempFilePath, buffer);

    // Upload the file to Cloudinary
    const result = await uploadToCloudinary(tempFilePath);
    
    // Clean up the temporary file
    fs.unlinkSync(tempFilePath);

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error) {
    console.error('Error during file upload:', error);
    // Attempt to clean up the temporary file if it exists
    if (fs.existsSync(tempFilePath)) {
      fs.unlinkSync(tempFilePath);
    }
    return NextResponse.json({ error: 'Error during file upload.' }, { status: 500 });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};