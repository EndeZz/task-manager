import React from 'react';
import InputLabelPattern from '../InputLabelPattern/InputLabelPattern';
import InputPattern from '../InputPattern/InputPattern';
import '../input.scss';

function InputComponent(props: { label: string, placeholder: string, type: 'text' | 'date', id: string }) {
  return (
    <div className="form">
      <InputLabelPattern label={props.label} id={props.id}></InputLabelPattern>
      <div className="form__wrapper">
        <InputPattern
          placeholder={props.placeholder}
          type={props.type}
          id={props.id}></InputPattern>
      </div>
    </div>
  );
}

export default InputComponent;
