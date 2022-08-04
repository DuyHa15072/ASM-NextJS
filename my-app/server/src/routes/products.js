/** @format */

import express from 'express';
import {
  post,
  deleteProduct,
  listProduct,
  listProductDetail,
  readProduct,
  updateProduct,
} from '../controllers/products';
const router = express.Router();

router.get('/products', listProduct);
router.get('/products/:id', listProductDetail);
router.get('/products/:id', readProduct);
router.post('/products', post);
router.delete('/products/:id', deleteProduct);
router.put('/products/:id', updateProduct);
export default router;
