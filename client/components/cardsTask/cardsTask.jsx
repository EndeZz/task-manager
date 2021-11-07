import '../button/button';

import React, {Component} from 'react';

import Button from '../button/button';
import EditImg from '../../../public/img/edit--icon.svg'

// const buttonInsert = [
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`}
// ]
// const buttonDelete = [
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "edit-btn", classReset: "btn-reset", bgBtn: "blue", img: `${EditImg}`},
//     {classBtn: "", classReset: "", bgBtn: "", img: ""},
//     {classBtn: "", classReset: "", bgBtn: "", img: ""}
// ]


class CardTask extends Component {
    render() {
        return pug`
            ${this.props.children[1].map((item, ind) => pug`
                li(class=${item.className})
                    img(class=${item.className + "__photo"} src=${item.icon} alt="")
                    span(class=${ `${item.className + "__title"} ${item.className}__title--${item.color}` }) ${item.title}
                    p(class=${item.className + "__text"}) ${item.text}
                        span(class=${item.className + "__text-gradient"})
                    span(class=${item.className + "__author"}) ${item.author}
                    date(class=${item.className + "__data"}) ${item.data}
                    span(class=${ `${item.className}__process ${item.className}__process--${item.statusColor}`}) ${item.statusName}
                    div(class=${item.className + "__buttons"})
                        div(class=${item.className + "__inner-edit"})
                            button(class=${ `${item.classEditBtn} ${item.classReset} ${item.classEditBtn}--${item.bgEditBtn}` })
                                img(class=${item.classEditBtn + "__img"} src=${item.imgEdit} alt="Кнопка редактирования")
                        div(class=${item.className + "__inner-del"})
                            button(className=${ `${item.classDelBtn} ${item.classReset} ${item.classDelBtn}--${item.bgDelBtn}` })
                                img(className=${ `${item.classDelBtn + "__img"} ${item.classDelBtn + "__img"}--${item.bgDelBtn}`} src=${item.imgDel} alt="Кнопка")

            `)}
        `;
    }
}

// classEditBtn: "edit-btn", claddDelBtn: "delete-btn", classReset: "btn-reset", bgEditBtn: "blue", bgDelBtn: "blue", imgEdit: `${EditImg}`, imgDel: `${DelBtn}`
export default CardTask;
