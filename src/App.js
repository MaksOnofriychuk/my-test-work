import React from "react";
import Main from "./page/Main";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
`;

const AppContainer = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding: 0px 15px;
`;

function App() {
  return (
    <AppWrapper>
      <AppContainer>
        <Main />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
