/** @format */

import Product from '../models/products';

export const listProduct = async (req, res) => {
  let { name } = req.query; // khai báo và nhận dự liệu gửi lên
  if (name) {
    if (name) {
      try {
        const products = await Product.find({
          name: new RegExp(name, 'i'),
        }).exec();
        res.status(200).json(products);
      } catch (error) {
        res.status(401).json({
          message: 'Lỗi , không lấy được sản phẩm',
        });
      }
    }
  } else {
    try {
      const product = await Product.find().exec();
      res.status(200).json(product);
    } catch (error) {
      res.status(401).json({
        message: 'Lỗi , không lấy được sản phẩm',
      });
    }
  }
};

// export const listProduct = async (request, response) => {
//   try {
//     const product = await Product.find().exec();
//     response.json(product);
//   } catch (error) {
//     response.status(400).json({ message: 'Không thấy data' });
//   }
// };

export const post = async (req, res) => {
  try {
    const products = await Product(req.body).save();
    res.json(products);
  } catch (error) {
    res.json({ message: 'Khong thay data' });
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

export const readProduct = async (req, res) => {
  // get a product detail
  // get a product
  try {
    const products = await Product.findOne({ _id: req.params.id }).exec();
    console.log(req.params.id); //params trả về 1 objec
    res.json(products);
  } catch (error) {
    res.status(400).json({
      message: 'Thêm sản phẩm không thành công',
    });
  }
};
