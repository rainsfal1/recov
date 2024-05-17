import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import userRouter from "./routes/userRoutes.js";
import dotenv from "dotenv";
import lostRequestRouter from "./routes/lostRequestRoutes.js";
import errorHandler from "./middleware/errorhandling.js";
import claimRouter from "./routes/claimRoutes.js";

dotenv.config({ path: "./config.env" });

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
    .connect(process.env.MONGODBI_URI, {
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
const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../src/build')));
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}...`);
});