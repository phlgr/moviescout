import React, { useState } from 'react';
import styled from 'styled-components';
import ActionIcon from '../Icons/ActionIcon';

type ActionlinProps = {
  url: string;
  text: string;
};

function ActionLink({ url, text }: ActionlinProps): JSX.Element {
  const [hidden, setHidden] = useState(false);

  return (
    <Actionlink
      href={url}
      target="_blank"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      {text}
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
  border-radius: 5px;
  padding: 13px 105px;
  text-decoration: none;
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const Icon = styled.span`
  position: absolute;
  align-self: center;
  right: 50px;
`;
