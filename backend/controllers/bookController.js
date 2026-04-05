import Book from "../models/bookModel.js";

// create book data
export const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;

    // validation
    if (!title || !author || !publishedYear) {
      return res.status(400).json({
        message: "Fields cannot be empty",
      });
    }

    const book = await Book.create({ title, author, publishedYear });

    return res.status(201).json(book);
  } catch (err) {
    return res.status(500).json({
      message: "Error while creating book",
      error: err.message,
    });
  }
};

// get all books
export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();

    return res.status(200).json(books);
  } catch (err) {
    return res.status(500).json({
      message: "Error while getting books",
      error: err.message,
    });
  }
};

// get one book
export const getOneBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).json(book);
  } catch (err) {
    return res.status(500).json({
      message: "Error while getting book by ID",
      error: err.message,
    });
  }
};

// delete book by id
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).json({
      message: "Book has been deleted",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error while deleting book",
      error: err.message,
    });
  }
};

// update data
export const updateBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;

    // validation
    if (!title || !author || !publishedYear) {
      return res.status(400).json({
        message: "Fields cannot be empty",
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, publishedYear },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedBook) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    return res.status(200).json(updatedBook);
  } catch (err) {
    return res.status(500).json({
      message: "Error while updating book",
      error: err.message,
    });
  }
};
