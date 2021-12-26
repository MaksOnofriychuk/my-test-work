import React from "react";
import styled from "styled-components";
import Check from "../assets/img/Shape.svg";

const StyledLabel = styled.label`
  font-size: 13px;
  line-height: 20px;
  margin-left: 30px;
  color: ${(props) => props.color || props.theme.colors.darkGrey};
  cursor: pointer;
  @media ${(props) => props.theme.media.tablet} {
    margin-left: 40px;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  &:checked + .check-style {
    background-image: url(${Check});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: 0 3px;
  }
`;

const StyledSpanInput = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid #9abbce;
  border-radius: 2px;
  margin-left: -30px;
  @media ${(props) => props.theme.media.tablet} {
    width: 30px;
    height: 30px;
    margin-left: -40px;
    margin-top: -5px;
  }
  @media ${(props) => props.theme.media.phoneMedium} {
    width: 30px;
    height: 30px;
    margin-left: -40px;
    margin-top: -5px;
  }
`;

const StyledCheckboxWrapper = styled.div`
  padding: 20px 70px 10px 20px;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: #f1fcff;
    @media ${(props) => props.theme.media.tablet} {
      border-radius: 8px;
    }
  }
  @media ${(props) => props.theme.media.tablet} {
    padding: 20px 20px 10px 20px;
  }
`;

const CheckBox = ({ id, label, checked, onChange }) => {
  return (
    <>
      <StyledCheckboxWrapper>
        <StyledLabel>
          <StyledInput
            className="check-box"
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
          ></StyledInput>
          <StyledSpanInput className="check-style"></StyledSpanInput>
          <span>{label}</span>
        </StyledLabel>
      </StyledCheckboxWrapper>
    </>
  );
};

export default CheckBox;
