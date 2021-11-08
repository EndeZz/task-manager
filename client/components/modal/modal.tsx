import React, { useEffect, useState } from "react";
import Type from "../type/type";
import MediaButton from "../media-button/media-button";

import { CardInterface } from "../../utils/interface";
import './modal.scss';
import time from "../../utils/time";

export default function Modal(props: { item: CardInterface, closeModal: Function }) {
  const [timeContent, setTimeContent] = useState('');

  useEffect(() => {
    if (props.item.type.name !== 'photo') {
      const element = document.createElement(props.item.type.name) as HTMLMediaElement;
      element.setAttribute('src', props.item.url);

      element.onloadedmetadata = function () {
        setTimeContent(time(element))
      }
    }
  });

  function closeModal() {
    props.closeModal({ isShow: false, id: undefined })
  }

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content">
        <div className="modal__menu">
          <div className="modal__back">
            <MediaButton type="back" />
          </div>
          <div className="modal__info">
            <div className="modal__type">
              <Type type={props.item.type.name} />
              {(props.item.type.name !== 'photo')
                ? <span className="modal__type-time">{timeContent}</span>
                : null
              }
            </div>
            <div className="modal__name">
              <span className="modal__title">{props.item.name}</span>
              <time className="date-time modal__date">{props.item.dateCreated}</time>
            </div>
          </div>
          {(props.item.type.name === 'video')
            ? <video src={props.item.url} className="modal__component" controls />
            : null
          }

          {(props.item.type.name === 'photo')
            ? <img src={props.item.url} alt="" className="modal__component" />
            : null
          }

          {(props.item.type.name === 'audio')
            ? <audio src={props.item.url} className="modal__component" controls />
            : null
          }
        </div>
      </div>
    </div>
  )
}
