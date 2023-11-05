import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ImagePage from "./pages/ImagePage";
import LikedPhotos from "./pages/LikedPhotos";
import Login from "./pages/Login";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";
import { addUser } from "./redux/features/unsplashSlice";
import { useDispatch } from "react-redux";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "image/:id",
          element: <ImagePage />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "likedphotos",
          element: <LikedPhotos />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user));
      } else {
        console.log("no");
      }
    });
  }, []);
  return <RouterProvider router={routes} />;
}

export default App;
