import React, { Fragment } from 'react';
import ButtonMain from '../buttons/buttonMain/buttonMain';
import ButtonMini from '../buttons/ButtonMini/ButtonMini';
import './modal.scss';

function Modal(props: { type: 'user' | 'task' }) {
  let text: string = '';

  switch (props.type) {
    case 'user':
      text = 'Вы действительно хотите удалить пользователя?';
      break;
    case 'task':
      text = 'Вы действительно хотите удалить задачу?';
      break;
    default:
      return null;
  }

  return (
    <Fragment>
      <div className="modal">
        <div className="modal__content">
          <ButtonMini type="clear" color="clear"></ButtonMini>
          <h1 className="modal__content__title">{text}</h1>
          <div className="modal__content__buttons">
            <ButtonMain type="save" color="blue" text="Да"></ButtonMain>
            <ButtonMain type="save" color="lightblue" text="Нет"></ButtonMain>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </Fragment>
  );
}

export default Modal;
