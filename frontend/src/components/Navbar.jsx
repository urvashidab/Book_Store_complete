import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }
  return (
    <div className="hidden lg:flex justify-between py-6 items-center">
      {/* right side */}
      <h1 className="font-semibold text-amber-800">Book Store Managment</h1>

      {/* middle part */}
      <ul className="lg:flex justify-center items-center text-sm  gap-8 hidden  ">
        <NavLink to="/" className="nav-link">
          HOME
        </NavLink>

        <NavLink to="/about" className="nav-link">
          ABOUT
        </NavLink>

        <NavLink to="/addbook" className="nav-link">
          ADD BOOK
        </NavLink>

        <NavLink to="/editbook" className="nav-link">
          EDIT BOOK
        </NavLink>
      </ul>

      {/* right side */}
      <button
        onClick={toggleTheme}
        className="border rounded p-2 cursor-pointer"
      >
        {darkMode ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default Navbar;
