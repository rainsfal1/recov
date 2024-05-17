import mongoose from "mongoose";
const itemSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        itemName: {
            type: String,
            required: [true, "Item Name is required"],
        },
        category: {
            type: String,
            required: [true, "Category is required"],
        },
        description: {
            type: String,
            required: [true, "Please Add A Description"],
        },
        image: {
            type: String,
        },
        location: {
            type: String,
            required: [true, "Please Add a Location"],
        },
        date: {
            type: Date,
            default: Date.now,
        },
        email: {
            type: String,
            required: [true, "Please Add a Email"],
        },
        status: {
            type: String,
            default: "Pending",
        },
        adminApproval: {
            type: Boolean,
            default: false,
        },
        itemType: {
            type: String,
            required: [true, "Please Add a Item Type"],
        },
    },
    {
        timestamps: true,
    }
);

const item = mongoose.model("item", itemSchema);
export default item;