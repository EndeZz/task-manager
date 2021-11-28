import './input.scss';
import React, { useEffect, useState } from 'react';


const Input = ( props ) => {
    const [ search, setSearch] = useState('')
    // const [calendarSearch, setCalendarSearch] = useState('')
    useEffect(() => {
        // console.log(task)
        props.onSearch(search)
    }, [search])

        return(
            props.items.map((item, ind) => 
                <div className={item.classInput} key={ind}>
                    <label className={item.classInput + '__title'}>{item.label}</label>
                    <input className={item.classInput + '__input'} required="required" type="text" placeholder={item.placeholder} onChange={(e) => setSearch(e.target.value)} value={search} />
                    <img className={item.classInput + '__img'} src={item.img} />
                </div>
            )
        )
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

