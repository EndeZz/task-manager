import React from 'react';
import ButtonBig from '../../components/buttons/ButtonBig/ButtonBig';
import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import Header from '../../components/header/header';
import InputComponent from '../../components/input/InputComponent/InputComponent';
import InputIconComponent from '../../components/input/InputIconComponent/InputIconComponent';
import SelectComponent from '../../components/select/SelectComponent/SelectComponent';
import SelectContent from '../../components/select/SelectContent/SelectContent';
import './taskNew.scss';

function TaskNew() {
  return (
    <div className="">
      <Header></Header>
      <div className="new_task">
        <ButtonBig type="back" color="blue" text="К списку задач"></ButtonBig>
        <div className="new_task__main">
          <div className="new_task__main__content">
            <SelectContent></SelectContent>
            <InputComponent type='text' label='Заголовок' placeholder='Введите заголовок задачи' id='heading'></InputComponent>
            <InputComponent type='text' label='Описание' placeholder='Опишите требования' id='description'></InputComponent>
            <ButtonMain type="attach" color="lightblue" text="Прикрепить файл"></ButtonMain>
          </div>
          <div className="new_task__main__info">
            <InputIconComponent type='date' label='Срок выполнения' placeholder='Укажите дату' id='calendar'></InputIconComponent>
            <SelectComponent items={['Инесса Соловьева', 'Оскар Калинин', 'Альбина Ткаченко', 'Адам Галкин', 'София Мельник']} type="text" label="Инициатор" placeholder='Выберите инициатора' id='arrow'></SelectComponent>
            <SelectComponent items={['Инесса Соловьева', 'Оскар Калинин', 'Альбина Ткаченко', 'Адам Галкин', 'София Мельник']} type="text" label="Ответсвенный" placeholder='Выберите ответственного' id='arrow'></SelectComponent>
          </div>
        </div>
        <ButtonMain type="save" color="blue" text="Создать задачу"></ButtonMain>
      </div>
    </div>
  );
}

export default TaskNew;
