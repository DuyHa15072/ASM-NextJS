/** @format */

import mongoose from 'mongoose';

const categoryPostSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('categoryPost', categoryPostSchema);
