import React from 'react';
import RatingStar from './RatingStar';

export default {
  title: 'Component/RatingStar',
  component: RatingStar,
};

export const noStar = (): JSX.Element => <RatingStar fill="empty" />;
export const halfStar = (): JSX.Element => <RatingStar fill="half" />;
export const fullStar = (): JSX.Element => <RatingStar fill="full" />;
