import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { logout } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/features/unsplashSlice";
function getThemeFromLocalStorage() {
  return localStorage.getItem("theme") || "light";
}
function Navbar() {
  const { likedPhotos, user } = useSelector((store) => store.unsplash);
  const dispatch = useDispatch();
  const logoutUser = () => {
    logout();
    dispatch(removeUser());
  };
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link className="flex gap-2 items-center" to="/likedphotos">
              Likes
              <div className="badge badge-accent">{likedPhotos.length}</div>
            </Link>
          </li>
          <li>
            <Link className="text-teal-700" to="/login">
              Login
            </Link>
          </li>
          <li className="mt-auto mb-1">
            <button onClick={logoutUser}>{user && <BiLogOut />}</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
