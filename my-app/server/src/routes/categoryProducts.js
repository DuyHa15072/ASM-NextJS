/** @format */

import express from 'express';
import {
  createCategory,
  deleteCategory,
  listCategory,
  listCategoryDetail,
  updateCategory,
} from '../controllers/categoryProducts';
const router = express.Router();

router.post('/categorys', createCategory);
router.get('/categorys', listCategory);
router.get('/categorys/:id', listCategoryDetail);
router.delete('/categorys/:id', deleteCategory);
router.put('/categorys/:id', updateCategory);

export default router;
