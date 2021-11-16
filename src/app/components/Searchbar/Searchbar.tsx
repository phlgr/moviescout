import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../Icons/SearchIcon';

export default function Searchbar(): JSX.Element {
  return (
    <Container>
      <SearchIcon></SearchIcon>
      <StyledInput type="search" placeholder="Search" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  background-color: #2b2b2b;
  border-radius: 0.3em;
  padding: 1.5em 1em;
`;

const StyledInput = styled.input`
  border: none;
  background-color: #2b2b2b;
  color: white;
  width: 100%;
  outline: none;
  font-family: 'Poppins';
  font-size: 1.125em;
`;
