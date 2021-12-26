import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: ${({ width }) => width || "168px"};
  padding: 15px;
  background-color: ${(props) => props.bgColor || "#fff"};
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: ${(props) => props.color || props.theme.colors.darkGrey};
  border: 1px solid #dfe5ec;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color, background-color 0.5s ease;
  border-top-left-radius: ${(props) => props.topleft || "0px"};
  border-bottom-left-radius: ${(props) => props.bottomleft || "0px"};
  border-top-right-radius: ${(props) => props.topright || "0px"};
  border-bottom-right-radius: ${(props) => props.bottomright || "0px"};
  transition: all 0.5s;
  &:hover,
  &.active {
    background-color: #2196f3;
    color: #fff;
  }
  &:active,
  &:focus {
    outline: none !important;
  }
  &::-moz-focus-inner {
    border: 0 !important;
  }
  @media ${(props) => props.theme.media.tablet} {
    width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const Button = ({ children, ...props }) => {
  return (
    <>
      <StyledButton className={props.isActive ? "active" : ""} {...props}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;
