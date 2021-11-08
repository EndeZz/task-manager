import React from "react";

import MediaButton from "../media-button/media-button";
import { useHistory } from 'react-router-dom';
import './nav.scss';

export default function Nav(props: { text: string, type: 'text' | 'title', children?: JSX.Element, click?: Function }) {
  const history = useHistory()

  function backButton() {
    (props?.click)
      ? props.click()
      : history.goBack()
  }

  return (
    <div className="nav">
      <div className='nav__back'>
        <MediaButton type="back" click={backButton} />
        {(props?.type === 'title')
          ? <h1 className="nav__title"> {props.text} </h1>
          : <p className="nav__text"> {props.text} </p>
        }
      </div>
      <div className="nav__button">
        {(props?.children)
          ? props.children
          : null
        }
      </div>

    </div>
  )
}
