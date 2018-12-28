import React from 'react';

interface IProps {
  className?: string;
}

export const InstagramSvg: React.SFC<IProps> = props => {
  return (
    <a
      className="appearance-none"
      href="https://www.instagram.com/coloradok9cuts"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={props.className}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    </a>
  );
};
