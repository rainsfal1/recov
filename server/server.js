import express from "express";
import dotenv from "dotenv";
dotenv.config({ path: "../config.env" });
import cors from "cors";
import cookieParser from "cookie-parser";
import url from 'url';
import path from 'path';
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import lostRequestRouter from "./routes/lostRequestRoutes.js";
import errorHandler from "./middleware/errorhandling.js";
import claimRouter from "./routes/claimRoutes.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors());

const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true, // Allow cookies, authorization headers, etc.
};

app.use(cors(corsOptions));

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful!"))
    .catch((err) => console.log("Error connecting to DB: ", err));

app.use("/api/v1/", userRouter);
app.use("/api/v1/items", lostRequestRouter);
app.use("/api/v1/claim", claimRouter);
app.use(errorHandler);

// Define __dirname in ES6 module
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});