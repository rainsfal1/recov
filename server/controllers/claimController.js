import item from "./../model/lostItem.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
import claim from "./../model/claim.js";
import notifications from "../model/notification.js";
const createClaimRequest = asyncHandler(async (req, res) => {
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
    const { description, itemId, additionalInfo } = req.body;
    console.log("Error at line 22");
    if (!description || !itemId) {
      throw new ApiError(400, "Please fill all fields");
    }
    console.log("Error at line 26");
    const claimItem = await claim.create({
      user: user._id,
      item: itemId,
      description,
      additionalInfo,
    });
    if (claimItem) {
      res.status(201).json({
        ok: true,
        _id: claimItem._id,
      });
    } else {
      console.log("Error at line 37");
      throw new ApiError(400, "Invalid data");
    }
  } catch (error) {
    next(error);
  }
});

const getClaimRequest = asyncHandler(async (req, res, next) => {
  try {
    console.log("I was called Once Upon A Time in library.js");
    console.log(req.query);
    const page = parseInt(req.query.page);
    console.log("Page this is being callled", page);
    const startIndex = (page - 1) * 6;
    const paginatedClaimRequests = await claim
        .find()
        .sort({ timestamp: -1 })
        .skip(startIndex)
        .limit(6)
        .populate("user")
        .populate("item");
    const totalClaims = await claim.countDocuments();
    const totalPages = Math.ceil(totalClaims / 6) + 1;
    res.status(200).json({
      ok: true,
      data: paginatedClaimRequests,
      totalPages,
      totalClaims,
    });
  } catch (err) {
    next(err);
  }
});

const acceptClaim = asyncHandler(async (req, res, next) => {
  try {
    const claimId = req.query.claimId;
    const claimRequest = await claim
        .findById(claimId)
        .populate("user")
        .populate("item");
    console.log(claimRequest);
    if (!claimRequest) {
      throw new ApiError(404, "Claim request not found");
    }
    claimRequest.status = "Accepted";
    await claimRequest.save();
    console.log(claimRequest);
    const notificationMessageForBechara = `Your claim request for ${claimRequest.item.itemName} has been accepted.You may contact at ${claimRequest.item.email} for your item.`;
    const notificationMessageForNeutral = `Claim request has been made by ${claimRequest.user.fullName} for ${claimRequest.item.itemName}.You may contact at ${claimRequest.user.email} for further details`;
    const newNotification = await notifications.create({
      user: claimRequest.user._id,
      text: notificationMessageForBechara,
    });

    const notificationForNeutral = await notifications.create({
      user: claimRequest.item._id,
      text: notificationMessageForNeutral,
    });

    res.status(200).json({
      ok: true,
    });
  } catch (err) {
    next(err);
  }
});
const rejectClaim = asyncHandler(async (req, res, next) => {
  try {
    const claimId = req.query.claimId;
    const claimRequest = await claim
        .findById(claimId)
        .populate("user")
        .populate("item");
    console.log(claimRequest);
    if (!claimRequest) {
      throw new ApiError(404, "Claim request not found");
    }
    claimRequest.status = "Rejected";
    await claimRequest.save();
    const notificationMessageForBechara = `Your claim request for ${claimRequest.item.itemName} has been rejeccted`;
    const newNotification = await notifications.create({
      user: claimRequest.user._id,
      text: notificationMessageForBechara,
    });
    res.status(200).json({
      ok: true,
    });
  } catch (err) {
    next(err);
  }
});
const deleteClaimRequest = asyncHandler(async (req, res) => {
  try {
    const claimId = req.query.claimId;
    const claimRequest = await claim.findByIdAndDelete(claimId);
    res.status(200).json({
      ok: true,
    });
  } catch (err) {
    next(err);
  }
});
export {
  createClaimRequest,
  deleteClaimRequest,
  getClaimRequest,
  acceptClaim,
  rejectClaim,
};