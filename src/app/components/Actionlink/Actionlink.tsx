import React, { useState } from 'react';
import styled from 'styled-components';

type ActionlinProps = {
  url: string;
  text: string;
};

function ActionLink({ url, text }: ActionlinProps): JSX.Element {
  const [hidden, setHidden] = useState(false);

  return (
    <Actionlink
      href={url}
      target="_blank"
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
    >
      {text}
      {!hidden && (
        <Icon>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="24" height="24" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_219_294"
                  transform="scale(0.0333333)"
                />
              </pattern>
              <image
                id="image0_219_294"
                width="30"
                height="30"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAcklEQVRIie3WMQ6CUBAG4S/cQYL3v4mNCVJh4XGgwIrIC+SpifGfdorZbLFZwj9zwYD2oKumx4T7i0DJVXPC+Aw8cN7pEk888d+Jt5YDMuF2wIHm3dN8mvU6u50u0UQT/V6U5eJsvTclV83V9kNXciGAGVM9cX2eizuGAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </Icon>
      )}
    </Actionlink>
  );
}

export default ActionLink;

const Actionlink = styled.a`
  background-color: #ffc700;
  color: #111111;
  border-radius: 5px;
  padding: 13px 105px;
  text-decoration: none;
  position: relative;
`;

const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: 22%;
`;
