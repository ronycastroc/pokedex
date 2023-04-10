import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./reducers";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});
