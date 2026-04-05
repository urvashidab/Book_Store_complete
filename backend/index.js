import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

//connect database
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/books", bookRoutes);

// landing page
app.get("/", (req, res) => {
  res.status(200).send("Backend is working fine");
});

const port = process.env.PORT || 8080;
//inititalize server
app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
