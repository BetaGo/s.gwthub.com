import React from "react";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

function App() {
  return (
    <Root>
      <SearchBar />
    </Root>
  );
}

export default App;
