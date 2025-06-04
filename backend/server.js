import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import connectDB from "./lib/db.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/event", eventRoutes);

app.listen(PORT, () => {
  console.log(`\nZENOVA's Backend is listening at PORT : ${PORT}`);
  connectDB();
});
