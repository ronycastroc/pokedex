import { Box, Center, Text } from "@chakra-ui/react";
import { ButtonComponent, InfiniteScrollCard, Logo } from "@components";
import { useNavigate } from "react-router-dom";

export function List() {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <Box ml={10} mt={10} >
        <ButtonComponent onClick={() => navigate("/")}>
          Home
        </ButtonComponent>
      </Box>
      <Center 
        w="100%"
        bg="white"
        mt={5}
        borderTop="1px solid #3a3132"
        borderBottom="1px solid #3a3132"
        justifyContent="center">
        <Text fontSize={30}>Pokemon List</Text>
      </Center>

      <InfiniteScrollCard initialPokemonCount={20} fetchPokemonCount={20} />
    </>
  );
}
