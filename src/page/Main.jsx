import React from "react";
import Logo from "../kit/Logo";
import CheckboxFilters from "../components/CheckboxFilters";
import styled from "styled-components";
import TicketList from "../components/TicketList";
import SortButtons from "../components/SortButtons";
import Alert from "../components/Alert";

const StyledSidebar = styled.div`
  box-shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)";
  height: stretch;
  margin: 0px 20px 0px 0px;
  border-radius: 6px;
  background-color: #ffffff;
  padding: 0px 0px 10px 0px;
  @media ${(props) => props.theme.media.tablet} {
    margin: 0 auto 20px;
  }

  @media ${(props) => props.theme.media.phoneMedium} {
    margin: 0 auto 20px;
  }
`;

const StyledWrapperMainContent = styled.div`
  max-width: 502px;
`;

const StyledMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.media.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const Main = () => {
  return (
    <>
      <Alert />
      <Logo />
      <StyledMainWrapper>
        <StyledSidebar>
          <CheckboxFilters />
        </StyledSidebar>

        <StyledWrapperMainContent>
          <SortButtons />
          <TicketList />
        </StyledWrapperMainContent>
      </StyledMainWrapper>
    </>
  );
};

export default Main;
