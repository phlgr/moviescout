import React from 'react';
import styled from 'styled-components';
import RatingStar from '../ratingStar/RatingStar';

type RatingProps = {
  rating: number;
};

function Rating({ rating }: RatingProps): JSX.Element {
  const RatingStars = [];

  for (let i = 0; i < 5; i++) {
    if (rating - i >= 1) {
      RatingStars.push(<RatingStar fill={'full'} />);
    } else if (rating - i <= 0) {
      RatingStars.push(<RatingStar fill={'empty'} />);
    } else {
      RatingStars.push(<RatingStar fill={'half'} />);
    }
  }

  return (
    <RatingElement>
      <RatingNumber>{rating}</RatingNumber>
      <RatingStarElements>{RatingStars}</RatingStarElements>
    </RatingElement>
  );
}

export default Rating;

const RatingElement = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  font-size: 2rem;
  align-items: center;
`;

const RatingNumber = styled.span`
  flex-grow: 2;
  justify-self: center;
`;

const RatingStarElements = styled.span`
  flex-grow: 5;
  display: flex;
  flex-direction: row;
  gap: 3px;
  grid-column: 2/5;
`;
