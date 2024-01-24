import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../model/users.js";

export const SignUp = async (req, res) => {
  const { email } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(500).json({ message: "Email đã tồn tại" });
    }
    const newUser = new User(req.body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    res.json({
      newUser: {
        _id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "lỗi đăng ký" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    console.log(user);
    const checkPassWord = await bcrypt.compare(password, user.password);
    if (!checkPassWord) {
      return res.status(404).json({ message: "Mật khẩu không đúng" });
    }
    const token = jwt.sign({ userId: user._id }, "12345", {
      expiresIn: "365d",
    });
    res.json({
      message: "Đăng nhập thành công",
      token,
      user: {
        _id: user._id,
        email: user.email,
        userName: user.userName,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Lỗi đăng nhập" });
  }
};
