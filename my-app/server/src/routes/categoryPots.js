/** @format */

import express from 'express';
import {
  createCategory,
  deleteCategory,
  listCategory,
  listCategoryDetail,
  updateCategory,
} from '../controllers/categoryPots';
const router = express.Router();

router.post('/category-post', createCategory);
router.get('/category-post', listCategory);
router.get('/category-post/:id', listCategoryDetail);
router.delete('/category-post/:id', deleteCategory);
router.put('/category-post/:id', updateCategory);

export default router;
