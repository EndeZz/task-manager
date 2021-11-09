import React from 'react';
import '../input.scss';

function InputPattern(props: { placeholder: string, type: 'text' | 'date', id: string }) {
  return (
    <input className="form__wrapper__input" type={props.type} placeholder={props.placeholder} id={props.id}/>
  );
}

export default InputPattern;
