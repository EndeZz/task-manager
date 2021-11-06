import React from 'react';
import './inputDefault.scss';

export type InputType = {
  id: string;
  content: string;
  placeholder: string;
  type?: 'text' | 'password' | 'textarea' | 'email' | 'search' | 'tel' | 'date';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
};

export const Input: React.ComponentType<InputType> = ({
  id,
  content,
  placeholder,
  type = 'text',
  onChange,
  value,
  ...props
}) => {
  return (
    <>
      <div className='input'>
        <input
          className={`input__text ${id && `input__text--${id}`}`}
          type={type}
          placeholder={placeholder}
          id={id}
          name={id}
          onChange={onChange}
          value={value}
          {...props}
        />
        <label htmlFor={id} className='input__label'>{content}</label>
      </div>
    </>
  );
};
