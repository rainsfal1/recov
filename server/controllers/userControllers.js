import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import dotenv from "dotenv";

import { ApiError } from "../utils/ApiError.js";
import { decode } from "punycode";
dotenv.config({ path: "./config.env" });

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    throw new ApiError(400, "Please fill all fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ApiError(401, "User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      token: generateToken(user._id, user.email),
    });
  } else {
    res.status(400);
    throw new ApiError("Invalid user data");
  }
});

const LoginUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new ApiError("Please fill all fields");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        status: "success",
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        token: generateToken(user._id, user.email),
        userType: user.userType,
      });
    } else {
      throw new ApiError(400, "Invalid email or password");
    }
  } catch (err) {
    next(err);
  }
});

const generateToken = (_id, email) => {
  return jwt.sign({ _id, email }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const updatePassword = asyncHandler(async (req, res) => {
  try {
    const { password, token } = req.body;
    if (!password || !token) {
      throw new ApiError(400, "Please fill all fields");
    }
    const decodedToken = jwt.verify(token, process.env.JWT_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id);
    if (user) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
      await user.save();
      res.json({
        ok: true,
        status: "success",
        message: "Password updated successfully",
      });
    } else {
      throw new ApiError(400, "Invalid email or password");
    }
  } catch (err) {
    next(err);
  }
});
const getUserDetails = asyncHandler(async (req, res) => {
  try {
    console.log("I am in verifyJWT try block");
    // const token = req.headers.get("Authorization")
    // console.log()
    const token = req.header("Authorization");
    console.log("Token inside the server:", token);
    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, "abc123");
    console.log("decoded token:", decodedToken);
    console.log("i am here in the userDetails");
    res.status(200).json({
      email: decodedToken.email,
    });
  } catch (error) {
    next(error);
  }
});
export { registerUser, LoginUser, updatePassword, getUserDetails };