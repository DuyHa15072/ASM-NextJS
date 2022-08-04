/** @format */
import categoryProducts from './categoryProducts';
import mongoose, { ObjectId } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 32,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
