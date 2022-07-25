/** @format */

import express from 'express';
import {
  createProduct,
  deleteProduct,
  listProduct,
  listProductDetail,
  updateProduct,
} from '../controllers/post';
const router = express.Router();

router.get('/posts', listProduct);
router.get('/posts/:id', listProductDetail);
router.post('/posts', createProduct);
router.delete('/posts/:id', deleteProduct);
router.put('/posts/:id', updateProduct);
export default router;
