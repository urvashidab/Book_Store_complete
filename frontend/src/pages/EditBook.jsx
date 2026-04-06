import React, { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditBook = () => {
  const { books, updateBook, currentYear, minYear } =
    useContext(ProjectContext);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // load current book data
  useEffect(() => {
    const bookToEdit = books.find((book) => book._id === id);
    if (bookToEdit) {
      setFormData({
        title: bookToEdit.title,
        author: bookToEdit.author,
        publishedYear: bookToEdit.publishedYear,
      });
    }
  }, [id, books]);

  //handle change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await updateBook(id, formData);

    if (success) {
      toast.success("Book was updated successfully");
      navigate("/");
    } else {
      toast.error("Failed to update book");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md">
        <h1 className="text-3xl tracking-widest uppercase pb-8 text-primaryText dark:text-darkText">
          Edit Book
        </h1>

        {/* form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 border border-borderColor dark:border-darkBorder bg-surfaceBg dark:bg-darkSurface rounded p-8"
        >
          {/* book name */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="BOOK NAME"
            className="input-form"
          />

          {/* author */}
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            placeholder="AUTHOR"
            className="input-form"
          />

          {/* published year */}
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            min={minYear}
            max={currentYear}
            onChange={handleChange}
            required
            placeholder="PUBLISHED YEAR"
            className="input-form"
          />

          {/* validation text */}
          <p className="text-xs text-mutedText dark:text-darkMuted -mt-3">
            Published year must be between {minYear} and {currentYear}
          </p>

          {/* submit button */}
          <button type="submit" className="w-fit btn mt-2 py-2.5 px-10">
            EDIT BOOK
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
