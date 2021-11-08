import * as React from 'react';
import './button-task.scss';
import Svg from '../svg/svg';

export default function ButtonTask(props: { type: string, size: string, click?: Function }) {

  function clickButton() {
    props.click()
  }

  return (
    <button className={`button button-task button-task_${props.type} button-task_${props.size}`} onClick={clickButton} >
      <Svg type={props.type} classes={`button-task__img button-task__img_${props.type}`} />
    </button>
  )
}
