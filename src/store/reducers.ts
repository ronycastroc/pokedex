import {  Pokemon } from "@protocols";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { store } from "@store";
import { initialState } from "@store";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addFavoritePokemon: (state, action: PayloadAction<Pokemon>) => {
      state.favoritePokemons.push(action.payload);
    },
    removeFavoritePokemon: (state, action: PayloadAction<number>) => {
      state.favoritePokemons = state.favoritePokemons.filter(pokemon => pokemon.id !== action.payload);
    },
  },
});

export const { addFavoritePokemon, removeFavoritePokemon } = pokemonSlice.actions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
