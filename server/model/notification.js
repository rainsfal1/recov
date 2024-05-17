import mongoose from "mongoose";
//import User from "./user.js";
const notificationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    text: {
      type: String,
      required: [true, "Please Add A Text"],
    },
  },
  {
    timestamps: true,
  }
);
const notification = mongoose.model("notification", notificationSchema);
export default notification;
