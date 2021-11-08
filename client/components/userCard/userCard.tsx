import React from "react";

import Avatar from "../avatar/avatar";
import ButtonTask from "../button-task/button-task";
import { UserInterface } from '../../utils/interface';
import { role } from '../../utils/vars';

import './userCard.scss';

export default function UserCard(props: { user: UserInterface, delete: Function, edit: Function }) {
  const text = (role.filter((item) => item.id === props.user.role.name))[0].text;
  return (
    <li className="content-users__item user-box">
      <div className="user-box__info ">
        <div className="user-box__avatar">
          <Avatar url={props.user.avatar} size="small" />
        </div>
        <p className="content__title user-box__name ">{props.user.name}</p>
        <p className="user-box__email">{props.user.email}</p>
        <p className="user-box__role">{text}</p>
      </div>
      <div className="user-box__btn ">
        <ButtonTask type="edit" size="small" click={props.edit} />
        <ButtonTask type="delete" size="small" click={props.delete} />
      </div>
    </li>
  )
}
