import { ButtonComponent, Logo } from "@components";
import { Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Logo />
      <Center width="100%">
        <Text
          fontSize={30}
          color="black"
          mt={4}>
          Olá, seja bem vindo ao seu pokedéx, clique no botão para ver a lista de pokemons.
        </Text>
      </Center>
      <Center 
        width="100%"
        mt={8}>
        <ButtonComponent onClick={() => navigate("/list")}>
          Lista
        </ButtonComponent>
      </Center>
    </>
  );
}
