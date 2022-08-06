/** @format */


import Blog from '../models/blog';

export const createBlog = async (request, response) => {
  try {
    const blog = await Blog(request.body).save();
    response.json(blog);
  } catch (error) {
    response.status(400).json({ message: 'Không thể thêm mới' });
  }
};

export const listBlog = async (request, response) => {
  try {
    const blog = await Blog.find().exec();
    response.json(blog);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const listBlogDetail = async (request, response) => {
  try {
    const blog = await Blog.findOne({ _id: request.params.id }).exec();
    response.json({  blog });
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const deleteBlog = async (req, res) => {
  // delete
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(blog);
  } catch (error) {
    res.status(400).json({
      message: 'Blog deletion failed',
    });
  }
};

export const updateBlog = async (request, response) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    ).exec();
    response.json(blog);
  } catch (error) {
    response.status(400).json({ message: 'Không sửa được data' });
  }
};
