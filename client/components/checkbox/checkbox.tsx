import * as React from 'react';

import Type from '../type/type';
import { role, type } from '../../utils/vars';
import './checkbox.scss';

export default function Checkbox(props: { type: string, name: string, onChange?: Function, checked?: { role: string[], text: string } }) {
  let items: { id: string, text?: string }[]
  if (props.type == 'type') {
    items = type
  }

  if (props.type === 'role') {
    items = role
  }

  function change(e: { target: HTMLInputElement }) {
    props.onChange(e);
  }

  let str = false
  if (props?.checked) {
    str = true
  }

  return (
    <div className="search__box search__box-filter">
      {items.map((item) => {
        return (
          <div className='filter' key={item.id}>
            <input
              type='checkbox'
              className='filter__input'
              id={`filter-${item.id}`}
              name={props.name}
              value={item.id}
              onChange={change}
              checked={(str) ? (props.checked.role.indexOf(item.id) !== -1) : null}
            />
            <label
              htmlFor={`filter-${item.id}`}
              className={`filter__button ${(props.type === 'role') ? 'filter-role__button' : `filter__button_${item.id}`}`} >
              {(props.type === 'role') ? item.text : <Type type={item.id} />}
            </label>
          </div>
        )
      })}
    </div >
  )
}
