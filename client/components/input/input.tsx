import React, { useState } from 'react';
import { type } from '../../utils/vars';
import Svg from '../svg/svg';
import './input.scss';

function Input(props: { placeholder: string, name: string, type?: string, readonly?: boolean, onChange?: Function, onClick?: Function, svg?: string, value?: string, children?: JSX.Element, classes?: string }) {

  let [search, setSearch] = useState(false)


  function change(e: { target: HTMLInputElement }) {
    props.onChange(e);
  }

  function click() {
    props.onClick();
  }

  return (
    <div className="search__box">
      <input
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
        readOnly={props.readonly}
        value={props.value}
        onChange={change}
        onClick={(props?.onClick) ? click : null}
        onFocus={(props?.type === 'search') ? () => setSearch(true) : null}
        onBlur={(props?.type === 'search') ? () => setSearch(false) : null}
        className={props.classes}
      />
      {(props?.svg)
        ? (<Svg file='input-sprite' type={props.svg} classes={`search__img search__img_${props.svg} ${(search) ? 'search__img_search_active' : ''}`} />)
        : null}
    </div>
  )
}

Input.defaultProps = { type: 'text', readonly: false };

export default Input

//============PUG===============
// input(type= types class="search__input "+classes placeholder= placeholder name= names)
//       if (types=='password')
//         button.password-button
//           svg(class="search__img search__img_" + item+'-no-visible')
//             use(xlink:href="../../../public/img/icons/input-sprite.svg#password-no-visible")
//           svg(class="search__img search__img_" + item+'-visible')
//             use(xlink:href="../../../public/img/icons/input-sprite.svg#password-visible")



// if (document.querySelector('.password')) {
//   const password = document.querySelector('.password');
//   const passwordButton = document.querySelector('.password-button');

//   passwordButton.addEventListener('click', () => {
//     passwordButton.classList.toggle('password-button_active');
//     if (passwordButton.classList.contains('password-button_active')) {
//       password.type = 'text';
//     } else {
//       password.type = 'password';
//     }
//   });
// }
