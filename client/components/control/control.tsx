import './control.scss';
import React, { useState } from 'react';
import Search from '../search/search';
import TypeContent from '../type/type';
import Calendar from '../calendar/calendar';
import Input from '../input/input';
import Select from '../select/select';

const Control = ({ data, value, onChange, clearButton, className = '' }) => {
  const contentTypes = ['video', 'photo', 'audio'];
  const contentRoles = ['Все', 'Администратор', 'Менеджер', 'Контент-мейкер'];
  const options = ['Любой', 'В работе', 'Выполнено', 'Ожидает согласования'];

  const [valueSelector, setValueSelector] = useState(null);

  function ControlOption(children) {
    switch (children) {
      case 'search':
        return (
          <>
            <p className="control__title">Поиск</p>
            <Search
              className="input input_search"
              placeholder="Введите название имя исполнителя"
              value={value}
              onChange={onChange}
              onClick={clearButton}></Search>
          </>
        );

      case 'calendar':
        return (
          <>
            <p className="control__title">Дата публикации</p>
            <Calendar
              className="input input_date calendar flatpickr-input"
              name="Дата публикации"
              placeholder="Укажите дату публикации"
            />
          </>
        );

      case 'due-date':
        return (
          <>
            <p className="control__title">Срок выполнения</p>
            <Calendar
              className="input input-sm input_date calendar flatpickr-input"
              name="Срок выполнения"
              placeholder="Укажите дату"
            />
          </>
        );

      case 'status':
        return (
          <>
            <p className="control__title">Статус</p>
            <Select options={options} value={valueSelector} onChange={(val) => setValueSelector(val)}></Select>
          </>
        );

      case 'type-content':
        return (
          <>
            <p className="control__title">Тип контента</p>
            {contentTypes.map((type, i) => (
              <label className="btn__filter" key={i}>
                <Input id={`btn-filter-${i}`} className="btn__filter-checkbox" type="checkbox" />
                <TypeContent
                  type={type}
                  variantSpan={`btn btn__filter-${type} btn_checkbox`}
                  path={`./img/icons/icons.svg#${type}-icon`}
                  width={12}
                  height={10}
                />
              </label>
            ))}
          </>
        );

      case 'role':
        return (
          <>
            <p className="control__title">Роли</p>
            {contentRoles.map((role, i) => (
              <label className="btn__filter" key={i}>
                <Input id={`btn-filter-role-${i}`} className="btn__filter-checkbox" type="checkbox" />
                <span className="btn btn__filter-role btn_checkbox">{role}</span>
              </label>
            ))}
          </>
        );

      default:
        return '';
    }
  }

  return (
    <ul className={`control__list grid ${className}`}>
      {data.map((children, i) => (
        <li className="control__item" key={i}>
          {ControlOption(children)}
        </li>
      ))}
    </ul>
  );
};

export default Control;
