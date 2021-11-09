import React from 'react';
import ButtonContent from '../../buttons/ButtonContent/ButtonContent';
import InputLabelPattern from '../../input/InputLabelPattern/InputLabelPattern';
import './ContentFilter.scss';

function ContentFilter() {
  return (
    <div className="filter_content">
      <InputLabelPattern label='Тип контента' id=''></InputLabelPattern>
      <div className="filter__buttons">
        <ButtonContent type='video' text='Видео'></ButtonContent>
        <ButtonContent type='photo' text='Фото'></ButtonContent>
        <ButtonContent type='audio' text='Аудио'></ButtonContent>
      </div>
    </div>
  );
}

export default ContentFilter;
