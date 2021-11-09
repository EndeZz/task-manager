import React from 'react';
import '../buttons.scss';

function ButtonMain(props: { type: string, color: 'blue' | 'green' | 'lightblue', text: string }) {
  return (
    <button className={`button button__main button__main_${props.color}`}>
      <div className="button__icon">
        <img src={`/public/icons/${props.type}.svg`} alt={props.text} />
      </div>
      <span className="button__text">{props.text}</span>
    </button>
  );
}

export default ButtonMain;
