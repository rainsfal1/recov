import item from "./../model/lostItem.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
import notification from "../model/notification.js";
const lostRequest = asyncHandler(async (req, res) => {
  try {
    console.log("Hello");
    console.log(req.body.token);
    if (!req.body.token) {
      throw new ApiError(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(req.body.token, "abc123");
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    console.log(req.body);
    const {
      email,
      itemName,
      category,
      description,
      image,
      location,
      date,
      formType,
    } = req.body;
    if (!email || !itemName || !category || !description || !location) {
      throw new ApiError(400, "Please fill all fields");
    }
    const lostitem = await item.create({
      user: user._id,
      email,
      itemName,
      category,
      description,
      image,
      location,
      date,
      itemType: formType,
    });
    if (lostitem) {
      res.status(201).json({
        ok: true,
        _id: lostitem._id,
      });
    } else {
      throw new ApiError(400, "Invalid data");
    }
  } catch (error) {
    next(error);
  }
});
const getItem = asyncHandler(async (req, res) => {
  console.log("Hello");
  const page = parseInt(req.query.page);
  const pageSize = 10;

  const startIndex = (page - 1) * pageSize;
  const paginatedItems = await item
    .find({ adminApproval: true })
    .skip(startIndex)
    .limit(pageSize);
  const totalItems = await item.countDocuments();

  const totalPages = Math.ceil(totalItems / pageSize);

  // Send the paginated products and total pages as the API response
  res.json({ items: paginatedItems, totalPages });
});
const test = (req, res) => {
  res.json({
    message: "Hello",
  });
};

const getStats = asyncHandler(async (req, res) => {
  try {
    console.log("I am being called");
    const categoryresult = await item.aggregate([
      {
        $group: {
          _id: "$category", // Group by category field
          count: { $sum: 1 }, // Count documents in each group
        },
      },
    ]);
    const categoryCounts = categoryresult.map((item) => ({
      name: item._id,
      count: item.count,
    }));
    const totalApprovedRequests = await item.find({ adminApproval: true });
    const totalRejectedRequests = await item.find({ adminApproval: false });
    const totalItems = await item.countDocuments();
    const totalLostItems = await item.countDocuments({ itemType: "lost" });
    const totalFoundItems = await item.countDocuments({ itemType: "found" });
    console.log("I am being called");
    res.json({
      data: {
        categoryCounts,
        totalItems,
        totalLostItems,
        totalFoundItems,
      },
      ok: true,
    });
  } catch (error) {
    throw new ApiError(400, "Error in getting stats");
  }
});

// This is a function to get the userSubmissons so that it can be rendered on Myaccount details page
const getUserItems = asyncHandler(async (req, res) => {
  try {
    console.log("I was Called Once Upon a Time");
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      throw new ApiError(401, "Unauthorized request");
    }
    const token = authHeader.split(" ")[1];
    console.log("Token In the Backend:", token);
    const decodedToken = jwt.verify(token, "abc123");
    console.log("decoded token:", decodedToken);
    const user = await User.findById(decodedToken?._id);
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    const userToFound = user._id;
    const userItems = await item.find({ user: userToFound });
    let itemstoMap = [];
    for (let i = 0; i < userItems.length; i++) {
      let item = userItems[i];
      itemstoMap.push({
        id: item._id,
        title: item.itemName,
        status: item.itemType,
        date: item.date,
      });
    }
    res.json({
      data: {
        items: itemstoMap,
      },
      status: 201,
      ok: true,
    });
  } catch (error) {
    next(error);
  }
});
const getItems = asyncHandler(async (req, res) => {
  console.log(
    "Hello I am in the getItems function which will be used to get all the items for the admin to approve or reject"
  );
  const page = parseInt(req.query.page);
  const pageSize = 10;

  const startIndex = (page - 1) * pageSize;

  const items = await item
    .find()
    .sort({ createdAt: -1 })
    .skip(startIndex)
    .limit(pageSize)
    .populate("user");
  const totalItems = await item.countDocuments();

  const totalPages = Math.ceil(totalItems / pageSize) + 1;

  // Send the paginated products and total pages as the API response
  res.json({
    ok: true,
    data: {
      items,
      totalPages,
      totalItems,
    },
  });
});

const acceptlostRequest = asyncHandler(async (req, res) => {
  try {
    const id = req.query.claimId;
    const itemToAccept = await item.findById(id);
    if (!itemToAccept) {
      throw new ApiError(404, "Item not found");
    }
    itemToAccept.status = "Accepted";
    itemToAccept.adminApproval = true;
    await itemToAccept.save();
    console.log("Item status has been updated successfully");
    const notificationMessage = "Your request has been accepted";
    console.log("Item to accept user", itemToAccept.user);
    const newNotification = await notification.create({
      user: itemToAccept.user,
      text: notificationMessage,
    });
    console.log("New Notification", newNotification);
    if (newNotification) {
      res.status(200).json({
        ok: true,
        message: "Request accepted",
      });
    } else {
      throw new ApiError(400, "Failed to create notification");
    }
  } catch (error) {
    next(error);
  }
});
const rejectlostRequest = asyncHandler(async (req, res) => {
  try {
    const id = req.query.claimId;
    const itemToAccept = await item.findById(id);
    if (!itemToAccept) {
      throw new ApiError(404, "Item not found");
    }
    itemToAccept.status = "Rejected";
    await itemToAccept.save();
    console.log("Item status has been updated successfully");
    const notificationMessage = "Your request has been rejected";
    console.log("Item to accept user", itemToAccept.user);
    const newNotification = await notification.create({
      user: itemToAccept.user,
      text: notificationMessage,
    });
    console.log("New Notification", newNotification);
    if (newNotification) {
      res.status(200).json({
        ok: true,
        message: "Request accepted",
      });
    } else {
      throw new ApiError(400, "Failed to create notification");
    }
  } catch (error) {
    next(error);
  }
});
export {
  lostRequest,
  getItem,
  test,
  getStats,
  getUserItems,
  getItems,
  acceptlostRequest,
  rejectlostRequest,
};
