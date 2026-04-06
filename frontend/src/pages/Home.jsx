import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { books, loading, error, deleteBook } = useContext(ProjectContext);

  return (
    <div className="py-10">
      {/* header of page */}
      <div className="flex justify-between items-center mb-6">
        {/* main heading */}
        <div>
          <h1 className="text-3xl tracking-widest uppercase">Dashboard</h1>
        </div>
        {/* add book button */}
        <Link to="/addbook" className="btn px-6 py-2 uppercase ">
          + Add Book
        </Link>
        {/* filters */}
        {/* <select className="px-6 py-1.5 text-mutedText  dark:text-darkMuted ">
          <option value="">Filter</option>
          <option value="title">Title</option>
          <option value="auhtorName">Author Name</option>
          <option value="year">Published Year</option>
        </select> */}
      </div>

      {/* Total books count */}
      <p className="mb-4 text-mutedText dark:text-darkMuted">
        Total Books: {books.length}
      </p>

      {/* Loading state */}
      {loading && <p>Loading books...</p>}

      {/* Error state */}
      {error && <p>{error}</p>}

      {/* Empty state */}
      {!loading && books.length === 0 && (
        <p>No books found. Click "Add Book" to create one.</p>
      )}

      {/* Table */}
      {!loading && books.length > 0 && (
        <div className="border border-borderColor dark:border-darkBorder rounded overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-surfaceBg dark:bg-darkSurface">
              <tr className="text-mutedText dark:text-darkMuted">
                <th className="p-4">Title</th>
                <th className="p-4">Author</th>
                <th className="p-4">Year</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book) => (
                <tr
                  key={book._id}
                  className="border-t border-borderColor dark:border-darkBorder"
                >
                  <td className="p-4">{book.title}</td>

                  <td className="p-4">{book.author}</td>

                  <td className="p-4">{book.publishedYear}</td>

                  <td className="p-4 flex gap-4">
                    <Link
                      to={`/editbook/${book._id}`}
                      className="btn px-4 py-1"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => deleteBook(book._id)}
                      className="btn px-4 py-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
