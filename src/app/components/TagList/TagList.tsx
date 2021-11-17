import React from 'react';
import Tag from '../Tag/Tag';

type TagProps = {
  id: number;
  genreName: string;
  active?: boolean;
  count?: string;
  onClick: () => void;
};

type TagListProps = {
  tagList: TagProps[];
};

export default function TagList({ tagList }: TagListProps): JSX.Element {
  return (
    <div>
      {tagList.map((tag) => (
        <Tag
          key={tag.id}
          id={tag.id}
          active={tag.active}
          onClick={tag.onClick}
          count={tag.count}
        >
          {tag.genreName}
        </Tag>
      ))}
    </div>
  );
}
