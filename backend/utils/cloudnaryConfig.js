import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.IMAGE_CLOUD_NAME,
  api_key: process.env.IMAGE_API_KEY,
  api_secret: process.env.IMAGE_API_SECRET,
});

export default cloudinary;
