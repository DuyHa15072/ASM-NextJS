/** @format */

import express from 'express';
import { signin, signup } from '../controllers/auth';
import { deleteUser, listUser, updateUser } from '../controllers/user';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/users', listUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

export default router;
