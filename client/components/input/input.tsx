import './input.scss';
import React, { FC } from 'react';

export interface InputProps {
  id?: string;
  className?: string;
  classNameLabel?: string;
  label?: string;
  ref?: React.Ref<any>;
  value?: string;
  onChange?: (event: React.ChangeEvent) => void;
}

const Input: FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  id,
  className = '',
  ref = null,
  value = '',
  onChange,
  ...attrs
}: InputProps) => {
  const handleChange = (event) => {
    if (onChange) onChange(event);
  };

  return <input id={id} className={className} name={id} ref={ref} value={value} onChange={handleChange} {...attrs} />;
};

export default Input;
