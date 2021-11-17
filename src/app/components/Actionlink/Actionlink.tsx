import React from 'react';
import styled from 'styled-components';
import ActionIcon from '../Icons/ActionIcon';

type ActionlinProps = {
  url: string;
  text: string;
  hidden: boolean;
};

function ActionLink({ url, text, hidden }: ActionlinProps): JSX.Element {
  return (
    <Actionlink href={url} target="_blank">
      <LinkText>{text}</LinkText>
      {!hidden && (
        <Icon>
          <ActionIcon />
        </Icon>
      )}
    </Actionlink>
  );
}

export default ActionLink;

const Actionlink = styled.a`
  background-color: #ffc700;
  color: #111111;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  min-height: 30px;
`;

const LinkText = styled.span`
  grid-column: 2/5;
  align-self: center;
`;

const Icon = styled.span`
  grid-column: 5/6;
  align-self: center;
`;
