import { ButtonComponent, FavoritePokemons, Logo } from "@components";
import { Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <Center 
        width="100%"
        pl={10}
        pr={10}>
        <Text
          fontSize={30}
          color="black"
          mt={4}>
          Hello, welcome to your pokédex, click on the button to see the list of pokemons.
        </Text>
      </Center>
      <Center 
        width="100%"
        mt={5}>
        <ButtonComponent onClick={() => navigate("/list")}>
          List
        </ButtonComponent>
      </Center>
      
      <FavoritePokemons />
    </>
  );
}
