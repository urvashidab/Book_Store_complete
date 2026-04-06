import { Link, NavLink } from "react-router-dom";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(ProjectContext);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }
  return (
    <div className="hidden lg:flex justify-between py-6 items-center">
      {/* right side */}
      <h1 className="font-semibold uppercase tracking-widest">
        Book Store Managment
      </h1>

      {/* middle part */}
      <ul className="lg:flex justify-center items-center text-sm  gap-8 hidden  ">
        <NavLink to="/" className="nav-link">
          HOME
        </NavLink>

        <NavLink to="/addbook" className="nav-link">
          ADD BOOK
        </NavLink>

        <NavLink to="/editbook" className="nav-link">
          EDIT BOOK
        </NavLink>
      </ul>

      {/* right side */}
      <button onClick={toggleTheme} className=" rounded p-2 btn text-lg">
        {isDark ? <MdDarkMode /> : <MdOutlineLightMode />}
      </button>
    </div>
  );
};

export default Navbar;
