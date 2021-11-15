import React from 'react';

type ActionlinProps = {
  url: string;
  text: string;
};

function Actionlink({ url, text }: ActionlinProps): JSX.Element {
  return <a href={url}>{text}</a>;
}

export default Actionlink;
