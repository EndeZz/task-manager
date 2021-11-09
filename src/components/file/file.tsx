import React from 'react';
import ButtonMain from '../buttons/buttonMain/buttonMain';
import './file.scss';

function File(props: { type: string, name: string, size: string }) {
  return (
    <div className="file">
      <div className="file__info">
        <img src={`/icons/${props.type}.svg`} alt="" />
        <span className="file__info__name">{props.name}</span>
        <span className="file__info__size">{props.size}</span>
      </div>
      <ButtonMain type='download' color='lightblue' text='Скачать'></ButtonMain>
    </div>
  );
}

export default File;
