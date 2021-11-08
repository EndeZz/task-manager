import React, { useState } from 'react';

import Nav from '../../components/nav/nav';
import Avatar from '../../components/avatar/avatar';
import Button from '../../components/button-with-text/button-with-text';
import Label from '../../components/label/label';
import Input from '../../components/input/input';
import apiUsers from '../../api/user';

import './profile.scss';
import { UserInterface } from '../../utils/interface';
import { EvalSourceMapDevToolPlugin } from 'webpack';

export default function Profile(props: { user: UserInterface }) {

  let [userInfo, setUserInfo] = useState(props.user)
  let [userError, setUserError] = useState({ name: false, email: false })
  const api = apiUsers()

  function loadAvatar(url: { preview: string, name: string, format: string }) {
    setUserInfo({ ...userInfo, avatar: url.preview })
  }

  function updateData(e: { target: HTMLInputElement }) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value })
  }

  function updateUser() {
    if (userInfo.name.length && userInfo.email.length) {
      api.putUsers(userInfo)
    }
    else {
      if (!userInfo.name.length) setUserError({ ...userError, name: true })
      if (!userInfo.email.length) setUserError({ ...userError, email: true })
    }
  }

  function deleteUser() {
    api.deleteUsers(userInfo.id)
  }

  return (
    <main className="main">
      <div className="container container_small">
        <Nav text='Профиль' type='title' />
        <div className="profile">
          <div className="profile__image-box">
            <Avatar url={userInfo.avatar} size='big' />
            <Button type='download' text='Загрузить аватар' click={loadAvatar} />
          </div>
          <div className="profile__info">
            <Label text='Имя, фамилия'>
              <Input placeholder='Введите имя и фамилию' name='name' value={userInfo.name} onChange={updateData} />
            </Label>
            <Label text='E-mail'>
              <Input placeholder='Введите e-mail' name='email' value={userInfo.email} onChange={updateData} />
            </Label>
            <div className="profile__button-box">
              <Button type='save' text='Сохранить' click={updateUser} />
              <Button type='delete' text='Удалить профиль' click={deleteUser} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
