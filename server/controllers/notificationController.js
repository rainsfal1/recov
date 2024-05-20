import jwt from "jsonwebtoken";
import notifications from "../model/notification.js";

const getNotifications = async (req, res, next) => {
    try {
        console.log("I am being called in notifications");
        const authHeader = req.headers["authorization"];
        if (!authHeader) {
            throw new ApiError(401, "Unauthorized request");
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            throw new ApiError(401, "Token not provided");
        }

        console.log("Token In the Backend:", token);
        const decodedToken = jwt.verify(token, "abc123");
        console.log("Decoded token:", decodedToken);

        const userNotifications = await notifications.find({
            user: decodedToken._id,
        });
        console.log(userNotifications);
        res.status(200).json({
            ok: true,
            notifications: userNotifications,
        });
    } catch (error) {
        next(error);
    }
};

export { getNotifications };