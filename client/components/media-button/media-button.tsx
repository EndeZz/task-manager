import React from 'react';

import Svg from '../svg/svg';
import './media-button.scss';

export default function MediaButton(props: { type: string, click?: Function, classes?: string }) {
  function clickButton() {
    props.click()
  }

  return (
    <button className={`media-button media-button-${props.type} ${(props?.classes) ? props.classes : ''}`} onClick={clickButton}>
      <Svg type={props.type} classes={`media-button-${props.type}__img`} />
    </button>
  )
}
