import React, { Fragment } from 'react';
import Heading from '../../components/heading/heading';
import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import InputComponent from '../../components/input/InputComponent/InputComponent';
import InputIconComponent from '../../components/input/InputIconComponent/InputIconComponent';
import SelectComponent from '../../components/select/SelectComponent/SelectComponent';
import Photo from '../../components/photo/Photo';
import Modal from '../../components/modal/Modal';
import './user.scss';

function User() {
  return (
    <Fragment>
      <div className="user">
        <Heading text="Пользователь"></Heading>
        <div className="user__information">
          <Photo></Photo>
          <div className="user__information__inputs">
            <InputComponent
              type='text'
              label='Имя, фамилия'
              placeholder='Введите имя и фамилию'
              id='user'
            ></InputComponent>
            <InputComponent
              type='text'
              label='Email'
              placeholder='Введите e-mail'
              id='email'
            ></InputComponent>
            <SelectComponent
              items={['Администратор', 'Контент-мейкер', 'Менеджер']}
              type="text"
              label="Роль"
              placeholder="Выберите роль"
              id="role"
            ></SelectComponent>
            <InputIconComponent
              type="text"
              label="Пароль"
              placeholder="Введите пароль"
              id="password"></InputIconComponent>
            <div className="user__information__inputs__buttons">
              <ButtonMain type="save" color="blue" text="Сохранить"></ButtonMain>
            </div>
          </div>
        </div>
      </div>
      <Modal type="user"></Modal>
    </Fragment>
  );
}

export default User;
