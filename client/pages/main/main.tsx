import React, { useState } from 'react';

import Card from '../../components/card/card';
import Label from '../../components/label/label';
import Checkbox from '../../components/checkbox/checkbox';
import Input from '../../components/input/input';
import Calendar from '../../components/calendar/calendar';
import Modal from '../../components/modal/modal';

import { CardInterface } from '../../utils/interface';
import data from '../../../server/ContentsResponseDto.json'
import format from '../../utils/format';

import './main.scss';

export default function Main() {
  let [searchCard, setSearchCard] = useState({
    text: '' as string,
    dateCreated: '' as string,
    type: [] as string[]
  })

  let [showCard, setShowCard] = useState({
    isShow: false,
    id: undefined
  })

  function change(e: { target: HTMLInputElement }) {
    let { name, value, checked } = e.target;
    if (name === 'text') {
      setSearchCard({ ...searchCard, text: value })
    }

    if (name === 'type') {
      if (checked) {
        setSearchCard({ ...searchCard, type: [...searchCard.type, value] })
      }
      else {
        setSearchCard({ ...searchCard, type: searchCard.type.filter(item => item != value) })
      }
    }
  }

  function formatDate2(day: Date | [Date, Date]) {
    setSearchCard({ ...searchCard, dateCreated: format(day) })
  }

  function formatDate1(e: { target: HTMLInputElement }) {
    setSearchCard({ ...searchCard, dateCreated: e.target.value })
  }

  function openModal(data: { isShow: boolean, id: number }) {
    setShowCard(data)
  }

  return (
    <main className="main">
      <div className="container">
        <div className="search-main">
          <Label text='Поиск'>
            <Input
              placeholder="Введите название имя исполнителя"
              name="text"
              svg={'search'}
              value={searchCard.text}
              onChange={(e: { target: HTMLInputElement }) => change(e)}
              type="search"
            />
          </Label>
          <Label text='Дата публикации'>
            <Calendar placeholder='Укажите дату публикации' value={searchCard.dateCreated} editValue={(e: { target: HTMLInputElement }) => formatDate1(e)} selectDay={(day: Date | [Date, Date]) => formatDate2(day)} />
          </Label>
          <Label text='Тип контента'>
            <Checkbox name='type' type='type' onChange={(e: { target: HTMLInputElement }) => change(e)} />
          </Label>
        </div>
        <div className="content-main">
          <ol className="content-main__list">
            {data.map((item: CardInterface) => {
              if (((item.name.toLowerCase()).indexOf(searchCard.text.toLowerCase()) !== -1 || (item.author.name.toLowerCase()).indexOf(searchCard.text.toLowerCase()) !== -1) && ((item.dateCreated.indexOf((searchCard.dateCreated).replace(/\//g, ".").replace(/\s/g, "")) !== -1) || searchCard.dateCreated === '') && ((searchCard.type).indexOf(item.type.name) !== -1 || searchCard.type.length === 0)) {
                return <Card data={item} key={item.id} showModal={openModal} />
              }
              else return null
            })}
          </ol>
        </div>
      </div>
      {(showCard.isShow)
        ? <Modal item={data.filter((item => item.id === showCard.id))[0]} closeModal={openModal} />
        : null
      }
    </main>
  )
}

