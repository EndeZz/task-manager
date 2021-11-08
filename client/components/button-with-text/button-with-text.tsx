import * as React from "react";
import Svg from "../svg/svg"
import './button-with-text.scss';

import createImg from "../../utils/img";

export default function Button(props: { type: string, text: string, img?: string, click?: Function, typeButton?: 'submit' | 'reset' | 'button' }) {

  function click() {
    if (props?.click) {
      props.click();
    } else console.log("Нажата кнопка");
  }

  function change(e: { target: HTMLInputElement }) {
    createImg(e, props.click)
  }

  const format = ['.avi', '.doc', '.gif', '.jpg', '.mov', '.mp3', '.pdf', '.png', '.ppt', '.rar', '.rtf', '.txt', '.wav', '.xls', '.zip']

  if (props.type === 'download' || props.type === 'attach') {
    return (
      <label
        htmlFor={props.type}
        className={`button button-${props.type}`}
      >
        <input
          id={props.type}
          type="file"
          className={`button-${props.type}__input`}
          onChange={e => change(e)}
          accept={props.type === 'download' ? 'image/*' : format.join(', ')}
        />
        {(props?.img)
          ? <Svg type={props.img} classes={'button-' + props.type + '__img'} />
          : <Svg type={props.type} classes={'button-' + props.type + '__img'} />}
        <span className="button__text">{props.text}</span>
      </label>
    )
  }
  return (
    <button
      className={"button button-" + props.type}
      onClick={click}
      type={props.typeButton}
    >
      {(props?.img)
        ? <Svg type={props.img} classes={'button-' + props.type + '__img'} />
        : <Svg type={props.type} classes={'button-' + props.type + '__img'} />}
      <span className="button__text">{props.text}</span>
    </button >
  );
}

Button.defaultProps = { typeButton: 'button' }
