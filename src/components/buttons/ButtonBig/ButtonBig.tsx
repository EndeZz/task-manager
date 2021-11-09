import React from 'react';
import '../buttons.scss';

function ButtonBig(props: { type: string, color: 'blue' | 'red', text: string }) {
  return (
    <button className={`button button__transperent button__transperent_${props.color}`}>
      <img src={`/public/icons/${props.type}.svg`} alt={props.text} />
      <span className="button__text">{props.text}</span>
    </button>
  );
}

export default ButtonBig;
