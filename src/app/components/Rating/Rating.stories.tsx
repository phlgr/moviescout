import React from 'react';
import Rating from './Rating';

export default {
  title: 'Component/Rating',
  component: Rating,
};

export const Rating0 = (): JSX.Element => <Rating rating={0} />;

export const Rating1 = (): JSX.Element => <Rating rating={1} />;

export const Rating2 = (): JSX.Element => <Rating rating={2} />;

export const Rating25 = (): JSX.Element => <Rating rating={2.5} />;

export const Rating35 = (): JSX.Element => <Rating rating={3.5} />;

export const Rating4 = (): JSX.Element => <Rating rating={4} />;

export const Rating5 = (): JSX.Element => <Rating rating={5} />;
