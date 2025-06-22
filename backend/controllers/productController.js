import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
import fs from 'fs';
import { v2 as cloudinary } from 'cloudinary';

// @cesc Fetch all the products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @cesc Fetch product by id
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Upload an Image
// @route POST /api/products/upload
// @access Public

const uploadProduct = asyncHandler(async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.IMAGE_CLOUD_NAME,
    api_key: process.env.IMAGE_API_KEY,
    api_secret: process.env.IMAGE_API_SECRET,
  });
  try {
    const { path } = req.file;
    const result = await cloudinary.uploader.upload(path, {
      folder: 'elitevolttech/products',
    });
    fs.unlinkSync(path);
    const { name, description, price, brand, countInStock, user } = req.body;
    const product = new Product({
      user,
      name,
      image: result.display_name + '.jpg',
      description,
      brand,
      category: 'Electronics',
      price,
      countInStock,
      rating: 0,
      numReviews: 0,
    });
    const addProduct = await product.save();
    res.status(201).json(addProduct);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: 'Cloudinary upload failed or Updating DB failed' });
  }
});

export { getProductById, getProducts, uploadProduct };
