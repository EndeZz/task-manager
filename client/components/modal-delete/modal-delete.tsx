import React from "react";
import MediaButton from "../media-button/media-button";
import './modal-delete.scss';

export default function ModalDelete(props: { selectedAnswer: Function, text: string }) {

  function getAnswer(answer: boolean) {
    props.selectedAnswer(answer)
  }

  return (
    <div className="modal modal-delete">
      <div className="modal-delete__content">
        <h2 className="modal-delete__message">{`Вы действительно хотите удалить ${props.text}?`}</h2>
        <div className="modal-delete__button-box">
          <button className="button modal-delete__button_yes" onClick={() => getAnswer(true)}>Да</button>
          <button className="button modal-delete__button_no" onClick={() => getAnswer(false)}>Нет</button>
        </div>
        <MediaButton type='cross' click={() => getAnswer(false)} classes='modal-delete__cross' />
      </div>
    </div>
  )
}