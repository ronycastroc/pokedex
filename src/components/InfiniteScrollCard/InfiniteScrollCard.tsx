import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemons } from "@services";
import { Card } from "@components";
import { Flex, Spinner } from "@chakra-ui/react";

type Props = {
  initialPokemonCount: number;
  fetchPokemonCount: number;
};

type Type = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
};

export function InfiniteScrollCard({ initialPokemonCount, fetchPokemonCount }: Props) {
  const [pokemons, setPokemons] = useState<Array<{
    id: number;
    name: string;
    image: string;
    types: Array<{
      type: {
        name: string;
        url: string;
      }
    }>;
  }>>([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await getPokemons(1, initialPokemonCount);
      const newPokemons = response.map((pokemon) => ({
        id: pokemon.data.id,
        name: pokemon.data.name,
        image: pokemon.data.sprites.front_default,
        types: pokemon.data.types,
      }));
      setPokemons(newPokemons);
    };

    fetchPokemons();
  }, [initialPokemonCount]);

  const fetchMorePokemons = async () => {
    const response = await getPokemons(
      pokemons.length + 1,
      pokemons.length + fetchPokemonCount
    );
    const newPokemons = response.map((pokemon) => ({
      id: pokemon.data.id,
      name: pokemon.data.name,
      image: pokemon.data.sprites.front_default,
      types: pokemon.data.types.map((type: Type) => ({
        slot: type.slot,
        type: {
          name: type.type.name,
          url: type.type.url,
        },
      })),
    }));
    setPokemons([...pokemons, ...newPokemons]);
  };

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={fetchMorePokemons}
      hasMore={true}
      loader={<Spinner />}
    >
      <Flex
        w="90%"
        margin="0 auto"
        justifyContent="space-around"
        columnGap={10}
        wrap="wrap"
      >
        <Card pokemons={pokemons} />
      </Flex>
    </InfiniteScroll>
  );
};
