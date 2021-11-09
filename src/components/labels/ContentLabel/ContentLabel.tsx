import React from 'react';
import './ContentLabel.scss';

function ContentLabel(props: { type: 'video' | 'audio' | 'photo' }) {
  return (
    <div className="content_label">
      {(() => {
        switch (props.type) {
          case 'video':
            return (
              <div>
                <img className="content_label__img" src="../../../public/icons/video.svg" alt="Видео" />
                <span className={`content_label__${props.type}`}>Видео</span>
              </div>
            );
          case 'photo':
            return (
              <div>
                <img className="content_label__img" src="../../../public/icons/photo.svg" alt="Фото" />
                <span className={`content_label__${props.type}`}>Фото</span>
              </div>
            );
          case 'audio':
            return (
              <div>
                <img className="content_label__img" src="../../../public/icons/audio.svg" alt="Аудио" />
                <span className={`content_label__${props.type}`}>Аудио</span>
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

export default ContentLabel;
