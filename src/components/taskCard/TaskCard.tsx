import React, { Fragment } from 'react';
import ButtonMini from '../buttons/ButtonMini/ButtonMini';
import ContentLabel from '../labels/ContentLabel/ContentLabel';
import StatusLabel from '../labels/StatusLabel/StatusLabel';
import './taskCard.scss';

function TaskCard(props: {
  type: 'audio' | 'video' | 'photo',
  name: string,
  author: string,
  date: string,
  status: 'work' | 'approve' | 'done'
}) {
  let button = null;

  switch (props.status) {
    case 'done':
      button = <ButtonMini type="delete" color='lightblue'></ButtonMini>;
      break;
    default:
      button = <Fragment>
          <ButtonMini type="edit" color='lightblue'></ButtonMini>
          <ButtonMini type="delete" color='lightblue'></ButtonMini>
        </Fragment>;
  }

  return (
    <div className="task_card">
      <div className="task_card__info">
        <ContentLabel type={props.type}></ContentLabel>
        <span className="task_card__info__name">{props.name}</span>
        <span className="task_card__info__author">{props.author}</span>
      </div>
      <div className="task_card__info__date">
        <img src="/icons/date.svg" alt="Дата" />
        <span className="task_card__info__date__text">{props.date}</span>
      </div>
      <StatusLabel type={props.status}></StatusLabel>
      <div className="task_card__buttons">
        {button}
      </div>
    </div>
  );
}

export default TaskCard;
