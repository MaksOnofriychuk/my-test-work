import React from "react";
import styled from "styled-components";
import Title from "../kit/Title";
import Flex from "../kit/Flex";

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  @media ${(props) => props.theme.media.phoneSmall} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

const StyledWrapperGridItems = styled.div`
  padding: 20px 20px 0px 20px;
`;

const StyledWrapperTicketItem = styled.div`
  width: 100%;
  padding: 20px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 5px;
  margin: 0px 0px 20px 0px;
  @media ${(props) => props.theme.media.phoneMedium} {
    padding: 10px;
    margin: 0px auto 20px;
  }
`;

const StyledContainerTicketHeader = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.media.phoneMedium} {
    padding: 10px 10px 0px 10px;
  }
`;

const TicketItem = ({ ticket }) => {
  const formatDate = (segment) => {
    const { date, duration } = segment;

    const startDate = new Date(date).getMinutes();

    return `${Math.floor(startDate / 60)}:${startDate % 60} - ${Math.floor(
      (startDate + duration) / 60
    )}:${(startDate + duration) % 60}`;
  };

  const formatStops = (stops) => {
    if (stops.length === 0) {
      return "Без пересадки";
    } else {
      return stops.length + (stops.length === 1 ? " Пересадка" : " Пересадки");
    }
  };

  return (
    <StyledWrapperTicketItem>
      <StyledContainerTicketHeader>
        <Title
          color={"#2196F3"}
          size={"24px"}
          lineHeight={"24px"}
          weight={"600"}
        >
          {ticket.price} P
        </Title>
        <img
          src={`//pics.avs.io/99/36/${ticket.carrier}.png`}
          alt="company-logo"
        />
      </StyledContainerTicketHeader>
      <StyledGridWrapper>
        {ticket.segments.map((s) => (
          <React.Fragment key={s.origin}>
            <StyledWrapperGridItems>
              <Flex direction={"column"}>
                <Title weight={"600"} lineHeight={"18px"} color={"#A0B0B9"}>
                  {s.origin} – {s.destination}
                </Title>
                <Title weight={"600"} size={"14px"} lineHeight={"18px"}>
                  {formatDate(s)}
                </Title>
              </Flex>
            </StyledWrapperGridItems>

            <StyledWrapperGridItems>
              <Flex direction={"column"}>
                <Title weight={"600"} lineHeight={"18px"} color={"#A0B0B9"}>
                  В ПУТИ
                </Title>
                <Title
                  weight={"600"}
                  size={"14px"}
                  lineHeight={"18px"}
                  transrom={"none"}
                >
                  {`${Math.floor(s.duration / 60)}ч ${s.duration % 60}м`}
                </Title>
              </Flex>
            </StyledWrapperGridItems>

            <StyledWrapperGridItems>
              <Flex direction={"column"}>
                <Title weight={"600"} lineHeight={"18px"} color={"#A0B0B9"}>
                  {formatStops(s.stops)}
                </Title>
                <Title weight={"600"} size={"14px"} lineHeight={"18px"}>
                  {s.stops.join(", ")}
                </Title>
              </Flex>
            </StyledWrapperGridItems>
          </React.Fragment>
        ))}
      </StyledGridWrapper>
    </StyledWrapperTicketItem>
  );
};

export default TicketItem;
