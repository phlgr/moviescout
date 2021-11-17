import React from 'react';
import SearchBar from './Searchbar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
};

export const regular = (): JSX.Element => (
  <SearchBar
    searchQuery="Käsekuchen"
    setSearchQuery={() => console.log('something changed')}
    handleSubmit={() => console.log('submitted')}
  />
);
