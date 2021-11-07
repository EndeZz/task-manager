import './icon.scss';
import React, { FC } from 'react';

export interface IconProps {
  path?: string;
  className?: string;
  width?: number;
  height?: number;
  ariaHidden?: boolean;
}

const Icon: FC<IconProps> = (props: IconProps) => {
  const { path, className, width, height, ariaHidden = true, ...attrs } = props;

  return (
    <svg className={className} width={width} height={height} aria-hidden={ariaHidden} {...attrs}>
      <use xlinkHref={path}></use>
    </svg>
  );
};

export default Icon;
