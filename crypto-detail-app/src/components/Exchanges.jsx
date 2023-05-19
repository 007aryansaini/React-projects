import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "./../index";
import { Container, HStack } from "@chakra-ui/react";

import Loader from "../components/Loader";
import ExchangeCard from "./ExchangeCard";
import ErrorCard from "./ErrorCard";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchExchanges() {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchExchanges();
  }, []);

  if (error) return <ErrorCard message={"Error while fetching exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack w={"full"} wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((exchange) => {
              return (
                <ExchangeCard
                  key={exchange.id}
                  name={exchange.name}
                  img={exchange.image}
                  rank={exchange.trust_score_rank}
                  url={exchange.url}
                />
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
