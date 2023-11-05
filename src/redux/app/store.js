import { configureStore } from "@reduxjs/toolkit";
import unsplashReducer from "../features/unsplashSlice";
export const store = configureStore({
  reducer: { unsplash: unsplashReducer },
});
