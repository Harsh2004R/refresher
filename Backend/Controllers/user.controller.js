import { UserModel } from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User Already esist ...", flag: false });
    }
    const hash = await bcrypt.hash(password, 5);
    const user = new UserModel({
      first_name,
      last_name,
      email,
      phone,
      password: hash,
    });
    await user.save();

    return res.status(200).json({
      message: "User Created Succesful",
      flag: true,
    });
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Error in Creating new user --------${error}` });
  }
};

export const verifyUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "missing login credentials ..." });
  }
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(401).json({ message: "user not found in database ..." });
  }
  if (user.isBlocked) {
    return res
      .status(403)
      .json({ message: "This account has been blocked by the admin..." });
  }

  // compair password by bcrypt ...
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).json({ message: "Incorrect password ..." });
  }
  // Creating a JWT token
  const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.status(201).json({
    message: "user verifyed ...",
    user: {
      userId: user._id,
      token,
      email,
      //role
    },
  });

  try {
  } catch (error) {
    return res
      .status(400)
      .json({ message: `Error in veriying new user ----- ${error}` });
  }
};

export const getUserInfo = async (req, res) => {};
