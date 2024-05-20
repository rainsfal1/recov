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
const notifications = mongoose.model("notifications", notificationSchema);
export default notifications;