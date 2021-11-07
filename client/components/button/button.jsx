// import './button.pug';
import './button.scss';



import React, {Component} from 'react';


class Button extends Component {
    render() {
        
        return pug`
            ${this.props.children[1].map((item, ind) => pug`
                button(className=${ `${item.classBtn} ${item.classReset} ${item.classBtn}--${item.bgBtn}` } type="submit")
                    img(className=${ `${item.classBtn + "__img"} ${item.classBtn + "__img"}--${item.bgBtn}`} src=${item.img} alt="Кнопка")
                    span(className=${ `${item.classBtn + "__title"} ${item.classBtn + "__title"}--${item.bgBtn}`}) ${item.text}
            `)}
        `;
    }
}


export default Button;






const BtnVideo = document.querySelector('.btn-video');
const BtnAudio = document.querySelector('.btn-audio');
const BtnPhoto = document.querySelector('.btn-photo');

// Поиск карточек по нужному типу контента - видео, фото, аудио.
// При нажатии на кнопку остаються только карточки данного типа и если еще раз
// нажмем на данную кнопку, карточки вернутся в исходное положение.

export function BtnVideoCard () {
    if (BtnVideo) {
        BtnVideo.addEventListener('click', () => {
            let cardTypeName = document.querySelectorAll('.card__column-type')
            cardTypeName.forEach(title => {
                if (BtnVideo.textContent !== title.textContent) {
                title.closest('.card__column').classList.toggle('hide');
                }
            })
        })
    }
}

export function BtnAudioCard () {
    if (BtnAudio) {
        BtnAudio.addEventListener('click', () => {
            let cardTypeName = document.querySelectorAll('.card__column-type')
            cardTypeName.forEach(title => {
                if (BtnAudio.textContent !== title.textContent) {
                title.closest('.card__column').classList.toggle('hide');
                }
            })
        })
    }
}

export function BtnPhotoCard () {
    if (BtnPhoto) {
        BtnPhoto.addEventListener('click', () => {
            let cardTypeName = document.querySelectorAll('.card__column-type')
            cardTypeName.forEach(title => {
                if (BtnPhoto.textContent !== title.textContent) {
                title.closest('.card__column').classList.toggle('hide');
                }
            })
        })
    }
}


