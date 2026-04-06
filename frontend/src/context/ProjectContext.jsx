import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProjectContext = createContext();

const BASE_URL = "http://localhost:8080/api/books";

export const ContextProvider = ({ children }) => {
  const minYear = 1000;
  const currentYear = new Date().getFullYear();

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // fetch all books from api

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(BASE_URL);
      setBooks(response.data);
    } catch (err) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  // add book

  const addBook = async (bookData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(BASE_URL, bookData);
      setBooks((prevBookData) => [...prevBookData, response.data]);
      return true;
    } catch (err) {
      setError("Failed to add book");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // delete book by id
  const deleteBook = async (id) => {
    try {
      setLoading(true);
      setError(null);
      await axios.delete(`${BASE_URL}/${id}`);
      setBooks((prevBookData) =>
        prevBookData.filter((book) => book._id !== id),
      );
      return true;
    } catch (err) {
      setError("Failed to delete Book");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // update book

  const updateBook = async (id, updatedData) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.put(`${BASE_URL}/${id}`, updatedData);
      setBooks((prevBookData) =>
        prevBookData.map((book) => (book._id === id ? response.data : book)),
      );
      return true;
    } catch (err) {
      setError("failed to update book");
      return false;
    } finally {
      setLoading(false);
    }
  };

  // when page mounts
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <ProjectContext.Provider
      value={{
        isDark,
        setIsDark,
        books,
        loading,
        error,
        fetchBooks,
        addBook,
        updateBook,
        deleteBook,
        minYear,
        currentYear,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
