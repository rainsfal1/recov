import express from "express";
import {
  registerUser,
  LoginUser,
  updatePassword,
} from "./../controllers/userControllers.js";
import { verifyJWT } from "./../middleware/auth.js";
const router = express.Router();
router.patch("/updatePassword", updatePassword);
router.post("/signUp", registerUser);
router.post("/login", LoginUser);
router.post("/auth", verifyJWT, (req, res) => {
  console.log("User is authenticated");
  res.json({
    authenticated: true,
    message: "User is authenticated",
  });
});
export default router;
