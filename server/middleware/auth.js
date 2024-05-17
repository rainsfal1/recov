import { ApiError } from "../utils/ApiError.js";
//import { asyncHandler } from '../utils/asyncHandler.js';
import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";

export const verifyJWT = async (req, _, next) => {
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
    const user = await User.findById(decodedToken?._id).select("-password");
    console.log("User: ", user);
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
