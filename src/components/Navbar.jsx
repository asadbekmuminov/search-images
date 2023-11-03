import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "light";
}
function Navbar() {
  const [mode, setMmode] = useState(getThemeFromLocalStorage);
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    localStorage.setItem("theme", mode);
  }, [mode]);
  const ChangeMode = () => {
    setMmode((prev) => {
      return prev == "light" ? "dark" : "light";
    });
  };
  return (
    <div className="container">
      <div className="flex justify-between flex-col sm:flex-row items-center py-7 ">
        <Link
          to="/"
          className="font-extrabold text-2xl flex items-center  gap-5 "
        >
          Unsplash
          <span
            className="ml-auto cursor-pointer "
            onClick={ChangeMode}
            style={{ fontSize: "24px", color: "black" }}
          >
            {mode == "light" ? <FaMoon /> : <FaSun />}
          </span>
        </Link>

        <ul className="flex gap-3 font-bold text-xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
