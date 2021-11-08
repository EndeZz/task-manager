import * as React from 'react';
import Svg from '../svg/svg';

import { type } from '../../utils/vars';
import './type.scss';

export default function Type(props: { type: string }) {

  const text = props.type;

  let styles = {
    display: "inline-flex",
    alignItems: "center"
  }

  return (
    <div className="type" style={styles}>
      <Svg type={props.type} classes={`type__img type__img_${props.type}`} file="type-sprite" />
      <span className={`type__text type__text_${props.type}`}>{type.filter((item) => item.id === props.type)[0].text}</span>
    </div>
  )
}
