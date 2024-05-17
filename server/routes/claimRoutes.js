import express from "express";
import {
  createClaimRequest,
  deleteClaimRequest,
  getClaimRequest,
  acceptClaim,
  rejectClaim,
} from "./../controllers/claimController.js";
const router = express.Router();

router.post("/createClaim", createClaimRequest);
router.delete("/deleteClaim", deleteClaimRequest);
router.get("/getClaim", getClaimRequest);
router.patch("/acceptClaim/", acceptClaim);
router.patch("/rejectClaim/", rejectClaim);
router.delete("/deleteClaim/", deleteClaimRequest);
export default router;
