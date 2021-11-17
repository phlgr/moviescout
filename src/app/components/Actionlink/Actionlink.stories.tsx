import React from 'react';
import ActionLink from './ActionLink';

export default {
  title: 'Component/Actionlink',
  component: ActionLink,
};

export const ShortText = (): JSX.Element => (
  <ActionLink url="http://www.imdb.com" text="See on imdb" hidden={true} />
);

export const ShortTextWithIcon = (): JSX.Element => (
  <ActionLink url="http://www.imdb.com" text="See on imdb" hidden={false} />
);

export const LongText = (): JSX.Element => (
  <ActionLink
    url="http://www.imdb.com"
    text="See on rottentomatoes"
    hidden={true}
  />
);

export const LongTextWithIcon = (): JSX.Element => (
  <ActionLink
    url="http://www.imdb.com"
    text="See on rottentomatoes"
    hidden={false}
  />
);
