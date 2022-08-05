/** @format */

import User from '../models/user';

export const userById = async (request, response, next, id) => {
  const user = await User.findById(id).exec();
  if (!user) {
    return response.status(400).json({
      message: 'Khong tim thay user',
    });
  }
  request.profile = user;
  request.profile.password = undefined;

  next();
};
export const listUser = async (req, res) => {
  try {
      const user = await User.find().exec();
      res.json(user);
  } catch (error) {
      res.status(400).json({
          messsager: "thêm không thành công"
      })
  }   
}
export const deleteUser = async (request, response) => {
  try {
    const user = await User.findOneAndDelete({
      _id: request.params.id,
    }).exec();
    response.json(user);
  } catch (error) {
    response.status(400).json({ message: 'Không xóa được data' });
  }
};
export const updateUser = async (request, response) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: request.params.id },
      request.body,
      { new: true }
    ).exec();
    response.json(user);
  } catch (error) {
    response.status(400).json({ message: 'Không sửa được data' });
  }
};
