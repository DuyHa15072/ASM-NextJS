/** @format */

import express from 'express';
import { signin, signup } from '../controllers/auth';
import { deleteUser, listUser, listUserDetail, updateUser } from '../controllers/user';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/users', listUser);
router.get('/users/:id', listUserDetail);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

export default router;
