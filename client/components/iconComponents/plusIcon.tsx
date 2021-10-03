import React from 'react';

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <circle cx='7' cy='7' r='7' fill='white' />
      <path d='M7 4V10' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
      <path d='M10 7L4 7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    </svg>
  );
}

export default PlusIcon;
