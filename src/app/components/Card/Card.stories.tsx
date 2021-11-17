import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const EXAMPLE = {
  title: 'Hitman‘s Wife‘s Bodyguard',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, reprehenderit?',
  rating: 3.5,
  genres: ['Action', 'Comedy', 'Crime'],
  imageUrl: 'https://source.unsplash.com/random/300x300',
};

export const Regular = (): JSX.Element => (
  <Card content={EXAMPLE} display="regular" />
);

export const Compact = (): JSX.Element => (
  <CompactContainer>
    <Card content={EXAMPLE} display="compact" />
    <Card content={EXAMPLE} display="compact" />
  </CompactContainer>
);

export const CompactWide = (): JSX.Element => (
  <Card content={EXAMPLE} display="compactWide" />
);

const CompactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
