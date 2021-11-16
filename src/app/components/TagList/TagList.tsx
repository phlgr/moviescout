import React from 'react';
import Tag from '../Tag/Tag';

type TagListProps = {
  tagList: string[];
};

export default function TagList({ tagList }: TagListProps): JSX.Element {
  return (
    <div>
      <Tag active>All</Tag>
      {tagList.map((tag) => (
        <Tag>{tag}</Tag>
      ))}
    </div>
  );
}
