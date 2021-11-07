import './lightbox.scss';
import React, { FC } from 'react';
import Button from '../button/button';
import Icon from '../icon/icon';

interface LightBoxProps {
  visible: boolean;
  onClick: (event: boolean) => void;
  children?: React.ReactNode;
}

const LightBox: FC<LightBoxProps> = ({ visible, onClick }) => (
  <div className={`lightbox ${visible ? 'lightbox_show' : null}`} onClick={() => onClick(false)}>
    <div className="lightbox__title">
      <Button className="btn lightbox_close">
        <Icon
          className="icon icon_back icon_light"
          path="./img/icons/icons.svg#back"
          width={25}
          height={11}
          aria-hidden="true"
        />
      </Button>
      <div className="lightbox__caption">
        <span className="type-light type type-video">
          <Icon
            className="icon icon_video"
            path="./img/icons/icons.svg#video-icon"
            width={12}
            height={10}
            aria-hidden="true"
          />
          <span>Видео</span>
          <span className="type_time">02:31</span>
        </span>
        <div className="feed__info">
          <h2 className="feed__title feed__title-shift">Название повседневная практика показывает</h2>
          <span className="feed__subtitle feed__subtitle-date">09:21 14.02.2020</span>
        </div>
      </div>
    </div>
    <div className="lightbox__overlay" onClick={(e) => e.stopPropagation()}>
      {/* <div className="lightbox__audio">
          <Button className="btn lightbox__audio-toggle lightbox_play" id="audio-toggle">
            <Icon
              className="icon icon_back icon_light"
              path="./img/icons/icons.svg#play-icon"
              width={25}
              height={11}
              aria-hidden="true"
            />
          </Button>
          <Input
            type="range"
            id="audio-time-duration"
            className="lightbox__input_range lightbox__audio-duration"
            min="0"
            max="100"
            value="0"
          />
          <audio
            id="audio-player"
            src="https://dl.topmyz.ru/files/track/2020/08/Rick_Astley_-_Never_Gonna_Give_You_Up.mp3"></audio>
          <Button className="btn lightbox__audio-toggle lightbox_volume" id="audio-mute">
            <Icon
              className="icon icon_back icon_light"
              path="./img/icons/icons.svg#volume-icon"
              width={25}
              height={11}
              aria-hidden="true"
            />
          </Button>
          <Input
            type="range"
            id="audio-volume"
            className="lightbox__audio-volume"
            min="0"
            max="100"
            step="1"
            value="50"
          />
          <div className="lightbox__caption">
            <span className="lightbox__caption_trans" id="audio-caption-current">
              00:00
            </span>
            <span className="lightbox__caption_trans">/</span>
            <span className="lightbox__caption_trans" id="audio-caption-duration">
              00:00
            </span>
          </div>
        </div> */}
      <img className="lightbox__img" src="./img/card/img1.jpg" alt="Закат на море" />
    </div>
  </div>
);

export default LightBox;
