import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { CardProps, Pokemon, Type } from "@protocols";
import { useDispatch, useSelector } from "react-redux";
import { RootState, addFavoritePokemon, removeFavoritePokemon } from "@store";
import { useLocalStorage } from "@hooks";
import { useEffect } from "react";

export function Card({ pokemons }: CardProps) {
  const dispatch = useDispatch();
  const [storedFavoritePokemons, setStoredFavoritePokemons] = useLocalStorage("favoritePokemons", []);
  const { favoritePokemons } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    setStoredFavoritePokemons(favoritePokemons);
  }, [favoritePokemons, setStoredFavoritePokemons]);

  function handleFavorite(pokemon: Pokemon) {
    const index = favoritePokemons.findIndex(p => p.id === pokemon.id);

    if (index !== -1) {
      dispatch(removeFavoritePokemon(pokemon.id));
    } else {
      dispatch(addFavoritePokemon(pokemon));
    }
  };

  return (
    <>
      {pokemons?.map((pokemon: Pokemon, index: number) => (
        <Box
          key={index}
          bg="linear-gradient(to bottom, #FFCE31, #f9f9f1 70%)"
          w={200}
          h={250}
          mt={10}
          borderRadius={10}
          _hover={{ transform: "scale(1.1)", transition: "transform 0.4s" }}
          cursor="pointer"
          position="relative"
          onClick={() => handleFavorite(pokemon)}
          border={
            favoritePokemons.some((p) => p.id === pokemon.id)
              ? "3px solid #3a3132"
              : undefined
          }>
          {favoritePokemons.some((p) => p.id === pokemon.id) ?
            <StarIcon
              position="absolute"
              top={2}
              right={2} />
            : undefined}
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            boxSize="200px" />
          <Box
            w="100%"
            h="70"
            bottom={0}
            position="absolute">
            <Flex
              w="100%"
              h="50%"
              justifyContent="space-around"
              alignItems="center">
              <Text
                color="black"
                fontSize={22}>
                nº{pokemon.id}
              </Text>
              <Text
                color="black"
                fontSize={22}>
                {pokemon.name}
              </Text>
            </Flex>
            <Flex
              w="100%"
              h="50%"
              justifyContent="space-around"
              alignItems="center">
              {pokemon?.types?.map((type: Type, index: number) => (
                <Flex
                  key={index}
                  h="60%"
                  bg="pink"
                  pr={3}
                  pl={3}
                  justifyContent="center"
                  alignItems="center"
                  borderRadius={4}>
                  <Text
                    color="black"
                    fontSize={15}>
                    {type.type.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>
      ))}
    </>
  );
};
