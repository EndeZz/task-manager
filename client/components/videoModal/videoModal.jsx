import '../modals/modals.scss';
import './VideoModal.scss'
import '../../styles/common.scss';


import React, {Component} from 'react';


class VideoModal extends Component {
    render() {
      return pug`
          ${this.props.children[1].map((item, ind) => pug`
            div(class=${item.classModal})
                div(class=${item.classModal + "__descr"})
                    div(class=${item.classModal + "__content"})
                        img(class=${item.classModal + "__btn"} src=${item.img})
                        span(class=${item.classModal + "__title"}) Видео
                        span(class=${item.classModal + "__time"})
                            time(class=${item.classModal + "__time-duration"} datetime="02:31") 02:31
                    figure(class=${item.classModal + "__view"})
                        p(class=${item.classModal + "__text"}) Название повседневная практика показывает 
                        span(class=${item.classModal + "__data"})
                            time(class=${item.classModal + "__content-data"} datetime="14.02.2020 09:21") 09:21 14.02.2020
                figure(class=${item.classModal + "__setting"})
                    video(class=${item.classModal + "__setting-video"})
                        source(class=${item.classModal + "__source"} src=${item.video} type="video/mp4")
                    div(class=${item.classDop})
                        div(class=${item.classDop + "__progress-audio"})
                            input(class=${item.classDop + "__progress"} type="range" max="100" value="0")
                        div(class=${item.classDop + "__wrap"})
                            div(class=${item.classDop + "__position-left"})
                                div(class=${item.classDop + "__play"})
                                    img(class=${item.classDop + "__play-btn"} src=${item.playIcon} alt="Воспроизвести видео")
                                div(class=${item.classDop + "__volume"})
                                    img(class=${item.classDop + "__volume-btn"} src=${item.volumeIcon} alt="Громкость видео")
                                div(class=${item.classDop + "__progress-volume"})
                                    input(class=${item.classDop + "__progress-audio"} type="range" max="100" value="5")
                            div(class=${item.classDop + "__position-right"})
                                span(class=${item.classDop + "__duration-video"}) 00:00
                                div(class=${item.classDop + "__fullscreen"})
                                    img(class=${item.classDop + "__fullscreen-btn"} src=${item.fullscreenIcon} alt="")
          `)}
      `;
  }
}


export default VideoModal;

