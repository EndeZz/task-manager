import './card.scss';
import React, { FC } from 'react';
import TypeContent from '../type/type';

interface CardProps {
  data: any;
  search: string;
  onClick: (event: boolean) => void;
}

const Card: FC<CardProps> = ({ data, search, onClick }) => (
  <ul className="feed__cards grid">
    {data
      .filter((val: { name: string }) => val.name.toLowerCase().includes(search.toLowerCase()))
      .map(
        (card: {
          id: React.Key | null | undefined;
          type: { name: string };
          preview: string | undefined;
          name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
          author: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined };
          dateCreated: string | number | Date;
        }) => (
          <li className="feed__card" key={card.id} onClick={() => onClick(true)} tabIndex={0}>
            {card.type.name === 'audio' ? (
              <div className="feed__img feed__img-audio">
                <p className="feed__img-audio_sound"></p>
                <img className="feed__pic feed__pic-audio" src={card.preview} alt="Светящийся мост ночью" />
                <p className="feed__img-audio_bg"></p>
              </div>
            ) : (
              <div className="feed__img">
                <img className="feed__pic" src={card.preview} alt="Закат на море" />
              </div>
            )}

            <div className="feed__card_container">
              <TypeContent
                type={card.type.name}
                path={`./img/icons/icons.svg#${card.type.name}-icon`}
                variantSpan={`type type-${card.type.name}`}
                width={12}
                height={10}
              />
              <h2 className="feed__title">{card.name}</h2>
              <span className="feed__subtitle">{card.author.name}</span>
              <span className="feed__subtitle feed__subtitle-point">•</span>
              <time className="feed__subtitle feed__subtitle-date">
                {new Date(card.dateCreated).toLocaleString('ru-Ru', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </time>
            </div>
          </li>
        ),
      )}
  </ul>
);

export default Card;
