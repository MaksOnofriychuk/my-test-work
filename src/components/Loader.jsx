import React from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../kit/Flex";

const loaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoader = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  &::after {
    content: "";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #cef;
    border-color: #cef transparent #cef transparent;
  }
  animation: ${loaderAnimation} 1.2s linear infinite;
`;

const Loader = () => {
  return (
    <Flex justify={"center"} padding={"50px 0px 0px 0px"}>
      <StyledLoader />
    </Flex>
  );
};

export default Loader;
