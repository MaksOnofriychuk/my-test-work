import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sortByAC } from "../store/reducer/ticketsReducer";

const StyledWrapperButton = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  @media ${(props) => props.theme.media.phoneMedium} {
    flex-direction: column;
    align-items: center;
  }
`;

const SortButtons = () => {
  const dispatch = useDispatch();

  const { sortBy } = useSelector((state) => state.tickets);

  return (
    <StyledWrapperButton>
      <Button
        id="price"
        isActive={sortBy === "price"}
        topleft={"10px"}
        bottomleft={"10px"}
        onClick={(e) => dispatch(sortByAC(e.target.id))}
      >
        самый дешевый
      </Button>
      <Button
        id="duration"
        isActive={sortBy === "duration"}
        onClick={(e) => dispatch(sortByAC(e.target.id))}
      >
        самый быстрый
      </Button>
      <Button
        id="optimal"
        isActive={sortBy === "optimal"}
        topright={"10px"}
        bottomright={"10px"}
        onClick={(e) => dispatch(sortByAC(e.target.id))}
      >
        оптимальный
      </Button>
    </StyledWrapperButton>
  );
};

export default SortButtons;
