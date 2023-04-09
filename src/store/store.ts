import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./reducers";

const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export default store;
