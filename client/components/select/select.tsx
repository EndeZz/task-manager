import React, { useState } from 'react';

import Input from '../input/input';
import Svg from '../svg/svg';
import './select.scss';
import { role, status, type } from '../../utils/vars';
import data from '../../../server/UserResponseDto.json';

export default function Select(props: { type: string, placeholder: string, name: string, onChange?: Function, value?: string }) {
  interface Option {
    i?: number;
    id: string | number;
    text: string;
  }
  let option: Option[] = [];
  if (props.type === 'status') {
    option = status;
  }

  if (props.type === 'role') {
    option = role;
  }

  if (props.type === 'type') {
    option = type;
  }

  if (props.name === 'author') {
    option = data.reduce((acc, item) => {
      (item.role.name === 'admin')
        ? acc = [...acc, { id: item.id, text: item.name }]
        : acc
      return acc;
    }, [])
  }

  if (props.name === 'executor') {
    option = data.reduce((acc, item) => {
      (item.role.name === 'contentMaker')
        ? acc = [...acc, { id: item.id, text: item.name }]
        : acc
      return acc;
    }, [])
  }

  let valueOption;
  if (props?.value && props.type === 'user') {
    valueOption = option.find(item => item.text === props.value)
  }

  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState({
    id: (props?.value)
      ? (props.type === 'user')
        ? valueOption ? valueOption.id : ''
        : props.value
      : '' as string,
    text: (props?.value)
      ? (props.type === 'user')
        ? valueOption ? valueOption.text : ''
        : option.find(item => item.id === props.value).text
      : '' as string
  } as Option);



  function openOption() {
    setIsOpen(!isOpen);
  }

  function selectItem(id: string | number, text: string) {
    const createId: Option = option.find(item => item.id === id);
    if (props.type === 'user') {
      props.onChange(props.name, text, (createId?.i) ? createId.i : createId.id)
    }
    else {
      (id !== 'all') ? props.onChange(props.type, id, (createId?.i) ? createId.i : createId.id) : props.onChange('');
    }

    setSelect({ id: id, text: text });
    setIsOpen(!isOpen);
  }

  return (
    <div className={`select-box ${(isOpen) ? 'select-box_active' : ''}`} >
      <Input
        placeholder={props.placeholder}
        name={props.name}
        readonly={true}
        onClick={openOption}
        value={select.text}
        classes={(props.name === 'status' && select.id !== 'all') ? `select-status__item select-status__item_${select.id}` : ''}
      />
      <Svg
        file='header-sprite'
        type='menu'
        classes='select__btn'
      />
      <div className='select__option'>
        <ul className='select__list'>
          {option.map((item) => {
            if (item.id !== 'all') {
              return (
                <li
                  key={item.id}
                  value={item.id}
                  className={`select__item ${(props.type === 'status' && item.id !== 'all') ? `select-status__item select-status__item_${item.id}` : ''}`}
                  onClick={() => selectItem(item.id, item.text)}
                >
                  {item.text}
                </li>
              )
            } return null
          })}
        </ul>
      </div>
    </div >
  )
}

