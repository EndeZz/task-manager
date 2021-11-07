import '../modals/modals.scss';
import './photoModal.scss'
import '../../styles/common.scss';


import React, {Component} from 'react';


class PhotoModal extends Component {
    render() {
      return pug`
          ${this.props.children[1].map((item, ind) => pug`
            div(class=${item.classModal})
                div(class=${item.classModal + "__descr"})
                    div(class=${item.classModal + "__content"})
                        img(class=${item.classModal + "__btn"} src=${item.arrowLeft} alt="")
                        span(class=${item.classModal + "__title"}) Фото
                    p(class=${item.classModal + "__text"}) Название повседневная практика показывает
                    span(class=${item.classModal + "__data"})
                        time(datetime="14.02.2020 09:21") 09:21 14.02.2020
                figure(class=${item.classModal + "__setting"})
                    img(class=${item.classModal + "__setting-img"} src=${item.img})
          `)}
      `;
  }
}


export default PhotoModal;

