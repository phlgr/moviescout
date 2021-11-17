import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type TagProps = {
  id: number;
  children: ReactNode;
  active?: boolean;
  count?: string;
  onClick: () => void;
};

export default function Tag({
  children,
  active = false,
  count,
  onClick,
}: TagProps): JSX.Element {
  return (
    <TagStyleActive active={active} onClick={onClick}>
      {children} {count && `(${count})`}
    </TagStyleActive>
  );
}
const TagStyleActive = styled.span<Partial<TagProps>>`
  background-color: ${(props) => (props.active ? '#FFC700' : '#2A2A2A')};
  color: ${(props) => (props.active ? 'black' : 'white')};
  border-radius: 3.5em;
  padding: 7px 15px;
  text-transform: uppercase;
`;
