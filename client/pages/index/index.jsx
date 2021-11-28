import './index.scss';
import '../../styles/common.scss';
import '../../styles/fonts.scss';

import '../../components/modals/modals.jsx';

// import { BtnAudioCard } from '../../components/button/button';
// import { BtnPhotoCard } from '../../components/button/button';
// import { BtnVideoCard } from '../../components/button/button';

import React, { useRef } from 'react';
import { useState, useEffect } from "react"
import axios from 'axios';


import logoIcon from '../../../public/img/logo.svg'
import bluebell from '../../../public/img/bluebell.svg'
import logoPerson from '../../../public/img/logo-person.svg'
import searchImg from '../../../public/img/search.svg'
import calendarImg from '../../../public/img/calendar.svg'
import videoIcon from '../../../public/img/blue--icon.svg'
import photoIcon from '../../../public/img/green--icon.svg'
import audioIcon from '../../../public/img/yellow--icon.svg'




import Input from '../../components/input/input';
import Button from '../../components/button/button';
import Header from '../../components/header/header';
import Cards from '../../components/cards/cards';
import Controls from '../../components/controls/controls';
import { AllTasks, Content, ContentData } from '../../../config/config';
import InputCalendar from '../../components/inputCalendar/inputCalendar';
// import Tasks from '../tasks/tasks';


export const searchInput = [
    {
        classInput: "search-block", 
        label: "Поиск", 
        placeholder: "Введите название имя исполнителя",
        img:  `${searchImg}`
    }
]
const calendarInput = [
    {
        classInput: "search-block", 
        label: "Дата публикации", 
        placeholder: "Укажите дату публикации",
        img: `${calendarImg}`
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




// import audioMusic from '../../../public/audio/audio.mp3'
const audioMusic = require('../../../public/audio/audio.mp3')

export const nav = [
    {className: "header", active : "active", "text" : "Главная", href: "/index"},
    {className: "header", active : "", "text" : "Задачи", href: "/tasks"},
    {className: "header", active : "",  "text" : "Пользователи", href: "/users"}
]

export const headerData = [
    {className: "header-block", classNotif: "header__notif-count", logoImg: `${logoIcon}`, notifImg: `${bluebell}`, notifCount: "4", nameUser: "Василий Петров", logoPers: `${logoPerson}`}
]


// eslint-disable-next-line react/prop-types
const Index = ( { cards, setCards } ) => {
    // const [cards, setCards] = useState([])
    let [ filteredTasks, setFilteredTasks ] = useState(cards)
    const [ filteredTasksButton, setfilteredTasksButton ] = useState(cards)    
    const [filteredPolls, setfilteredPolls] = React.useState(null)
    const [ isPending, setIsPending ] = useState(true)
    const [ isLoader, setIsLoader ] = useState(true)

    const mountedRef = useRef(false)


    const handleSearch = (search, calendarSearch) => {
        let data = [...cards];

        if(search) {
            data = data.filter(c => c.type.name.toLowerCase().includes(search.toLowerCase()) ||
                                    c.dateCreated.replace(/[^\d]/g, '').includes(search.replace(/[^\d]/g, '') || 
                                    c.type.name.toLowerCase().includes(search.toLowerCase())))
        }
        setFilteredTasks(data)
    }

    setTimeout(() => {
        setIsLoader(false)
    }, 1000)
    useEffect(() => {
        setTimeout(() => {
            axios.get( ContentData ).then(( response ) => {
                setCards(response.data)
                setIsPending(false)
            })
        }, 1500)
    }, [])

    useEffect(() => {
        // setfilteredPolls([...cards].filter(e => e.type.name === "Фото"));
        setfilteredPolls([...cards]);
    }, [])
    useEffect(() => {
        handleSearch();
        // eslint-disable-next-line
      }, [cards]);

    const photo = [...cards].filter(e => e.type.name === 'Фото')
    const video = [...cards].filter(e => e.type.name === 'Видео')
    const audio = [...cards].filter(e => e.type.name === 'Аудио')


    function showVideoBtn() {
        setfilteredPolls(video)
    }
    function showPhotoBtn() {
        setfilteredPolls(photo)
    }
    function showAudioBtn() {
        setfilteredPolls(audio)
    }


    console.log('filteredPolls', filteredPolls)
    return (
        <div>
        { isLoader == true ?
        isLoader && <div className="loader-container"><div className="isLoader">Home - Loading...</div></div>
            : 
            <>
                {/* <Header head={headerData} nav={nav} /> */}
                <div className="main">
                    <div className="info">
                        <div className="container">
                            <div className="search">
                                {/* <Controls /> */}
                                <Input items={searchInput} onSearch={handleSearch} />
                                <InputCalendar items={calendarInput} onSearch={handleSearch} />
                                <div className="info__content">
                                    <label className="info__search-title">Тип контента</label>
                                    <div className="info__content-block">
                                        <Button btn={videoBtn} />
                                        <Button btn={photoBtn} />
                                        <Button btn={audioBtn} />
                                        {/* <Button btn={videoBtn} onClick={() => showVideoBtn()} /> */}
                                        {/* <Button btn={photoBtn} onClick={() => showPhotoBtn()} /> */}
                                        {/* <Button btn={audioBtn} onClick={() => showAudioBtn()} /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                {isPending && <div className="loader"></div>}
                                <ul className="card__row">
                                    {filteredTasks && <Cards cards={filteredTasks} isPend={isPending} />}
                                </ul>
                            </div>
                            {/* <div className="loader"></div> */}
                            {/* <VideoModal modals={videoModal} /> */}
                            {/* <PhotoModal modals={videoModal} /> */}
                        </div>
                    </div>
                </div></>
        }
        </div>
    )
}

export default Index;
