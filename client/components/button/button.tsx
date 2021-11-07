import './button.scss';
import React, { FC } from 'react';

export interface ButtonProps {
  children: React.ReactChild | React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.ReactEventHandler) => void;
}

const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  disabled = false,
  onClick = () => {},
  ...attrs
}) => {
  const handleClick = (event) => (disabled ? event.preventDefault() : onClick(event));

  return (
    <button className={className} onClick={handleClick} disabled={disabled} {...attrs}>
      {children}
    </button>
  );
};

export default Button;
