/** @format */

import mongoose, { ObjectId } from 'mongoose';

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    category: { type: ObjectId, ref: 'categoryPost' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
