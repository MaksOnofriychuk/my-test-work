import React from "react";
import TicketItem from "./TicketItem";
import Flex from "../kit/Flex";
import Button from "./Button";
import { useTickects } from "../hooks/useTikects";
import Loader from "./Loader";

const TicketList = () => {
  const { loading, tickets, showMoreTickets } = useTickects();

  return (
    <Flex padding={"0px 0px 20px 0px"} direction={"column"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {tickets.map((ticket) => (
            <TicketItem key={ticket.price + ticket.carrier} ticket={ticket} />
          ))}
          <Button
            onClick={showMoreTickets}
            width={"100%"}
            topleft={"5px"}
            bottomleft={"5px"}
            topright={"5px"}
            bottomright={"5px"}
          >
            Показать ещe 5 билетов!
          </Button>
        </>
      )}
    </Flex>
  );
};

export default TicketList;
