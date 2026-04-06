import React from "react";

const AddBook = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md">
        <h1 className="text-3xl tracking-widest uppercase pb-8 text-primaryText dark:text-darkText">
          Add Book
        </h1>

        {/* form */}
        <form className="flex flex-col gap-6 border border-borderColor dark:border-darkBorder bg-surfaceBg dark:bg-darkSurface rounded p-8">
          {/* book name */}
          <input
            type="text"
            required
            placeholder="BOOK NAME"
            className="input-form"
          />

          {/* author */}
          <input
            type="text"
            required
            placeholder="AUTHOR"
            className="input-form"
          />

          {/* published year */}
          <input
            type="number"
            required
            placeholder="PUBLISHED YEAR"
            className="input-form"
          />

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
