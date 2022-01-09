import React, { useEffect, useState } from 'react';
import Label from '../../components/label/label';
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';
import Select from '../../components/select/select';
import Task from '../../components/task/task';
import Button from '../../components/button-with-text/button-with-text';
import Calendar from '../../components/calendar/calendar';
import ModalDelete from '../../components/modal-delete/modal-delete';

import data from '../../../server/TaskListResponseDto.json';
import format from '../../utils/format';

import './tasks.scss';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteTask, fetchGetTasks } from '../../store/async/asyncTasks';
import { TaskFullInterface } from '../../utils/interface';


export default function Tasks() {

  const dispatch = useDispatch();
  const tasks: TaskFullInterface[] = useSelector((state: { tasks: { tasks: [] } }) => state.tasks.tasks)
  let [searchTask, setSearchTask] = useState({
    text: '' as string,
    date: '' as string,
    status: '' as string,
    type: [] as string[]
  })

  useEffect(() => {
    dispatch(fetchGetTasks())
    console.log(tasks)
  }, [])

  let [cardTask, setCardTask] = useState(data)
  let [isShowModal, setShowModal] = useState({ modal: false, id: 0 })

  function change(e: { target: HTMLInputElement }) {
    let { name, value, checked } = e.target;
    if (name === 'text') {
      setSearchTask({ ...searchTask, text: value })
    }

    if (name === 'type') {
      if (checked) {
        setSearchTask({ ...searchTask, type: [...searchTask.type, value] })
      }
      else {
        setSearchTask({ ...searchTask, type: searchTask.type.filter(item => item != value) })
      }
    }
  }

  function selected(name: string, value: string) {
    if (value === 'all') { value = ''; }
    setSearchTask({ ...searchTask, [name]: value })
  }

  function formatDate2(day: Date | [Date, Date]) {
    setSearchTask({ ...searchTask, date: format(day) })
  }

  function formatDate1(e: { target: HTMLInputElement }) {
    setSearchTask({ ...searchTask, date: e.target.value })
  }



  function showDeleteMessage(id: number) {
    setShowModal({ modal: true, id: id });
  }

  function deleteTask(answer: boolean) {
    if (answer) {
      dispatch(fetchDeleteTask(isShowModal.id))
    }
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
        <div className="search-tasks">
          <Label text='Поиск'>
            <Input placeholder="Введите название задачи или имя ответственного" name="text" type="search" svg='search' value={searchTask.text} onChange={(e: { target: HTMLInputElement }) => change(e)} />
          </Label>
          <Label text='Статус'>
            <Select type='status' placeholder='Выберите статус' name='status' onChange={selected} />
          </Label>
          <Label text='Срок выполнения'>
            <Calendar placeholder='Укажите дату' value={searchTask.date} editValue={(e: { target: HTMLInputElement }) => formatDate1(e)} selectDay={(day: Date | [Date, Date]) => formatDate2(day)} />
          </Label>
          <Label text='Тип контента'>
            <Checkbox type='type' name='type' onChange={(e: { target: HTMLInputElement }) => change(e)} />
          </Label>
        </div>
        <div className='control'>
          <Button type='new-task' text='Новая задача' click={() => redirect('task-new')} />
        </div>
        <div className="content-tasks">
          <ol className="content-tasks__list">
            {tasks.filter((item) => {
              return ((item.name.toLowerCase()).indexOf(searchTask.text.toLowerCase()) !== -1
                || (item.executor.name.toLowerCase()).indexOf(searchTask.text.toLowerCase()) !== -1)
                && ((format(item.dateExpired).indexOf((searchTask.date).replace(/\//g, ".").replace(/\s/g, "")) !== -1)
                  || searchTask.date === '')
                && ((searchTask.type).indexOf(item.type.name) !== -1
                  || searchTask.type.length === 0)
                && (item.status.name === searchTask.status
                  || searchTask.status === '')
            }).map(item => {
              return <Task task={item} key={item.id} delete={() => showDeleteMessage(item.id)} edit={() => redirect('task-new', item.id)} />
            })
            }
          </ol>
        </div>
      </div>
      {(isShowModal.modal)
        ? <ModalDelete selectedAnswer={deleteTask} text='задачу' />
        : null
      }

    </main>
  )
}