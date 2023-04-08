import { Logo } from "@components";
import { Text, Center } from "@chakra-ui/react";

export function Home() {
  return (
    <>
      <Logo />
      <Center width="100%">
        <Text
          fontSize={30}
          color="black"
          textAlign="center"
          mt={4}>
          Olá, seja bem vindo ao seu pokedéx, clique no botão para continuar
        </Text>
      </Center>
    </>
  );
}
