import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '../Icons/SearchIcon';

export default function Searchbar(): JSX.Element {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <Container onSubmit={handleSubmit}>
      <StyledButton type="submit">
        <SearchIcon height="40" width="40"></SearchIcon>
      </StyledButton>
      <StyledLabel htmlFor="styledInput">Search your movie</StyledLabel>
      <StyledInput
        id="styledInput"
        type="search"
        placeholder="Search"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
    </Container>
  );
}

const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 0.7em;
  background-color: #2b2b2b;
  border-radius: 0.625em;
  padding: 1.5em 1.5em;
`;
const StyledInput = styled.input`
  width: 100%;
  background-color: #2b2b2b;
  outline: none;
  font-family: 'Poppins';
  border: none;
  color: white;
  font-size: 1.5em;
  ::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 1em;
    width: 1em;
    border-radius: 50em;
    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)
      no-repeat 50% 50%;
    background-size: contain;
    opacity: 0;
    pointer-events: none;
  }
  :focus::-webkit-search-cancel-button {
    opacity: 0.8;
    pointer-events: all;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
`;

const StyledLabel = styled.label`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
