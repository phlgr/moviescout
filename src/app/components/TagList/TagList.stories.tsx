import React from 'react';
import TagList from './TagList';

export default {
  title: 'Component/TagList',
  component: TagList,
};

const genreList = [
  {
    id: 1,
    children: 'Action',
    count: '3',
    active: true,
    onClick: () => {
      console.log('ACTION');
    },
  },
  {
    id: 2,
    children: 'Horror',
    count: '6',
    active: false,
    onClick: () => {
      console.log('Horror');
    },
  },
  {
    id: 3,
    children: 'Thriller',
    count: '0',
    active: true,
    onClick: () => {
      console.log('Thriller');
    },
  },
];

export const List = (): JSX.Element => <TagList tagList={genreList}></TagList>;
