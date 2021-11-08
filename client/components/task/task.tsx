import React from 'react';

import Type from '../type/type';
import Svg from '../svg/svg';
import ButtonTask from '../button-task/button-task';
import { TasksInterface } from '../../utils/interface';

import { status } from '../../utils/vars';

import data from '../../../server/TaskListResponseDto.json';
import './task.scss';
import format from '../../utils/format';
import { Link } from 'react-router-dom';

export default function Task(props: { task: TasksInterface, delete: Function, edit: Function }) {
  const text = (status.filter((item) => item.id === props.task.status.name))[0].text;
  return (
    <li className='content-tasks__item task'>
      <div className='task__box task__box_first'>
        <Type type={props.task.type.name} />
        <Link to={`/task/${props.task.id}`} className="task__link task__title content__title">
          {props.task.name}
        </Link>
      </div>
      <div className='task__box task__box_second'>
        <span className="task__author">{props.task.executor.name}</span>
        <div className='task__date'>
          <Svg file='input-sprite' type='calendar' classes='task__date-img' />
          <span className='date-time'>{format(props.task.dateExpired)}</span>
        </div>
      </div>
      <div className='task__box task__box_three'>
        <span className={`task__status task__status_${props.task.status.name}`}>{text}</span>
        {(props.task.status.name !== 'approved') ?
          <div className='task__button'>
            <ButtonTask type='edit' size='small' click={props.edit} />
            <ButtonTask type='delete' size='small' click={props.delete} />
          </div>
          : ''}
      </div>
    </li >
  )
}
