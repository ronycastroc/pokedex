import { Image, Flex } from "@chakra-ui/react";
import logo from "../../assets/pokedex_logo.png";

export function Logo() {
  return (
    <Flex
      width="100%"
      height={100}
      alignItems="center"
      justifyContent="center"
      mt={5}>
      <Image
        src={logo}
        alt="logo"
        w={250} />
    </Flex>
  );
}
