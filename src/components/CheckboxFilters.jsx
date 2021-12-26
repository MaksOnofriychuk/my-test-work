import React from "react";
import Title from "../kit/Title";
import CheckBox from "../kit/CheckBox";
import { useDispatch } from "react-redux";
import {
  addFilter,
  FILTERS,
  removeFilter,
} from "../store/reducer/ticketsReducer";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledWrapCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.media.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  @media ${(props) => props.theme.media.phoneSmall} {
    display: flex;
  flex-direction: column;
  }
`;

const CheckboxFilters = () => {
  const dispatch = useDispatch();

  const { filters } = useSelector((state) => state.tickets);

  const isChecked = (id) => filters.some((f) => f.id === id);

  const isCheckedAll = () => filters.some((f) => f.id === "ALL");

  const handleChange = ({ target }) => {
    if (isChecked(target.id)) {
      dispatch(removeFilter(target.id));
    } else {
      if (isCheckedAll()) {
        dispatch(removeFilter("ALL"));
      }
      dispatch(addFilter(FILTERS[target.id]));
    }
  };

  const filtersCheckboxes = [
    { id: FILTERS.ALL.id, label: "Все" },
    { id: FILTERS.NO_STOPS.id, label: "Без пересадок" },
    { id: FILTERS.ONE_STOP.id, label: "1 Пересадка" },
    { id: FILTERS.TWO_STOPS.id, label: "2 Пересадки" },
    { id: FILTERS.THREE_STOPS.id, label: "3 Пересадки" },
  ];

  return (
    <>
      <Title weight={"600"} margin={"20px 20px 0px 20px"}>
        Количество пересадок
      </Title>
      <StyledWrapCheckbox>
        {filtersCheckboxes.map((item) => (
          <CheckBox
            key={item.id}
            id={item.id}
            checked={isChecked(item.id)}
            label={item.label}
            onChange={handleChange}
          />
        ))}
      </StyledWrapCheckbox>
    </>
  );
};

export default CheckboxFilters;
