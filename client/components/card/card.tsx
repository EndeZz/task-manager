import React, { useEffect, useState } from 'react';
import Type from '../type/type';
import time from '../../utils/time';
import './card.scss';
import { CardInterface } from '../../utils/interface';
import audio from '../../../public/img/content/audio-vect.svg';

export default function Card(props: { data: CardInterface, showModal: Function }) {
  const [timeContent, setTimeContent] = useState('');

  useEffect(() => {
    if (props.data.type.name !== 'photo') {
      const element = document.createElement(props.data.type.name) as HTMLMediaElement;
      element.setAttribute('src', props.data.url);

      element.onloadedmetadata = function () {
        setTimeContent(time(element))
      }
    }
  });

  function showCard() {
    props.showModal({ isShow: true, id: props.data.id })
  }

  return (
    < li className="content-main__item" onClick={showCard}>
      <div className={`card card_${props.data.type.name}`}>
        <div className="card__container-img">
          <div className="card__img-bg" />
          <img className="card__img" src={props.data.preview} alt="Превью карточки" />
          <img className="card__img_audio" src={audio} alt="Осциллограмма" />
        </div>
        <div className="card__container-description">
          <Type type={props.data.type.name} />
          {(props.data.type.name !== 'photo')
            ? <span className="card__type-time">{timeContent}</span>
            : null
          }
        </div>
        <p className="card__title">{props.data.name}</p>
        <div className="card__author-info">
          <span className="card__author-name">{props.data.author.name}</span>
          <span className="card__delimiter" />
          <time className="card__date" dateTime={props.data.dateCreated}>{props.data.dateCreated}</time>
        </div>
      </div>
    </li >
  )
}
