import React from 'react';
import ContentLabel from '../labels/ContentLabel/ContentLabel';
import './card.scss';

export default function CardComponent(props: {
  type: string,
  duration: string,
  name: string,
  author: string,
  date: string
}) {
  return (
      <div className='card'>
        <img src="../../../public/img/beach.jfif" alt="Пляж" />
        <div className="card__type">
          <ContentLabel type='video'></ContentLabel>
          <span className={`duration__${props.type}`}>{props.duration}</span>
        </div>
        <span>{props.name}</span>
        <div className="card__text ">
          <span className="card__date">{props.author}</span>
          <img src="../../../public/icons/separator.svg" alt="Разделитель" />
          <time className="time.card__date">{props.date}</time>
        </div>
      </div>
  );
}
