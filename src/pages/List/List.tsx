import { Box, Center, Text } from "@chakra-ui/react";
import { ButtonComponent, InfiniteScrollCard, Logo } from "@components";
import { useNavigate } from "react-router-dom";

export function List() {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <Box ml={10} mt={10} >
        <ButtonComponent  onClick={() => navigate("/")}>
          Home
        </ButtonComponent>
      </Box>
      <Center mt={3}>
        <Text fontSize={30}>Pokemon List</Text>
      </Center>
      
      <InfiniteScrollCard initialPokemonCount={20} fetchPokemonCount={20} />      
    </>
  );
}
