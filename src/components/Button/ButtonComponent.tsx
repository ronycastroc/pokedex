import { Button, Icon } from "@chakra-ui/react";
import { ButtonHTMLAttributes } from "react";
import { HamburgerIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonComponent({ children, ...otherProps }: ButtonProps) {
  const isHome = children === "Home";
  const icon = isHome ? ArrowBackIcon : HamburgerIcon;

  return (
    <Button 
      size="md"
      color="black"
      backgroundColor="white"
      fontSize={20}
      leftIcon={<Icon as={icon} />} 
      {...otherProps}>
      {children}
    </Button>
  );
};
