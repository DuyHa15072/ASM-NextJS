/** @format */

import Category from '../models/categoryProducts';
import Product from '../models/products';

export const createCategory = async (request, response) => {
  try {
    const category = await Category(request.body).save();
    response.json(category);
  } catch (error) {
    response.status(400).json({ message: 'Không thể thêm mới' });
  }
};

export const listCategory = async (request, response) => {
  try {
    const category = await Category.find().exec();
    response.json(category);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const listCategoryDetail = async (request, response) => {
  try {
    const category = await Category.findOne({ _id: request.params.id }).exec();
    const product = await Product.find({ category }).exec();
    // const product = await Product.find({category}).populate("category").exec()
    // const product = await Product.find({category}).select("-category").exec()
    response.json({ category, product });
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const deleteCategory = async (req, res) => {
  // delete
  try {
    const categorys = await Category.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(categorys);
  } catch (error) {
    res.status(400).json({
      message: 'Product deletion failed',
    });
  }
};

export const updateCategory = async (request, response) => {
  try {
    const category = await Category.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    ).exec();
    response.json(category);
  } catch (error) {
    response.status(400).json({ message: 'Không sửa được data' });
  }
};
