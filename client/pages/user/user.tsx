import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Avatar from '../../components/avatar/avatar';
import Nav from '../../components/nav/nav';
import './user.scss';
import dataUsers from '../../../server/UserResponseDto.json'
import { UserInterface } from '../../utils/interface';
import Button from '../../components/button-with-text/button-with-text';
import Label from '../../components/label/label';
import Input from '../../components/input/input';
import Select from '../../components/select/select';


function User() {
  type Params = {
    id: string;
  };

  const { id } = useParams<Params>();

  let user = {
    id: 0,
    name: '',
    email: '',
    avatar: '',
    role: {
      id: 0,
      name: ''
    }
  }

  if (id) {
    user = dataUsers.filter(item => item.id.toString() === id)[0];
  }

  const [userInfo, setUserInfo] = useState({ ...user, password: '' })

  function changeUserInfo(e: { target: HTMLInputElement }) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value })
  }

  function selected(name: string, value: string, id: number) {
    setUserInfo({ ...userInfo, role: { ...userInfo.role, id: id, name: value } })
  }

  function loadAvatar(url: { preview: string, name: string, format: string }) {
    setUserInfo({ ...userInfo, avatar: url.preview })
  }

  return (
    <main className="main">
      <div className="container container_small">
        <Nav text="Пользователь" type="title" />
        <div className="content-user">
          <form className="user-info">
            <div className="user-info__image-box">
              <Avatar url={(userInfo.avatar || "")} size="big" />
              <Button type="download" text="Загрузить аватар" click={loadAvatar} />
            </div>
            <div className="user-info__info">
              <Label text="Имя, фамилия">
                <Input placeholder="Введите имя и фамилию" name="name" value={userInfo.name} onChange={(e: { target: HTMLInputElement }) => changeUserInfo(e)} />
              </Label>
              <Label text="E-mail">
                <Input placeholder="Введите e-mail" name="email" value={userInfo.email} onChange={(e: { target: HTMLInputElement }) => changeUserInfo(e)} />
              </Label>
              <Label text="Роль">
                <Select type="role" placeholder="Выберите роль" name="role" onChange={selected} value={userInfo.role.name} />
              </Label>
              <Label text="Пароль">
                <Input placeholder="Введите пароль" name="password" type="password" onChange={(e: { target: HTMLInputElement }) => changeUserInfo(e)} />
              </Label>
              <div className="user-info__button-box">
                <Button type="save" text="Сохранить" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default User;
