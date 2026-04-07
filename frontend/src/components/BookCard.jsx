import React from "react";

const BookCard = ({ book, onClose }) => {
  return (
    /* backdrop — click outside to close */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primaryBg/70 dark:bg-darkBg/70 px-4"
      onClick={onClose}
    >
      {/* modal card */}
      <div
        className="w-full max-w-lg bg-primaryBg dark:bg-darkSurface border border-borderColor dark:border-darkBorder rounded-xl p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-mutedText dark:text-darkMuted hover:text-primaryText dark:hover:text-darkText text-xl transition-colors cursor-pointer"
        >
          ✕
        </button>

        {/* heading */}
        <h2 className="text-2xl tracking-widest uppercase mb-8 text-primaryText dark:text-darkText">
          Book Details
        </h2>

        {/* fields */}
        <div className="flex flex-col gap-6">
          <div className="border-b border-borderColor dark:border-darkBorder pb-4">
            <p className="text-xs tracking-widest uppercase text-mutedText dark:text-darkMuted mb-1">
              Title
            </p>
            <p className="text-lg text-primaryText dark:text-darkText">
              {book.title || "—"}
            </p>
          </div>

          <div className="border-b border-borderColor dark:border-darkBorder pb-4">
            <p className="text-xs tracking-widest uppercase text-mutedText dark:text-darkMuted mb-1">
              Author
            </p>
            <p className="text-lg text-primaryText dark:text-darkText">
              {book.author || "—"}
            </p>
          </div>

          <div className="border-b border-borderColor dark:border-darkBorder pb-4">
            <p className="text-xs tracking-widest uppercase text-mutedText dark:text-darkMuted mb-1">
              Published Year
            </p>
            <p className="text-lg text-primaryText dark:text-darkText">
              {book.publishedYear || "—"}
            </p>
          </div>
        </div>

        {/* Amazon search button */}
        <a
          href={`https://www.amazon.com/s?k=${encodeURIComponent(
            book.title + " " + book.author,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn inline-block mt-8 px-6 py-1.5"
        >
          SEARCH ON AMAZON
        </a>
      </div>
    </div>
  );
};

export default BookCard;
