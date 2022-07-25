/** @format */

import mongoose, { ObjectId } from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    price: { type: Number, required: true },
    category: { type: ObjectId, ref: 'categoryProducts' },
    description: { type: String, required: true },
    numReviews: { type: Number, default: 0, required: true },
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
