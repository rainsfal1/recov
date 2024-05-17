import item from "./../model/lostItem.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "./../model/usermodel.js";
import claim from "./../model/claim.js";

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
    console.log(claimId);
    const claimRequest = await claim.findById(claimId);
    if (!claimRequest) {
      throw new ApiError(404, "Claim request not found");
    }
    claimRequest.status = "Accepted";
    await claimRequest.save();
    res.status(200).json({
      ok: true,
    });
  } catch (err) {
    next(err);
  }
});
const rejectClaim = asyncHandler(async (req, res, next) => {
  try {
    console.log("I was called Once Upon A Time in rejectClaim");
    const claimId = req.query.claimId;
    const claimRequest = await claim.findById(claimId);
    if (!claimRequest) {
      throw new ApiError(404, "Claim request not found");
    }
    claimRequest.status = "Rejected";
    await claimRequest.save();
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
