import mongoose, { Model, Schema, skipMiddlewareFunction } from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    publishedYear: {
      type: Number,
      required: true,
      min: 1000,
      max: new Date().getFullYear(),
    },
  },
  {
    timestamps: true,
  },
);

// model
const Book = mongoose.Model("Book", bookSchema);

export default Book;
