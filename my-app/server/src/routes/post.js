/** @format */

import express from 'express';
import { createPost, deletePost, listPost, listPostDetail, updatePost } from '../controllers/post';
const router = express.Router();

router.get('/posts', listPost);
router.get('/posts/:id', listPostDetail);
router.post('/posts', createPost);
router.delete('/posts/:id', deletePost);
router.put('/posts/:id', updatePost);
export default router;
