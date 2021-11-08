import React, { useState } from "react";

import MediaButton from "../media-button/media-button";
import format from '../../utils/format';
import { CardInterface } from "../../utils/interface";
import './content.scss';

export default function Content(props: { content: CardInterface, deleteContent?: Function, selectContent?: Function, id?: number }): JSX.Element {

  function deleteContent(id: number) {
    props.deleteContent(id)
  }

  function selectContent() {
    props.selectContent(props.content.id)
  }

  return (
    < div
      className={`content__big-container ${(props?.deleteContent)
        ? ""
        : (props.content.id === props.id)
          ? "content__big-container_active"
          : ""
        } 
      `}
      onClick={selectContent}
      key={props.content.id} >
      {
        (props?.deleteContent)
          ? <MediaButton type='cross' classes={"content__img-button"} click={() => deleteContent(props.content.id)} />
          : null
      }
      <div className={`content__container ${(props?.deleteContent) ? "" : "content__container_confirm"} `}>
        <img src={props.content.preview} alt="текст" className="content__img" />
      </div>

      <div className={` ${(props?.deleteContent) ? "content__info" : "content__info-confirm"} `}>
        <span className="content__date-created date-time">{`${format(props.content.dateCreated, 'time')}, ${format(props.content.dateCreated)} `}</span>
        <span className="content__name">{props.content.name}</span>
      </div>
    </div >
  )
}
