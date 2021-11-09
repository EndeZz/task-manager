import React from 'react';
import '../input.scss';

function InputLabelPattern(props: { label: string, id: string }) {
  return (
    <label className="form__label" htmlFor={props.id}>{props.label}</label>
  );
}

export default InputLabelPattern;
