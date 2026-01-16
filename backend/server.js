import express, { json } from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./src/config/db.js";
import cors from "cors";
import authRoutes from "./src/routes/authRoutes.js";

config();
connectDB();

const app = express();

/* 🔹 MIDDLEWARES (ORDER MATTERS) */
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(json());
app.use(cookieParser());

/* 🔹 ROUTES */
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

/* 🔹 SERVER */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
