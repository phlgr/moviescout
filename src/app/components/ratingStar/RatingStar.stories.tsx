import React from 'react';
import RatingStar from './RatingStar';

export default {
  title: 'Component/RatingStar',
  component: RatingStar,
};

export const EmptyStar = (): JSX.Element => <RatingStar fill="empty" />;
export const HalfStar = (): JSX.Element => <RatingStar fill="half" />;
export const FullStar = (): JSX.Element => <RatingStar fill="full" />;
