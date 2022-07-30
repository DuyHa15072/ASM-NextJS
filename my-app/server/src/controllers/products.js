/** @format */

import Product from '../models/products';

export const listProduct = async (request, response) => {
  try {
    const product = await Product.find().exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};

export const createProduct = async (request, response) => {
  try {
    const product = await Product(request.body).save();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: 'Không thêm được data' });
  }
};
export const listProductDetail = async (request, response) => {
  try {
    const product = await Product.findOne({ _id: request.params.id }).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const deleteProduct = async (request, response) => {
  try {
    const product = await Product.findOneAndDelete({
      _id: request.params.id,
    }).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: 'Không xóa được data' });
  }
};
export const updateProduct = async (request, response) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    ).exec();
    response.json(product);
  } catch (error) {
    response.status(400).json({ message: 'Không sửa được data' });
  }
};
