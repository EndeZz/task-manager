import React, { Fragment } from 'react';
import InputIconComponent from '../../components/input/InputIconComponent/InputIconComponent';
import RoleFilter from '../../components/filter/RoleFilter/RoleFilter';
import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import UserCard from '../../components/userCard/UserCard';
import Modal from '../../components/modal/Modal';
import './users.scss';

function Users() {
  return (
    <Fragment>
            <div className="users">
        <div className="users__filter">
          <InputIconComponent
            type='text'
            label='Поиск'
            placeholder='Введите имя пользователя'
            id='search'
          ></InputIconComponent>
          <RoleFilter></RoleFilter>
        </div>
        <div className="users__button">
          <ButtonMain type='add' color='blue' text='Добавить пользователя'></ButtonMain>
        </div>
        <ul className="users_list">
          <li>
            <UserCard
              photo='inessa_soloveva'
              name='Инесса Соловьёва'
              email='inessa90@gmail.com'
              role='Контент-мейкер'
            ></UserCard>
          </li>
          <li>
            <UserCard
              photo='oskar_kalinin'
              name='Оскар Калинин'
              email='oscar@gmail.com'
              role='Контент-мейкер'
            ></UserCard>
          </li>
          <li>
            <UserCard
              photo='sofiya_melnik'
              name='Альбина Ткаченко'
              email='albina_t@gmail.com'
              role='Менеджер'
            ></UserCard>
          </li>
          <li>
            <UserCard
              photo='adam_galkin'
              name='Адам Галкин'
              email='galkin@gmail.com'
              role='Администратор'
            ></UserCard>
          </li>
          <li>
            <UserCard
              photo='albina_tkachenko'
              name='София Мельник'
              email='melnik_s@gmail.com'
              role='Менеджер'
            ></UserCard>
          </li>
        </ul>
      </div>
      <Modal type="user"></Modal>
    </Fragment>
  );
}

export default Users;
