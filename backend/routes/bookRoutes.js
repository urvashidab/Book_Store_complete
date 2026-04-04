import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getOneBook,
  updateBook,
} from "../controllers/bookController.js";

const router = express.Router();

// routes
router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getOneBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
