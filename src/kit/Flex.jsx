import React from "react";
import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "none"};
  justify-content: ${(props) => props.justify || "none"};
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
`;

const Flex = (props) => {
  return <StyledFlex {...props}></StyledFlex>;
};

export default Flex;
