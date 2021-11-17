import React from 'react';
import TagList from './TagList';

export default {
  title: 'Component/TagList',
  component: TagList,
};

const genreList = [
  {
    id: 1,
    genreName: 'Action',
    count: '3',
    active: true,
  },
  {
    id: 2,
    genreName: 'Horror',
    count: '6',
    active: false,
  },
  {
    id: 3,
    genreName: 'Thriller',
    count: '0',
    active: true,
  },
];

export const List = (): JSX.Element => <TagList tagList={genreList}></TagList>;
