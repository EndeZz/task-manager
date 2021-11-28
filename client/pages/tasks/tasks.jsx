import './tasks.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';


import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'

import Header from '../../components/header/header';
import Input from '../../components/input/input';
// import Select from '../../components/select/select';
import Button from '../../components/button/button';
import CardTask from '../../components/cardsTask/cardsTask';

import searchImg from '../../../public/img/search.svg'
import videoIcon from '../../../public/img/blue--icon.svg'
import photoIcon from '../../../public/img/green--icon.svg'
import audioIcon from '../../../public/img/yellow--icon.svg'
import arrowDown from '../../../public/img/arrow-down.svg'
import calendar from '../../../public/img/calendar.svg'

const searchInput = [
  {
    classInput: "search-block", 
    label: "Поиск", 
    placeholder: "Введите название имя исполнителя",
    img:  `${searchImg}`
  }
]


const videoBtn = [
  {
    classBtn: "btn-video",
    classReset: "btn-reset",
    bgBtn: "blue",
    text: "Видео",
    img: `${videoIcon}`
  }
]
const photoBtn = [
  {
    classBtn: "btn-photo",
    classReset: "btn-reset",
    bgBtn: "green",
    text: "Фото",
    img: `${photoIcon}`
  }
]
const audioBtn = [
  {
    classBtn: "btn-audio",
    classReset: "btn-reset",
    bgBtn: "yellow",
    text: "Аудио",
    img: `${audioIcon}`
  }
]

const NameStatusInput = [
  {
    classInput: "status-block", 
    label: "Статус", 
    placeholder: "Выберите статус",
    img:  `${arrowDown}`
  }
]

// const ListStatus = [
//   {className: "status-block" ,listItem: "Любой", color: "black"},
//   {className: "status-block" ,listItem: "В работе", color: "purple"},
//   {className: "status-block" ,listItem: "Ожидает согласования", color: "blue"},
//   {className: "status-block" ,listItem: "Выполнено", color: "green"}
// ]

const options = [
  { value: 'Любой', label: 'Любой' },
  { value: 'В работе', label: 'В работе' },
  { value: 'Ожидает согласования', label: 'Ожидает согласования' },
  { value: 'Выполнено', label: 'Выполнено' },
];


const Deadline = [
  {
    classInput: "deadline-block", 
    label: "Срок выполнения", 
    placeholder: "Укажите дату",
    img:  `${calendar}`
  }
]

import logoIcon from '../../../public/img/logo.svg'
import blueIncon from '../../../public/img/blue--icon.svg' 
import yellowIcon from '../../../public/img/yellow--icon.svg'
import greenIcon from '../../../public/img/green--icon.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'

import EditImg from '../../../public/img/edit--icon.svg'
import DelImg from '../../../public/img/delete--icon.svg'
import Cards from '../../components/cards/cards';
import { TasksData } from '../../../config/config';
import { Controls } from '../../components/controls/controls';



const nav = [
  {className: "header", active : "active", "text" : "Главная", href: "/index"},
  {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
  {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
]

const headerData = [
  {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
]

let source

const Tasks = ( { cards, setCards } ) => {

  const [ filteredTasks, setFilteredTasks ] = useState(cards)

  const [ isLoader, setIsLoader ] = useState(true)

  const [selectedPost, setSelectedPost] = useState({});


  const fetchPosts = () => {
    source = axios.CancelToken.source()
    axios
      .get(TasksData, { cancelToken: source.token})
      .then(( response ) => {
        setCards(response.data)
      })
      .catch((err) => {
          console.log(err)
      })
  }

  setTimeout(() => {
    setIsLoader(false)
  }, 1000)

  const handleSearch = (nameTask) => {
      let data = [...cards];

      if(nameTask) {
          data = data.filter(c => c.status.name == nameTask)
      }
      // console.log('filteredTasks', data.filter(c => c.status.name == nameTask ));
      setFilteredTasks(data)
  }

  console.log('filteredTasks', filteredTasks);

  useEffect(() => {
      fetchPosts()
      return () => {
        if ( source ) {
          source.cancel(' Axios get canceled ')
        }
      }
      // fetch(TasksData)
      //     .then(res => {
      //         return res.json()
      //     })
      //     .then((data) => {
      //         console.log('dataServer', data)
      //           setCards(data)
      //     })
  }, [])
  if(!cards) return 'No posts'

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line
  }, [cards]);
  

  const deletePost = pos => {
    if(pos) {
      // let temp = [...filteredTasks]
      if(confirm(`Удалить ? ${pos.name}. На позиции ${pos.id}`)) {
        // let temp = filteredTasks.filter((item) => item.id !== pos.id)
        // temp.splice(pos, 1)
        // setFilteredTasks(temp)
        axios
          .delete(TasksData + "/" + pos.id)
          .then((response) => {
            console.log('Пост удален => ' , response.data)
            console.log('urlData => ', TasksData + "/" + pos.id)
            fetchPosts()
          })
          .catch(( err ) => {
              console.log( err )
          })
      }
    }
  }

  useEffect(() => {
    deletePost();
    // eslint-disable-next-line
  }, [cards]);



  return (
    <div>
      { isLoader == true ?
          isLoader && <div className="loader-container"><div className="isLoader">Tasks - Loading...</div></div>
          :
            <><Header head={headerData} nav={nav} /><div className="main">
                <div className="info">
                  <div className="container">
                    <div className="search">
                      <Input items={searchInput} onSearch={handleSearch} />
                      <div className="status-block">
                        <label className="status-block__title"> Статус </label>
                        <Controls onSearch={handleSearch} />
                      </div>
                      <Input items={Deadline} onSearch={handleSearch} />
                      <div className="info__content">
                        <label className="info__search-title"> Тип контента </label>
                        <div className="info__content-block">
                          <Button btn={videoBtn} />
                          <Button btn={photoBtn} />
                          <Button btn={audioBtn} />
                        </div>
                      </div>
                    </div>
                    <ul className="card-task">
                      {/* <CardTask lists={items} /> */}
                      {/* {filteredTasks && <CardTask lists={filteredTasks} idPost={deletePost}/>} */}
                      {filteredTasks.length > 0 ?
                        <CardTask lists={filteredTasks} idPost={deletePost} />
                        : <span className="empty-list"> Список задач пуст </span>}
                    </ul>
                  </div>
                </div>
              </div></>
      }
    </div>

  )
}

export default Tasks;

