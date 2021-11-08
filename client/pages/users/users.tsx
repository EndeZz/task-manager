import React, { useState } from 'react';

import Label from '../../components/label/label';
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import Button from '../../components/button-with-text/button-with-text';
import UserCard from '../../components/userCard/userCard';

import { UserInterface } from '../../utils/interface'
import data from '../../../server/UserResponseDto.json';
import './users.scss';
import { useHistory } from 'react-router-dom';
import ModalDelete from '../../components/modal-delete/modal-delete';


export default function Users() {
  let [searchUser, setSearchUser] = useState({
    text: '' as string,
    role: [] as string[],
  })

  let [cardUser, setCardUser] = useState(data);
  let [isShowModal, setShowModal] = useState({ modal: false, id: 0 })

  function change(e: { target: HTMLInputElement }) {
    let { name, value, checked } = e.target;
    if (name === 'text') {
      setSearchUser({ ...searchUser, text: value })
    }

    if (name === 'role') {
      if (checked) {
        if (value == 'all') {
          setSearchUser({ ...searchUser, role: [value] })
        } else setSearchUser({ ...searchUser, role: [...searchUser.role, value].filter(item => item !== 'all') })
      } else setSearchUser({ ...searchUser, role: searchUser.role.filter(item => item !== value) })
    }
  }

  if (searchUser.role.length === 0) {
    setSearchUser({ ...searchUser, role: ['all'] })
  }

  function showDeleteMessage(id: number) {
    setShowModal({ modal: true, id: id });
  }

  function deleteUser(answer: boolean) {
    (answer)
      ? setCardUser(cardUser.filter(item => item.id !== isShowModal.id))
      : null
    setShowModal({ modal: false, id: 0 })
  }

  const history = useHistory();

  function redirect(page: string, id?: number) {
    const path = (id) ? `/${id}` : ''
    history.push(`/${page}${path}`)
  }

  return (
    <main className="main">
      <div className="container">
        <div className="search-users">
          <Label text="Поиск" >
            <Input placeholder="Введите имя пользователя" type="search" svg='search' name="text" onChange={(e: { target: HTMLInputElement }) => change(e)} />
          </Label>
          <Label text="Роль" >
            <Checkbox type="role" name="role" onChange={(e: { target: HTMLInputElement }) => change(e)} checked={searchUser} />
          </Label>
        </div>
        <div className="control">
          <Button type="new-task" text="Добавить пользователя" click={() => redirect('user')} />
        </div>
        <div className="content-users">
          <ul className="content-users__list">
            {cardUser.map((item: UserInterface) => {
              if ((item.name.toLowerCase().indexOf(searchUser.text.toLowerCase()) !== -1 || searchUser.text === '') && (searchUser.role.indexOf(item.role.name) !== -1 || searchUser.role.indexOf('all') !== -1)) {
                return <UserCard user={item} key={item.id} delete={() => showDeleteMessage(item.id)} edit={() => redirect('user', item.id)} />
              } else {
                return null
              }
            })}
          </ul>
        </div>
      </div>
      {(isShowModal.modal)
        ? <ModalDelete selectedAnswer={deleteUser} text="пользователя" />
        : null
      }
    </main>
  )
}
