import './select.scss';
import React, { useEffect, useRef, useState } from 'react';

const Select = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef(null);

  const clickOutside = (event) => {
    setIsOpen(event && event.target === ref.current);
  };

  useEffect(() => {
    document.addEventListener('click', clickOutside);
    return () => document.removeEventListener('click', clickOutside);
  }, []);

  function renderSwitch(option) {
    switch (option) {
      case 'В работе':
        return <span className="task__progress task__progress_in-work">В работе</span>;

      case 'Выполнено':
        return <span className="task__progress task__progress_complete">Выполнено</span>;

      case 'Ожидает согласования':
        return <span className="task__progress task__progress_awaiting">Ожидает согласования</span>;

      default:
        return <span className="task__progress task__progress">Любой</span>;
    }
  }

  return (
    <>
      <div className="select">
        <button className="input input-sm btn__select" ref={ref} onClick={() => setIsOpen((prev) => !prev)}>
          {value || 'Выберите статус'}
        </button>
        <span className={`${isOpen ? 'input_arrow_visible' : 'input_arrow_hidden'}`}></span>
        <ul className={`select__list ${isOpen ? 'select__list_visible' : ''}`}>
          {options.map((option, i) => (
            <li
              className={`select__list-item ${value === option ? 'select__list_active' : ''}`}
              key={i}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}>
              {renderSwitch(option)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Select;
