import React, { Fragment } from 'react';
import './ContentLabel.scss';

function ContentLabel(props: { type: 'video' | 'audio' | 'photo' }) {
  return (
    <div className="content_label">
      {(() => {
        switch (props.type) {
          case 'video':
            return (
              <Fragment>
                <img className="content_label__img" src="/icons/video.svg" alt="Видео" />
                <span className={`content_label__${props.type}`}>Видео</span>
              </Fragment>
            );
          case 'photo':
            return (
              <Fragment>
                <img className="content_label__img" src="/icons/photo.svg" alt="Фото" />
                <span className={`content_label__${props.type}`}>Фото</span>
              </Fragment>
            );
          case 'audio':
            return (
              <Fragment>
                <img className="content_label__img" src="/icons/audio.svg" alt="Аудио" />
                <span className={`content_label__${props.type}`}>Аудио</span>
              </Fragment>
            );
          default:
            return (
              null
            );
        }
      })()}
    </div>
  );
}

export default ContentLabel;
