import React from 'react';
import './message.scss';

function Message(props: { type: string, author: string, task: string, date: string }) {
  return (
    <div className="message">
      {(() => {
        switch (props.type) {
          case 'comment':
            return (
              <div>
                <img className="message__icon" src="/icons/comment.svg" alt="Новый комментарий" />
                <div className="message__text">
                  <p>Новый комментарий в задаче
                    <span className="message__text-bold">{props.task}</span>
                  </p>
                  <span className="message__date">{props.date}</span>
                </div>
              </div>
            );
          case 'attach':
            return (
              <div>
                <img className="message__icon" src="/icons/attach.svg" alt="Новый контент" />
                <div className="message__text">
                  <p>
                    <span className="message__text-bold">{props.author}</span>
                    <span> загрузил контент в задаче </span>
                    <span className="message__text-bold">{props.task}</span>
                  </p>
                  <span className="message__date">{props.date}</span>
                </div>
              </div>
            );
          case 'task_video':
            return (
              <div>
                <img className="message__icon" src="/icons/video-notification.svg" alt="Новая задача" />
                <div className="message__text">
                  <p>
                    <span className="message__text-bold">{props.author}</span>
                    <span> поручил вам новую задачу</span>
                  </p>
                  <span className="message__date">{props.date}</span>
                </div>
              </div>
            );
          case 'task_photo':
            return (
              <div>
                <img className="message__icon" src="/icons/photo-notification.svg" alt="Новая задача" />
                <div className="message__text">
                  <p>
                    <span className="message__text-bold">{props.author}</span>
                    <span> поручил вам новую задачу</span>
                  </p>
                  <span className="message__date">{props.date}</span>
                </div>
              </div>
            );
          case 'audio_video':
            return (
              <div>
                <img className="message__icon" src="/icons/audio-notification.svg" alt="Новая задача" />
                <div className="message__text">
                  <p>
                    <span className="message__text-bold">{props.author}</span>
                    <span> поручил вам новую задачу</span>
                  </p>
                  <span className="message__date">{props.date}</span>
                </div>
              </div>
            );
          default:
            return (
              <div></div>
            );
        }
      })()}
    </div>
  );
}

export default Message;
