import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedPhotos: [],
  theme: "light",
  user: null,
};

const unsplashSlice = createSlice({
  name: "unsplash",
  initialState,
  reducers: {
    addLikedPhoto: (state, { payload }) => {
      const like = state.likedPhotos.every((image) => {
        return image.id !== payload.id;
      });
      if (like) {
        state.likedPhotos = [...state.likedPhotos, payload];
        localStorage.setItem("likedPhoto", JSON.stringify(state.likedPhotos));
      }
    },
    addUser: (state, { payload }) => {
      state.user = payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addLikedPhoto, addUser, removeUser } = unsplashSlice.actions;
export default unsplashSlice.reducer;
