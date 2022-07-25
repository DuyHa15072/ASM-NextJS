/** @format */

import mongoose from 'mongoose';

const categoryProductsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('categoryProducts', categoryProductsSchema);
