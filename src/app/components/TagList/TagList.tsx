import type { ReactNode } from 'react';
import React from 'react';
import Tag from '../Tag/Tag';

type TagProps = {
  id: number;
  children: ReactNode;
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
          {tag.children}
        </Tag>
      ))}
    </div>
  );
}
