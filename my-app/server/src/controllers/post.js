/** @format */


import Post from '../models/post';

export const createPost = async (request, response) => {
  try {
    const blog = await Post(request.body).save();
    response.json(blog);
  } catch (error) {
    response.status(400).json({ message: 'Không thể thêm mới' });
  }
};

export const listPost = async (request, response) => {
  try {
    const blog = await Post.find().exec();
    response.json(blog);
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const listPostDetail = async (request, response) => {
  try {
    const post = await Post.findOne({ _id: request.params.id }).exec();
    response.json({  post });
  } catch (error) {
    response.status(400).json({ message: 'Không thấy data' });
  }
};
export const deletePost = async (req, res) => {
  // delete
  try {
    const post = await Post.findOneAndDelete({
      _id: req.params.id,
    }).exec();
    res.json(post);
  } catch (error) {
    res.status(400).json({
      message: 'Blog deletion failed',
    });
  }
};

export const updatePost = async (request, response) => {
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
