import React from 'react';
import styled from 'styled-components';

type HeadingProps = {
  size: string;
  children: React.ReactNode;
};

function Heading({ size, children }: HeadingProps): JSX.Element {
  return size === 'large' ? <H1>{children}</H1> : <H2>{children}</H2>;
}

export default Heading;

const H1 = styled.h1`
  font-size: 30px;
  line-height: 45px;
  font-weight: 700;
`;
const H2 = styled.h2`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;