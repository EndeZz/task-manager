import React from 'react';

import bg from '../../../public/img/icons/avatar-icon.svg';
import './avatar.scss';

export default function Avatar(props: { url: string, size: string }) {
  let styles = {
    img: {},
    container: {
      backgroundImage: `url(${bg})`
    }
  }

  if (props.url !== "") {
    styles.img = {
      display: 'block'
    }
  }
  return (
    <div className={`user-avatar__container user-avatar__container_${props.size}`} style={styles.container}>
      <img src={props.url} alt="Аватар пользователя" className="user-avatar__img" style={styles.img} />
    </div >
  )
}
