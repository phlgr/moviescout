import React from 'react';

export default function BookmarkIcon(
  props: React.SVGProps<SVGSVGElement>
): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      fill="none"
      strokeWidth="3"
      stroke="currentColor"
      {...props}
    >
      <path
        strokeWidth="inherit"
        d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
      />
    </svg>
  );
}
