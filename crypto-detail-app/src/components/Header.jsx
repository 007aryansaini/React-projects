import React from "react";
import { Link } from "react-router-dom";
import { Button, HStack } from "@chakra-ui/react";

const Header = () => {
  return (
    <HStack
      p={"4"}
      shadow={"base"}
      bgColor={"blackAlpha.900"}
      gap={"50"}
      justifyContent={"flex-end"}
      paddingRight={"50"}
    >
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/">Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
