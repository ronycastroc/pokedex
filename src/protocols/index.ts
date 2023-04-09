export type Type = {
  slot?: number;
  type: {
    name: string;
    url: string
  }
};

export type Pokemon = {
  id: number;
  name: string;
  image: string
  types?: Type[];
};

export type CardProps = {
  pokemons: Pokemon[];
};

export type Props = {
  initialPokemonCount: number;
  fetchPokemonCount: number;
};

export type Action =
  | { type: "ADD_FAVORITE_POKEMON", payload: Pokemon }
  | { type: "REMOVE_FAVORITE_POKEMON", payload: number };

export type PokemonState = {
  favoritePokemons: Pokemon[];
}

