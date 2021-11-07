import React, { useEffect, useState } from 'react';
// import { UserType } from '../../store/models/IUser';
import { InputTypeWithIcon, InputIcon } from '../Input/InputWithIcon';
import './select.scss';

export type SelectType = {
  field: InputTypeWithIcon,
  options: string[],
  size?: string;
  onClick?: VoidFunction,
  selected?: string,
  onChange?: (data:string) => void,
};

export const Select: React.ComponentType<SelectType> = ({
  size = '',
  options,
  field,
  onChange = () => {},
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  return (
    <>
      <div className={`select ${size && `select--${size}`}`} onClick={() => setOpen(!isOpen)}>
        <InputIcon
          {...field}
          value={selected}
          onChange={() => setSelected}
        />
        { isOpen
          && (
          <div className='select__dropdown'>
            <ul className={`select__dropdown-content ${isOpen && 'show'}`}>
              {
              options.map((item, i) => {
                return (
                  <li
                    className='select__dropdown-content__item'
                    key={`${i + 9482348}`}
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                  >
                    <span className={`select__dropdown-content__text ${selected === item && 'selected'} `}>{item}</span>
                  </li>
                );
              })
            }
            </ul>
          </div>
          )}
      </div>
    </>
  );
};
