/** @format */

import Post from '../models/post';

export const listProduct = async (request, response) => {
  try {
    const post = await Post.find().exec();
    response.json(post);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const listProductDetail = async (request, response) => {
  try {
    const post = await Post.findOne({ _id: request.params.id }).exec();
    response.json(post);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const createProduct = async (request, response) => {
  try {
    const post = await Post(request.body).save();
    response.json(post);
  } catch (error) {
    response.status(400).json({ message: 'Không thêm được data' });
  }
};
export const deleteProduct = async (request, response) => {
  try {
    const post = await Post.findOneAndDelete({
      _id: request.params.id,
    }).exec();
    response.json(post);
  } catch (error) {
    response.status(400).json({ message: 'Không xóa được data' });
  }
};
export const updateProduct = async (request, response) => {
  try {
    const post = await Post.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    ).exec();
    response.json(post);
  } catch (error) {
    response.status(400).json({ message: 'Không sửa được data' });
  }
};
