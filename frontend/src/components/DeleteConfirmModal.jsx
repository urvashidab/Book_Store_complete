import React from "react";

const DeleteConfirmModal = ({ onConfirm, onCancel }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primaryBg/70 dark:bg-darkBg/70 px-4"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-lg bg-primaryBg dark:bg-darkSurface border border-borderColor dark:border-darkBorder rounded-xl p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">
          Are you sure you want to delete this book?
        </h2>

        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="rounded dark:border-darkBorder border-borderColor border text-mutedText dark:text-darkMuted hover:bg-amber-200 dark:hover:bg-amber-300 px-4 py-1"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
