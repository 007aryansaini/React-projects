import { Container, Image } from "@chakra-ui/react";
import React from "react";
import btcImg from "./../assets/btc.png";

const Home = () => {
  return (
    <Container width={"full"} height={"full"}>
      <Image src={btcImg}></Image>
    </Container>
  );
};

export default Home;
