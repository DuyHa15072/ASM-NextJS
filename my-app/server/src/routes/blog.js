/** @format */

import express from 'express';
import {
  createBlog,
  deleteBlog,
  listBlog,
  listBlogDetail,
  updateBlog,
} from '../controllers/blog';
const router = express.Router();

router.post('/blog', createBlog);
router.get('/blog', listBlog);
router.get('/blog/:id', listBlogDetail);
router.delete('/blog/:id', deleteBlog);
router.put('/blog/:id', updateBlog);

export default router;
