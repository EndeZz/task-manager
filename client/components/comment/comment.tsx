import React from 'react';
import Avatar from '../avatar/avatar';
import format from '../../utils/format';
import './comment.scss';
import { UserInterface } from '../../utils/interface';

interface Comment {
  id: number,
  date: string,
  user: {
    id: number
    name: string
  },
  message: string
}



export default function Comment(props: { comment: Comment, userId: number, users: UserInterface[] }) {
  const user = (props.users.find(item => item.id === props.comment.user.id))

  return (
    <div className="comment">
      <div className="comment__avatar">
        <Avatar url={(user) ? user.avatar : ''} size='small' />
      </div>
      <div className="comment__main-box">
        <div className="comment__info">
          <p className="content__title comment__author">{(props.userId === props.comment.user.id) ? 'Вы' : props.comment.user.name}</p>
          <time className="date-time comment__date">{format(props.comment.date, 'time')} {format(props.comment.date)}</time>
        </div>
        <p className="comment__text">{props.comment.message}</p>
      </div>
    </div>
  )
}
