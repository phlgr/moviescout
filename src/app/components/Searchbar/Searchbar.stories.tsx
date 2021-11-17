import React from 'react';
import SearchBar from './Searchbar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
};

// function handleSubmit(event: React.FormEvent<HTMLInputElement>) {
//   event.preventDefault();
//   console.log('submitted');
// }

export const regular = (): JSX.Element => (
  <SearchBar
    searchQuery="Käsekuchen"
    setSearchQuery={() => console.log('something changed')}
    onSubmit={() => console.log('submitted')}
    placeholderText="Search"
    screenreaderLabelText="Search your movie"
  />
);
