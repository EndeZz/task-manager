import React from 'react';
import ButtonFilter from '../../buttons/ButtonFilter/ButtonFilter';
import InputLabelPattern from '../../input/InputLabelPattern/InputLabelPattern';
import './RoleFilter.scss';

function RoleFilter() {
  return (
    <div className="filter_role">
      <InputLabelPattern label='Роль' id=''></InputLabelPattern>
      <div className="filter_role__buttons">
        <ButtonFilter text='Все'></ButtonFilter>
        <ButtonFilter text='Контент-мейкер'></ButtonFilter>
        <ButtonFilter text='Менеджер'></ButtonFilter>
        <ButtonFilter text='Администратор'></ButtonFilter>
      </div>
    </div>
  );
}

export default RoleFilter;
