/** @format */
import categoryProducts from './categoryProducts';
import mongoose, { ObjectId } from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  } ,
  img: {
    type: String,
    required: true,
  } ,
  price: {
    type: Number,
    required: true
  } ,
  quantity: {
    type: Number,
    required: true
  } ,
  desc: {
    type: String,
    required: true,
  },
  category: {
      type: ObjectId,
      ref: categoryProducts
  }
}, { timestamps: true })

export default mongoose.model('Product', productSchema);
