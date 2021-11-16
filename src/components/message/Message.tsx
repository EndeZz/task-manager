import React, { Fragment } from 'react';
import './message.scss';

function messageSwitcher(type: string, author: string, task: string, date: string) {
  switch (type) {
    case 'comment':
      return (
        <Fragment>
          <img className="message__icon" src="/icons/comment.svg" alt="Новый комментарий" />
          <div className="message__text">
            <p>Новый комментарий в задаче
              <span className="message__text-bold">{task}</span>
            </p>
            <span className="message__date">{date}</span>
          </div>
        </Fragment>
      );

    case 'attach':
      return (
        <Fragment>
          <img className="message__icon" src="/icons/attach.svg" alt="Новый контент" />
          <div className="message__text">
            <p>
              <span className="message__text-bold">{author}</span>
              <span> загрузил контент в задаче </span>
              <span className="message__text-bold">{task}</span>
            </p>
            <span className="message__date">{date}</span>
          </div>
        </Fragment>
      );

    case 'task_video' || 'task_photo' || 'task_audio':
      return (
        <Fragment>
          <img className="message__icon" src={`/icons/${type}.svg`} alt="Новая задача" />
          <div className="message__text">
            <p>
              <span className="message__text-bold">{author}</span>
              <span> поручил вам новую задачу</span>
            </p>
            <span className="message__date">{date}</span>
          </div>
        </Fragment>
      );

    default:
      return (
        null
      );
  }
}

function Message(props: { type: string, author: string, task: string, date: string }) {
  return (
    <div className="message">
      {messageSwitcher(props.type, props.author, props.task, props.date)}
    </div>
  );
}

export default Message;
