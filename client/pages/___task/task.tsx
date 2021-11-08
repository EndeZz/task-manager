import React, { useState } from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import Nav from '../../components/nav/nav';
import Type from '../../components/type/type';
import Svg from '../../components/svg/svg';
import Comment from '../../components/comment/comment';
import { status, formatFile } from '../../utils/vars';
import format from '../../utils/format';
import data from '../../../server/task.json'
import { CardInterface, UserInterface } from '../../utils/interface';
import './task.scss';
import Content from '../../components/content/content';
import createImg from '../../utils/img';
import FormatFile from '../../components/format-file/format-file';
import ButtonTask from '../../components/button-task/button-task';
import Button from '../../components/button-with-text/button-with-text';
import ModalDelete from '../../components/modal-delete/modal-delete';
import Input from '../../components/input/input';
import Label from '../../components/label/label';

export default function Task(props: { user: UserInterface }) {

  type Params = {
    id: string;
  };

  const history = useHistory();
  let [listTask, setListTask] = useState(data) // все задачи (необхолимо вынести отсюда!!!!)

  const { id } = useParams<Params>();
  const task = listTask.filter(item => item.id.toString() === id)[0]

  let [taskInfo, setTaskInfo] = useState(task) // текущая задача
  let [messageComment, setMessageComment] = useState('') // текст нового сообщения
  let [messageError, setMessageError] = useState(false) // подстветка поля для комментрия
  let [isShowModal, setShowModal] = useState(false) // показ модального окна для удаления
  let [isConfirm, setConfirm] = useState(false) // показ модального окна для удаления
  let [createCard, setCreateCard] = useState({
    card: {
      id: taskInfo.id,
      type: taskInfo.type,
      name: taskInfo.name,
      dateCreated: '',
      author: taskInfo.author,
      format: '' /*format*/,
      url: '',
      preview: ''
    },
    id: '',
    name: ''
  }) // данные для новой карточки

  /* переменные для вывода: 
      - название статуса, 
      - доступные пользователи, 
      - формат допустимог контента, 
      - выводимая информация о задаче
  */
  const text = (!task) ? '' : (status.filter((item) => item.id === task.status.name))[0].text;
  const user = (!task) ? [] : [task.author, task.executor]
  const formats = (!task) ? [] : formatFile.find(item => item.id === taskInfo.type.name).format
  const info = (!task) ? [] : [
    { id: 'dateCreated', text: 'Задача создана', content: format(task.dateCreated) },
    { id: 'dateExpired', text: 'Cрок выполнения', content: format(task.dateExpired) },
    { id: 'author', text: 'Опубликовал', content: task.author.name },
    { id: 'executor', text: 'Ответственный', content: task.executor.name },
  ]

  function update(value: { name: string, preview: string, format: string }) {
    const ids = taskInfo.contents.reduce((acc, item) => {
      acc = (item.id > acc) ? item.id : acc
      return acc
    }, 0) + 1;

    const content = {
      id: ids,
      type: taskInfo.type,
      name: value.name,
      dateCreated: `${new Date().toISOString()}`,
      author: {
        id: props.user.id,
        name: props.user.name
      },
      format: value.format,
      url: '',
      preview: value.preview
    }

    setTaskInfo({ ...taskInfo, contents: [...taskInfo.contents, content] })
  }

  function selectFile(e: { target: HTMLInputElement }) {
    createImg(e, update)
  }

  function setComment() {
    if (messageComment.length) {
      const ids = taskInfo.comments.reduce((acc, item) => {
        acc = (item.id > acc) ? item.id : acc
        return acc
      }, 0) + 1;

      const comment = {
        id: ids,
        date: `${new Date().toISOString()}`,
        user: {
          id: props.user.id,
          name: props.user.name
        },
        message: messageComment
      }
      setTaskInfo({ ...taskInfo, comments: [comment, ...taskInfo.comments] })
      setMessageComment('')
    }
    else {
      setMessageError(true)
    }
  }

  function deleteContent(value: number) {
    setTaskInfo({ ...taskInfo, contents: taskInfo.contents.filter(item => item.id !== value) })
  }

  function showDeleteMessage() {
    setShowModal(true);
  }

  function deleteTask(answer: boolean) {
    (answer)
      ? setListTask(data.filter(item => item.id !== +id))
      : null
    setShowModal(false)
  }


  function selectContent(value: number) {
    (createCard.id === value.toString()
      ? setCreateCard({ ...createCard, id: '' })
      : setCreateCard({ ...createCard, id: value.toString() }))
  }


  return (
    (!task)
      ? <Redirect to='/error' />
      : (
        (!isConfirm)
          ? (
            < main className="main" >
              <div className="container">
                <Nav text='К списку задач' type='text'>
                  {(taskInfo.status.name === 'inWork' && props.user.role.name !== 'contentMaker')
                    ? (<div className="nav__button">
                      <ButtonTask type='edit' size='big' click={() => { history.push(`/task-new/${id}`) }} />
                      <ButtonTask type='delete' size='big' click={showDeleteMessage} />
                    </div>)
                    : (taskInfo.status.name === 'feedback' && props.user.role.name !== 'contentMaker')
                      ? (<div className="nav__button">
                        <Button type="confirm" text="Утвердить и опубликовать" click={() => { setConfirm(true) }} />
                        <ButtonTask type='edit' size='big' click={() => { history.push(`/task-new/${id}`) }} />
                        <ButtonTask type='delete' size='big' click={showDeleteMessage} />
                      </div>)
                      : null
                  }
                </Nav>

                <div className="content">
                  <section className="content__main">
                    <div className="card-task">
                      <div className="card-task__info">
                        <Type type={taskInfo.type.name} />
                        <p
                          className={`content__title card-task__status card-task__status_${taskInfo.status.name}`}>
                          {text}
                        </p>
                      </div>
                      <h2 className="card-task__title">{taskInfo.name}</h2>
                      <p className="card-task__description">{taskInfo?.description}</p>
                      <p className="label card-task__label">Файлы</p>


                    </div>
                    {(props.user.role.name === 'manager')
                      ? null
                      : (
                        <div className="task-data">
                          <div className="task-data__content-box">
                            <div className="task-data__title">
                              <h3>Результат</h3>
                              <p className="task-data__format-text">Допустимые форматы:</p>
                              {formats.map(item => {
                                return <FormatFile format={item} key={item} />
                              })}

                            </div>
                            <div className="task-data__content">
                              <div className="task-data__img-box">

                                {taskInfo.contents.map(item => {
                                  return <Content content={item} key={item.id} deleteContent={deleteContent} />
                                })}
                                {(taskInfo.status.name !== 'approved')
                                  ? (
                                    <div>
                                      <input id="file-input" name='content' type='file' className="file__input" onChange={e => selectFile(e)} accept={`.${formats.join(', .').toLocaleLowerCase()}`} />
                                      <label htmlFor="file-input" className="file__label">
                                        <Svg type="cross" classes="img-cross" />
                                      </label>
                                    </div>
                                  )
                                  : null
                                }

                              </div>
                            </div>
                          </div>

                          <div className="task-data__comment-box">
                            {(taskInfo.status.name !== 'approved')
                              ? (
                                <div className={`box-comment ${(messageError) ? 'box-comment_empty' : ''}`}>
                                  <textarea
                                    name="comment"
                                    className="box-comment__new-comment"
                                    placeholder="Введите сообщение..."
                                    value={messageComment}
                                    onChange={(e) => { setMessageComment(e.target.value) }}
                                    onClick={() => { (messageError) ? setMessageError(false) : null }}
                                  ></textarea>
                                  <button className="button box-comment__btn" onClick={setComment}>Отправить</button>
                                </div>
                              )
                              : null
                            }

                            <div className="box-list-comment">
                              {taskInfo.comments.map((item) => {
                                return <Comment comment={item} userId={props.user.id} key={item.id} users={user} />
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                  </section>
                  <aside className="content__aside">
                    {info.map(item => {
                      return (
                        <div className="task-info" key={item.id}>
                          <span className="task-info__tag"> {item.text} </span>
                          <div className="task-info__border"></div>
                          <time className="task-info__value"> {item.content} </time>
                        </div>
                      )
                    })}
                  </aside>
                </div>
              </div>
              {
                (isShowModal)
                  ? <ModalDelete selectedAnswer={deleteTask} text='задачу' />
                  : null
              }
            </main >
          )
          : (
            <main className="main">
              <div className="container">
                <Nav text="Выберите файл для публикации" type="title" click={() => { setConfirm(false) }} />
                <div className="content-confirm">
                  <div className="content-confirm__box-image">
                    {taskInfo.contents.map(item => {
                      return <Content content={item} selectContent={selectContent} id={+createCard.id} key={item.id} />
                    })}
                  </div>
                  <div className="content-confirm__name-image">
                    <Label text="Изменить название">
                      <Input placeholder="Укажите имя для файла" name="fileName" />
                    </Label>
                    <Button type="confirm" text="Утвердить и опубликовать" click={() => { }} />
                  </div>
                </div>
              </div>
            </main>
          )

      )
  )
}


