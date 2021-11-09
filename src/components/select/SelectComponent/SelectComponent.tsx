import React from 'react';
import InputIconComponent from '../../input/InputIconComponent/InputIconComponent';
import '../select.scss';

function SelectComponent(props: {
  items: Array<string>,
  type: 'text' | 'date',
  label: string,
  placeholder: string,
  id: string
}) {
  let count = 0;
  return (
    <div className="select" id={props.id}>
      <InputIconComponent label={props.label}
      placeholder={props.placeholder}
      type={props.type}
      id={props.id}></InputIconComponent>
      <div className="select__dropdown" hidden>
        <ul className="select__dropdown__list">
          {
            props.items.map((item: string) => {
              count += 1;
              return (
                <li key={count}>
                  <div className="select__dropdown__list__item">
                    <span className="select__dropdown__list__item__text">{item}</span>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default SelectComponent;
