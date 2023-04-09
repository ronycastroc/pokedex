import { Pokemon } from "@protocols";

export const addFavorite = (pokemon: Pokemon) => ({
  type: "ADD_FAVORITE_POKEMON",
  payload: pokemon,
});

export const removeFavorite = (pokemonId: number) => ({
  type: "REMOVE_FAVORITE_POKEMON",
  payload: pokemonId,
});
