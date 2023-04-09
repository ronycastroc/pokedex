import { PokemonState, Pokemon } from "@protocols";
import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

const initialState: PokemonState = {
  favoritePokemons: [],
};

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

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
