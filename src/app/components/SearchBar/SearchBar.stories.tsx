import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
};

function handleSubmit() {
  console.log('submitted');
}

export const regular = (): JSX.Element => (
  <SearchBar
    searchQuery="Käsekuchen"
    setSearchQuery={() => console.log('something changed')}
    onSubmit={handleSubmit}
    placeholderText="Search"
    screenreaderLabelText="Search your movie"
  />
);
