import React from "react";
import styled from "styled-components";

const SearchForm = styled.form`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 800px;
  height: 48px;
`;

const DropdownRoot = styled.select`
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const DropdownItem = styled.option``;

const SearchInput = styled.input`
  box-sizing: border-box;
  flex: 1;
  height: 100%;
  font-size: 20px;
`;

const SearchButton = styled.button`
  height: 100%;
`;

const SearchBar = () => {
  const [searchEngine, setSearchEngine] = React.useState("Google");
  const [searchText, setSearchText] = React.useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText) return;
    switch (searchEngine) {
      case "Google":
        window.open(
          "https://www.google.com/search?q=" + encodeURIComponent(searchText)
        );
        break;
      case "StackOverflow":
        window.open(
          "https://stackoverflow.com/search?q=" + encodeURIComponent(searchText)
        );
        break;

      default:
        break;
    }
    console.log(searchEngine);
    console.log(searchText);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <DropdownRoot
        onChange={(e) => {
          setSearchEngine(e.target.value);
        }}
      >
        <DropdownItem value="Google">Google</DropdownItem>
        <DropdownItem value="StackOverflow">StackOverflow</DropdownItem>
      </DropdownRoot>
      <SearchInput
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
