import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Type = {
  slot?: number;
  type: {
    name: string;
    url: string
  }
};

type Pokemon = {
  id: number;
  name: string;
  image: string
  types: Type[];
};

type CardProps = {
  pokemons: Pokemon[];
};

export function Card({ pokemons }: CardProps) {
  return (
    <>
      {pokemons?.map((pokemon: Pokemon, index: number) => (
        <Box
          key={index}
          bg="linear-gradient(to bottom, #FFCE31, #f9f9f1 70%)"
          w={200}
          h={250}
          mb={10}
          mt={10}
          borderRadius={10}
          _hover={{ transform: "scale(1.1)", transition: "transform 0.4s" }}
          cursor="pointer"
          position="relative">
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
                Nº{pokemon.id}
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
}
