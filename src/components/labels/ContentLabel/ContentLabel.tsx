import React, { Fragment } from 'react';
import './ContentLabel.scss';

function contentSwitcher(type: 'video' | 'audio' | 'photo') {
  let text = '';

  switch (type) {
    case 'video':
      text = 'Видео';
      break;
    case 'photo':
      text = 'Фото';
      break;
    case 'audio':
      text = 'Аудио';
      break;
    default:
      return null;
  }

  return (
    <Fragment>
      <img className="content_label__img" src={`/icons/${type}.svg`} alt={text} />
      <span className={`content_label__${type}`}>{text}</span>
    </Fragment>
  );
}

function ContentLabel(props: { type: 'video' | 'audio' | 'photo' }) {
  return (
    <div className="content_label">
      {contentSwitcher(props.type)}
    </div>
  );
}

export default ContentLabel;
