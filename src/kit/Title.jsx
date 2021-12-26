import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h2`
  text-transform: ${(props) => props.transrom || "uppercase"};
  letter-spacing: 0.5;
  color: ${(props) => props.color || props.theme.colors.darkGrey};
  font-weight: ${(props) => props.weight || "400"};
  font-size: ${(props) => props.size || "12px"};
  line-height: ${(props) => props.lineHeight || "12px"};
  text-align: ${(props) => props.textAlign || "none"};
  margin: ${({ margin }) => margin || "0"};
`;

const Title = (props) => {
  return <StyledTitle {...props}></StyledTitle>;
};

export default Title;
