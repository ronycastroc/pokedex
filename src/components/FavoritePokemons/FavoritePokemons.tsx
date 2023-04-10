import { Center, Flex, Image, Text } from "@chakra-ui/react";
import { Pokemon } from "@protocols";
import { RootState, removeFavoritePokemon } from "@store";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon } from "@chakra-ui/icons";
import { useLocalStorage } from "@hooks";
import { useEffect } from "react";

export function FavoritePokemons() {
  const { favoritePokemons } = useSelector((state: RootState) => state.pokemon);
  const dispatch = useDispatch();
  const [storedFavoritePokemons, setStoredFavoritePokemons] = useLocalStorage("favoritePokemons", []);

  useEffect(() => {
    setStoredFavoritePokemons(favoritePokemons);
  }, [favoritePokemons, setStoredFavoritePokemons]);

  function deletePokemon(pokemon: Pokemon) {
    dispatch(removeFavoritePokemon(pokemon.id));
  };

  return (
    <Center w="100%">
      {favoritePokemons.length === 0 ?
        (<Flex
          w="100%"
          bg="white"
          mt={5}
          mb={5}
          borderTop="1px solid #3a3132"
          borderBottom="1px solid #3a3132"
          justifyContent="center">
          <Text
            fontSize={30}
            color="black">
            You dont have a favorite pokemon yet :(
          </Text>
        </Flex>) :
        (<Flex direction="column">
          <Flex
            w="100vw"
            bg="white"
            mt={5}
            mb={5}
            borderTop="1px solid #3a3132"
            borderBottom="1px solid #3a3132"
            justifyContent="center">
            <Text
              fontSize={30}
              color="black">
              Your favorite pokemons :)
            </Text>
          </Flex>
          {favoritePokemons.map((pokemon: Pokemon, index: number) => (
            <Flex
              key={index}
              alignItems="center"
              justifyContent="space-around"
              w="20%"
              m="0 auto">
              <Text fontSize={25} color="black">nº{pokemon.id}</Text>
              <Text fontSize={25} color="black">{pokemon.name}</Text>
              <Image
                src={pokemon.image}
                alt={pokemon.name}
                boxSize="100px" />
              <Flex
                bg="white"
                w={5} h={5}
                justifyContent="center"
                alignItems="center"
                borderRadius={100}
                border="1px solid #3a3132"
                cursor="pointer"
                onClick={() => deletePokemon(pokemon)}>
                <CloseIcon boxSize="10px" />
              </Flex>
            </Flex>
          ))}
        </Flex>)
      }
    </Center>
  );
};
