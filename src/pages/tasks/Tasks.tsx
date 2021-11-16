import React, { Fragment } from 'react';
import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import InputIconComponent from '../../components/input/InputIconComponent/InputIconComponent';
import SelectStatus from '../../components/select/SelectStatus/SelectStatus';
import ContentFilter from '../../components/filter/ContentFilter/ContentFilter';
import TaskCard from '../../components/taskCard/TaskCard';
import Modal from '../../components/modal/Modal';
import './tasks.scss';

function Tasks() {
  return (
    <Fragment>
      <div className="tasks">
        <div className="tasks__filter">
          <InputIconComponent
            type='text'
            label='Поиск'
            placeholder='Введите название задачи или имя ответственного'
            id='search'></InputIconComponent>
          <SelectStatus></SelectStatus>
          <InputIconComponent
            type='date'
            label='Срок выполнения'
            placeholder='Укажите дату'
            id='search'></InputIconComponent>
          <ContentFilter></ContentFilter>
        </div>
        <div className="tasks__button">
          <ButtonMain type="add" color="blue" text="Новая задача"></ButtonMain>
        </div>
        <ul className="tasks__list">
          <li>
            <TaskCard
              type="video"
              name="Название повседневная практика показывает"
              author="Аркадий Юрченко"
              date="10.02.2020"
              status='work'></TaskCard>
          </li>
          <li>
            <TaskCard
              type="photo"
              name="Название равным образом начало повседневной работы"
              author="Эльза Калинина"
              date="09.02.2020"
              status='done'></TaskCard>
          </li>
          <li>
            <TaskCard
              type="audio"
              name="Название с другой стороны начало повседневной работы по формиро"
              author="Дмитрий Румянцев"
              date="08.02.2020"
              status="approve"></TaskCard>
          </li>
          <li>
            <TaskCard
              type="photo"
              name="Название равным образом начало повседневной работы"
              author="Гена Черемнов"
              date="06.02.2020"
              status="approve"></TaskCard>
          </li>
          <li>
            <TaskCard
              type="video"
              name="Название повседневная практика показывает"
              author="Инесса Соловьёва"
              date="01.02.2020"
              status='done'></TaskCard>
          </li>
        </ul>
      </div>
      <Modal type="task"></Modal>
    </Fragment>
  );
}

export default Tasks;
