import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import EditBook from "./pages/EditBook";
import AddBook from "./pages/AddBook";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]  min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <ToastContainer position="top-right" autoClose={2000} />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/addbook" element={<AddBook />} />
            <Route path="/editbook" element={<EditBook />} />
          </Routes>
        </main>
      </div>
    </>
  );
}
