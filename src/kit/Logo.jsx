import React from "react";
import styled from "styled-components";
import LogoAviasales from "../assets/img/Logo.png";

const StyledLogo = styled.div`
  text-align: center;
  padding: 50px 0px;
  @media ${(props) => props.theme.media.tablet} {
    padding: 10px 0px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src={LogoAviasales} alt="logoAviasels" />
    </StyledLogo>
  );
};

export default Logo;
