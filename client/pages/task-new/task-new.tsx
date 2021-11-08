import React, { useEffect, useState } from 'react';

import Nav from '../../components/nav/nav';
import Label from '../../components/label/label';
import Input from '../../components/input/input';
import Select from '../../components/select/select';
import './task-new.scss';
import Button from '../../components/button-with-text/button-with-text';

import data from '../../../server/task.json';
import userData from '../../../server/UserResponseDto.json';
import Files from '../../components/files/files';
import { useParams } from 'react-router-dom';
import { TaskFullInterface } from '../../utils/interface';
import format from '../../utils/format';
import Calendar from '../../components/calendar/calendar';
import createImg from '../../utils/img';


export default function TaskNew() {
  type Params = {
    id: string;
  };
  const { id } = useParams<Params>();

  let task: TaskFullInterface = {
    id: 0,
    name: '',
    type: { id: 0, name: '' },
    description: '',
    files: [],
    author: { id: 0, name: '', email: '', avatar: '', role: { id: 0, name: '' } },
    executor: { id: 0, name: '', email: '', avatar: '', role: { id: 0, name: '' } },
    dateCreated: '',
    dateExpired: '',
    contents: [],
    comments: [],
    status: { id: 0, name: '' }

  };

  if (id) {
    task = data.filter(item => item.id.toString() === id)[0];
  }

  let [taskInfo, setTaskInfo] = useState(task)

  function changeTaskInfo(e: { target: HTMLInputElement | HTMLTextAreaElement }) {
    const { name, value } = e.target;
    setTaskInfo({ ...taskInfo, [name]: value })
  }

  function selectedInfo(name: string, value: string, id: number) {
    if (name === 'author' || name === 'executor') {
      const user = userData.find(item => item.id === id)
      setTaskInfo({ ...taskInfo, [name]: user })
    }
    else setTaskInfo({ ...taskInfo, [name]: { id: id, name: value } })
  }

  function formatDate2(day: Date | [Date, Date]) {
    setTaskInfo({ ...taskInfo, dateExpired: format(day) })
  }

  function formatDate1(e: { target: HTMLInputElement }) {
    setTaskInfo({ ...taskInfo, dateExpired: e.target.value })
  }

  function updateFile(name: string, format: string, url: string) {
    const ids = taskInfo.contents.reduce((acc, item) => {
      acc = (item.id > acc) ? item.id : acc
      return acc
    }, 0) + 1;
    setTaskInfo({ ...taskInfo, files: [...taskInfo.files, { id: ids, name: name, dateCreated: new Date().toISOString(), format: format, url: url }] })
  }

  function attachFile(e: { target: HTMLInputElement }) {
    createImg(e, updateFile)
  }


  return (
    <main className="main">
      <div className="container">
        <Nav text='К списку задач' type='text' />
        <div className="content-tn">
          <section className="content-tn__main">
            <div className="card-task">
              <Label text="Тип контента">
                <Select type='type' placeholder="Выберите тип контента" name="type" value={taskInfo.type.name} onChange={selectedInfo} />
              </Label>
              <Label text="Заголовок">
                <Input placeholder="Введите заголовок задачи" name="name" value={taskInfo.name} onChange={(e: { target: HTMLInputElement }) => changeTaskInfo(e)} />
              </Label>
              <Label text="Описание">
                <textarea placeholder="Oпишите требования" name="description" value={taskInfo.description} onChange={(e: { target: HTMLTextAreaElement }) => changeTaskInfo(e)} />
              </Label>
              <div className="card-task__select-file">
                {taskInfo.files.map(item => {
                  return (
                    <Files file={item} type='loaded' key={item.id} />
                  )
                })}
                <Button type="attach" text="Прикрепить файл" click={attachFile} />
              </div>
            </div>
          </section>
          <aside className="content-tn__aside">
            <Label text="Срок выполнения">
              <Calendar placeholder='Укажите дату' value={(/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/.test(taskInfo.dateExpired)) ? new Date(taskInfo.dateExpired).toLocaleDateString() : taskInfo.dateExpired} editValue={(e: { target: HTMLInputElement }) => formatDate1(e)} selectDay={(day: Date | [Date, Date]) => formatDate2(day)} />
            </Label>
            <Label text="Инициатор">
              <Select type='user' placeholder="Выберите инициатора" name="author" value={taskInfo.author.name} onChange={selectedInfo} />
            </Label>
            <Label text="Ответственный">
              <Select type='user' placeholder="Выберите ответственного" name="executor" value={taskInfo.executor.name} onChange={selectedInfo} />
            </Label>
          </aside>

        </div>
        <Button type="save-task" text="Создать задачу" img="confirm" />
      </div>
    </main>
  )
}

