import React from 'react';

function BackArrowIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='25' height='11' viewBox='0 0 25 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path fillRule='evenodd' clipRule='evenodd' d='M6.04986 1.70711C6.44364 1.31658 6.44364 0.683417 6.04986 0.292893C5.65607 -0.0976311 5.01762 -0.0976311 4.62384 0.292893L0.442765 4.43934C-0.147912 5.02513 -0.147915 5.97487 0.442764 6.56066L4.62384 10.7071C5.01762 11.0976 5.65607 11.0976 6.04986 10.7071C6.44364 10.3166 6.44364 9.68342 6.04986 9.29289L3.23364 6.5H23.9914C24.5483 6.5 24.9998 6.05228 24.9998 5.5C24.9998 4.94772 24.5483 4.5 23.9914 4.5H3.23364L6.04986 1.70711Z' fill='currentColor' />
    </svg>

  );
}

export default BackArrowIcon;
