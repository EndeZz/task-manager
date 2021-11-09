import React from 'react';
import '../buttons.scss';

function ButtonDropdown(props: { type: 'video' | 'audio' | 'photo', text: string }) {
  return (
    <button className={`button button__content button__content_${props.type}`}>
        <img className="button__icon" src={`/icons/${props.type}.svg`} alt="" />
        {/* <svg className="button__icon">
          <use xlinkHref={`/icons/${props.type}.svg`}/>
        </svg> */}
      <span className="button__text">{props.text}</span>
    </button>
  );
}

export default ButtonDropdown;
