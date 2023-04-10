import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { Pokemon } from "@protocols";
import { RootState } from "@store";
import { useSelector } from "react-redux";

export function FavoritePokemons() {
  const { favoritePokemons } = useSelector((state: RootState) => state.pokemon);

  return (
    <Center
      width="100%"
      pl={10}
      pr={10}>
      {favoritePokemons.length === 0 ?
        (<Text
          fontSize={30}
          color="black"
          mt={4}>
          You dont have a favorite pokemon yet :(
        </Text>) :
        (<Flex direction="column">
          <Text
            fontSize={30}
            color="black"
            mt={4}>
            Your favorite pokemons :)
          </Text>

          {favoritePokemons.map((pokemon: Pokemon, index: number) => (
            <Flex 
              key={index}
              alignItems="center"
              justifyContent="center">
              <Text fontSize={25} color="black">nº{pokemon.id}</Text>
              <Text fontSize={25} color="black">{pokemon.name}</Text>
              <Image 
                src={pokemon.image} 
                alt={pokemon.name}
                boxSize="100px" />
            </Flex>
          ))}
        </Flex>)
      }
    </Center>
  );
};
