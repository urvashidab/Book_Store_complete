import { Link, NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useContext, useState } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ProjectContext);
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu((prev) => !prev);
  }

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }
  return (
    <div className=" flex justify-between py-6 items-center">
      {/* right side */}
      <h1 className="font-semibold uppercase md:tracking-widest ">
        Book Store Manager
      </h1>

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
      </ul>

      {/* right side */}
      <button onClick={toggleTheme} className=" rounded p-2 btn text-lg">
        {isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>

      {/* for sm and md screen menu */}

      <button onClick={handleMenu} className="lg:hidden">
        {!menu ? (
          <GiHamburgerMenu className="text-2xl md:text-4xl" />
        ) : (
          <MdCancel className="text-2xl md:text-4xl" />
        )}
      </button>

      {menu && (
        <ul className="flex flex-col gap-6 md:gap-12 fixed top-20 right-0  w-1/2  h-screen  md:text-2xl shadow-lg p-10 lg:hidden bg-primaryBg dark:bg-darkBg">
          <NavLink to="/" className="nav-link" onClick={() => setMenu(false)}>
            HOME
          </NavLink>

          <NavLink
            to="/about"
            className="nav-link"
            onClick={() => setMenu(false)}
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/addbook"
            className="nav-link"
            onClick={() => setMenu(false)}
          >
            ADD BOOK
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
