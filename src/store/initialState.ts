import { PokemonState } from "@protocols";

const favoritePokemonsFromLocalStorage = localStorage.getItem("favoritePokemons");

export const initialState: PokemonState = {
  favoritePokemons: favoritePokemonsFromLocalStorage ? JSON.parse(favoritePokemonsFromLocalStorage) : [],
};
