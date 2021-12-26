import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Flex from "../kit/Flex";
import { hideAlert } from "../store/reducer/alertReducer";

const StyledAlertWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: #ba3939;
  background: #ffe0e0;
  border: 1px solid #a33a3a;
`;

const StyledButtonClose = styled.button`
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
  cursor: pointer;
  background: #ffe0e0;
  border: none;
`;

const Alert = () => {
  const dispatch = useDispatch();
  const { show, text } = useSelector((state) => state.alert);

  if (show) {
    return (
      <Flex justify={"center"}>
        <StyledAlertWrapper>
          {text}{" "}
          <StyledButtonClose onClick={() => dispatch(hideAlert())}>
            &#10008;
          </StyledButtonClose>
        </StyledAlertWrapper>
      </Flex>
    );
  } else {
    return "";
  }
};

export default Alert;
