import express from 'express';
import multer from 'multer';
const router = express.Router();
import {
  getProducts,
  getProductById,
  uploadProduct,
} from '../controllers/productController.js';

const upload = multer({ dest: 'uploads/' });

router.route('/').get(getProducts);
router.route('/upload').post(upload.single('image'), uploadProduct);
router.route('/:id').get(getProductById);

export default router;
