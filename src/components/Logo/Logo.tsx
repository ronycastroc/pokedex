import { Image } from "@chakra-ui/react";
import logo from "../../assets/pokedex_logo.png";

export function Logo() {
  return (
    <div>
      <Image src={logo} alt="logo" />
    </div>
  );
}
