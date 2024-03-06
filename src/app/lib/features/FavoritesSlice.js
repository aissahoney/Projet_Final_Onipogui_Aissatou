import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: []
};

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const book = action.payload;
      if (!state.favorites.some((favorite) => favorite.id == book.id)) {
        state.favorites.push(book);
        return state;
      }
    },
    removeFavorite: (state, action) => {
      const book = action.payload;
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== book.id
      );},

      removeAll:(state)=>{
        state.favorites =[];
        return state;

      }
  },
});

export const { addFavorite, removeFavorite , removeAll} = FavoritesSlice.actions;

export default FavoritesSlice.reducer;
