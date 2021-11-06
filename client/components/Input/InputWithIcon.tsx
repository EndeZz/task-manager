import React from 'react';
import { CustomIcon, IconType } from '../Icon/Icon';
import './inputDefault.scss';

export type InputTypeWithIcon = {
  id: string;
  content: string;
  placeholder: string;
  size?: string;
  icon?: IconType;
  type?: 'text' | 'password' | 'textarea' | 'checkbox' | 'email' | 'search' | 'tel' | 'date';
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | string) => void,
};

export const InputIcon: React.ComponentType<InputTypeWithIcon> = ({
  placeholder,
  content,
  id,
  size = 'normal',
  icon,
  type = 'text',
  value,
  onChange,
}) => {
  return (
    <>
      <div className={`input input--${id}${`-${size}` ?? ''}`}>
        <input
          className={`input__text input__text--${id}${`-${size}` ?? ''}`}
          type={type}
          placeholder={placeholder}
          id={id}
          name={id}
          onChange={onChange}
          value={value}
        />
        <label htmlFor={id} className='input__label'>{content}</label>
        {
          icon && <CustomIcon {...icon} />
        }
      </div>
    </>
  );
};
