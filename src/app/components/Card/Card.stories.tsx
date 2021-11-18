import React from 'react';
import styled from 'styled-components';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

const EXAMPLE = {
  title: 'Hitman’s Wife’s Bodyguard',
  description:
    'The world’s most lethal odd couple - bodyguard Michael Bryce and hitman Darius Kincaid - are back on another edgy adventure for saving the rainforest from hipster Nazis.',
  rating: 3.5,
  genres: ['Action', 'Comedy', 'Crime'],
  imageUrl: 'https://source.unsplash.com/random/500x500?hitman',
};

export const Regular = (): JSX.Element => (
  <Card content={EXAMPLE} display="regular" />
);
export const Compact_TwoCards = (): JSX.Element => (
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
