import React from 'react';
import ButtonMain from '../buttons/buttonMain/buttonMain';
import ButtonMini from '../buttons/ButtonMini/ButtonMini';
import './modal.scss';

function Modal(props: { type: 'user' | 'task' }) {
  return (
    <div>
      <div className="modal">
        <div className="modal__content">
          <ButtonMini type="clear" color="clear"></ButtonMini>
          {(() => {
            switch (props.type) {
              case 'user':
                return (
                  <h1 className="modal__content__title">
                    Вы действительно хотите удалить пользователя?
                  </h1>
                );
              case 'task':
                return (
                  <h1 className="modal__content__title">
                    Вы действительно хотите удалить задачу?
                  </h1>
                );
              default:
                return (
                  <div></div>
                );
            }
          })()}
          <div className="modal__content__buttons">
            <ButtonMain type="save" color="blue" text="Да"></ButtonMain>
            <ButtonMain type="save" color="lightblue" text="Нет"></ButtonMain>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Modal;
