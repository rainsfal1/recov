import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import lostRequestRouter from "./routes/lostRequestRoutes.js";
import errorHandler from "./middleware/errorhandling.js";
import claimRouter from "./routes/claimRoutes.js";
dotenv.config({ path: "./config.env" });

app.use(cookieParser());
app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true, // Allow cookies, authorization headers, etc.
};

app.use(cors(corsOptions));

mongoose
    .connect(process.env.MONGODBI_UR, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"))
    .catch((err) => console.log("Error connecting to DB: ", err));

app.use("/api/v1/", userRouter);
app.use("/api/v1/items", lostRequestRouter);
app.use("/api/v1/claim", claimRouter);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.json({
        message: "Hello World!",
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});