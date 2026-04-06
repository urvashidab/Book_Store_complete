import React, { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { toast } from "react-toastify";

const AddBook = () => {
  const { addBook, minYear, currentYear } = useContext(ProjectContext);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await addBook(formData);
    if (success) {
      toast.success("Book was added successfully.");
      setFormData({
        title: "",
        author: "",
        publishedYear: "",
      });
    } else {
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md">
        <h1 className="text-3xl tracking-widest uppercase pb-8 text-primaryText dark:text-darkText">
          Add Book
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
            required
            placeholder="BOOK NAME"
            onChange={handleChange}
            className="input-form"
          />

          {/* author */}
          <input
            type="text"
            name="author"
            value={formData.author}
            required
            placeholder="AUTHOR"
            onChange={handleChange}
            className="input-form"
          />

          {/* published year */}
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            min={minYear}
            max={currentYear}
            required
            placeholder="PUBLISHED YEAR"
            onChange={handleChange}
            className="input-form"
          />
          {/* validation text */}
          <p className="text-xs text-mutedText dark:text-darkMuted -mt-3">
            Published year must be between {minYear} and {currentYear}
          </p>

          {/* submit button */}
          <button type="submit" className="w-fit btn mt-2 py-2.5 px-10">
            ADD BOOK
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
