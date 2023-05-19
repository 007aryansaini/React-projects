import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "./../index";
import { Container, HStack, Button, RadioGroup, Radio } from "@chakra-ui/react";

import Loader from "../components/Loader";

import ErrorCard from "./ErrorCard";
import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const btns = new Array(132).fill(1);

  useEffect(() => {
    async function fetchExchanges() {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchExchanges();
  }, [currency, page]);

  if (error) return <ErrorCard message={"Error while fetching coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup
            value={currency}
            onChange={setCurrency}
            p={"8"}
            display={"flex"}
            justifyContent={"center"}
          >
            <HStack spacing={"4"} gap={35}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack w={"full"} wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((coin) => {
              return (
                <CoinCard
                  key={coin.id}
                  id={coin.id}
                  name={coin.name}
                  img={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  currencySymbol={currencySymbol}
                />
              );
            })}
          </HStack>

          <HStack w={"full"} p={"8"} overflow={"auto"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
