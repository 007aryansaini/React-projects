import { VStack, Image, Heading, Text } from "@chakra-ui/react";

import React from "react";

const ExchangeCard = ({ name, img, rank, url }) => {
  return (
    <div>
      <a href={url} target={"blank"}>
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
            {rank}
          </Heading>

          <Text w={40} noOfLines={1} textAlign={"center"}>
            {name}
          </Text>
        </VStack>
      </a>
    </div>
  );
};

export default ExchangeCard;
