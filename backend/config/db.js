import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);

    return console.log("mongodb connected successfully");
  } catch (err) {
    console.err("Mongo connection failed", err.message);
    process.exit(1); // stops server if connection fails
  }
};

export default connectDB;
