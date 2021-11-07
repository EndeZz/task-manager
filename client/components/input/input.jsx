import './input.scss';
import React, {Component} from 'react';


class Input extends Component {
    render() {
        return pug`
            ${this.props.children[1].map((item, ind) => pug`
                div(className=${item.classInput})
                    label(className=${item.classInput + '__title'}) ${item.label}
                    input(className=${item.classInput + '__input'} required="required" type="text" placeholder=${item.placeholder})
                    img(className=${item.classInput + '__img'} src=${item.img})

            `)}
        `;
    }
}


export default Input;







// const searchFilter = document.querySelector('.search-filter') as HTMLInputElement;
//     searchFilter.oninput = function () {
//         let str = searchFilter.value.trim().toLowerCase();
//         let names = document.querySelectorAll<HTMLElement>('.card__column-author');
//         let main = document.querySelector('.main')
//         main.setAttribute('style', 'display: block;')
//         if (str !== '') {
//             names.forEach(name => {
//                 let i = String(name.textContent).replace(/ +/g, '');
//                 if (i.toLowerCase().search(str) === -1) {
//                     name.closest('.card__column').classList.add('hide');
//                     main.setAttribute('style', 'display: block;')
//                 } else {
//                     name.closest('.card__column').classList.remove('hide');
//                     main.setAttribute('style', 'display: none;')
//                 }
//             })
//         } else {
//             names.forEach(elem => {
//                 elem.closest('.card__column').classList.remove('hide');
//               });
//         }
//     }

