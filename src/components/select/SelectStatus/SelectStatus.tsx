import React from 'react';
import InputIconComponent from '../../input/InputIconComponent/InputIconComponent';
import StatusLabel from '../../labels/StatusLabel/StatusLabel';
import '../select.scss';

function SelectStatus() {
  return (
    <div className="select" id='select_status'>
      <InputIconComponent label="Статус" placeholder="Выберите статус" type="text" id="arrow"></InputIconComponent>
      <div className="select__dropdown" hidden>
        <ul className="select__dropdown__list">
          <li>
            <div className="select__dropdown__list__item">
              <span className="select__dropdown__list__item__text">Любой</span>
            </div>
          </li>
          <li>
            <div className="select__dropdown__list__item">
              <StatusLabel type='work'></StatusLabel>
            </div>
          </li>
          <li>
            <div className="select__dropdown__list__item">
              <StatusLabel type='approve'></StatusLabel>
            </div>
          </li>
          <li>
            <div className="select__dropdown__list__item">
              <StatusLabel type='done'></StatusLabel>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SelectStatus;
