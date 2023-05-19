import { VStack, Image, Heading, Text } from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol = "₹" }) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        w={52}
        shadow={"lg"}
        p={8}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={4}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image src={img} w={10} h={10} alt="Exchange" fit={"contain"} />
        <Heading size={"md"} noOfLines={1} textAlign={"center"}>
          {symbol}
        </Heading>

        <Text w={40} noOfLines={1} textAlign={"center"}>
          {name}
        </Text>

        <Text w={40} noOfLines={1} textAlign={"center"}>
          {price ? `${currencySymbol}${price}` : "NA"}
        </Text>
      </VStack>
    </Link>
  );
};

export default CoinCard;
