import express from "express";

import { getNotifications } from "./../controllers/notificationController.js";
const router = express.Router();
router.post("/", getNotifications);
export default router;