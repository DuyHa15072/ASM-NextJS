/** @format */

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import homeRoute from './routes/home';
import productRoute from './routes/products';
import postRoute from './routes/post';
import categoryProductsRoute from './routes/categoryProducts';
import categoryPostRoute from './routes/categoryPots';
import authRoute from './routes/auth';
import orderRoute from './routes/order';

const app = express();
dotenv.config();

// middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// connnect database
mongoose
  .connect(
    'mongodb+srv://Phanvuongtb:QnSURs6503zmH1wd@cluster0.t8xiti9.mongodb.net/Shop_giay?retryWrites=true&w=majority'
  )
  .then(() => console.log('Connect db thanh cong'));

// Router
app.use('/api', productRoute);
app.use('/api', postRoute);
app.use('/api', categoryProductsRoute);
app.use('/api', categoryPostRoute);
app.use('/api', authRoute);
app.use('/api/orders', orderRoute);

// connection
const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server is running port', PORT);
});
