import '../modals/modals.scss';
import './audioModal.scss'
import '../../styles/common.scss';


import React, {Component} from 'react';


class AudioModal extends Component {
    render() {
      return pug`
          ${this.props.children[1].map((item, ind) => pug`
            div(class=${item.classModal})
                div(class=${item.classModal + "__descr"})
                    div(class=${item.classModal + "__content"})
                        img(class=${item.classModal + "__btn"} src="../../../public/img/video/arrow-left.svg")
                        span(class=${item.classModal + "__title"}) Аудио
                        span(class=${item.classModal + "__time"})
                            time(class=${item.classModal + "__time-duration"} datetime="02:31") 02:31
                    figure(class=${item.classModal + "__view"})
                        p(class=${item.classModal + "__text"}) Название повседневная практика показывает 
                        span(class=${item.classModal + "__data"})
                            time(class=${item.classModal + "__content-data"} datetime="14.02.2020 09:21") 09:21 14.02.2020
                div(class=${item.classModal + "__setting"})
                    div(class=${item.classModal + "__setting-audio"})
                        div(class=${item.classModal + "__wrap"})
                            div(class=${item.classModal + "__audio-play"})
                                img(class=${item.classModal + "__audio-btn"} src=${item.playIcon})
                            audio(class=${item.classModal + "__audio-music"})
                                source(class=${item.classModal + "__audio"} src=${item.audioMusic} type="audio/mp3") 
                            div(class=${item.classModal + "__progress-audio"})
                                input(class=${item.classModal + "__progress"} type="range" max="100" value="0")
                            div(class=${item.classModal + "__volume"})
                                img(src=${item.volumeIcon} alt="")
                            div(class=${item.classModal + "__progress-volume"})
                                input(class=${item.classModal + "__progress-control"} type="range" max="100" value="19")
                            span(class=${item.classModal + "__duration-video"}) 00:00
          `)}
      `;
  }
}


export default AudioModal;

