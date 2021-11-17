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
      {rating}
      {RatingStars}
    </RatingElement>
  );
}

export default Rating;

const RatingElement = styled.div`
  display: flex;
  font-size: 2rem;
  align-items: center;
  gap: 1rem;
`;
