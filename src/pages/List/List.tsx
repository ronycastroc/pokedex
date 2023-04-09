import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { ButtonComponent, InfiniteScrollCard, Logo } from "@components";
import { useNavigate } from "react-router-dom";

export function List() {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <Box ml={10}>
        <ButtonComponent onClick={() => navigate("/")}>
          Home
        </ButtonComponent>
      </Box>
      <Center mt={3}>
        <Text fontSize={30}>LISTA</Text>
      </Center>
      
      <InfiniteScrollCard initialPokemonCount={20} fetchPokemonCount={20} />      
    </>
  );
}
