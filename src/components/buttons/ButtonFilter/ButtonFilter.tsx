import React from 'react';
import '../buttons.scss';

function ButtonFilter(props: { text: string }) {
  return (
    <button className="button button__filter">
      <span className="button__text">{props.text}</span>
    </button>
  );
}

export default ButtonFilter;
