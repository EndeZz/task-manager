import React from 'react';

import Button from '../button-with-text/button-with-text';
import Svg from '../svg/svg';
import formatSize from '../../utils/size';
import './files.scss';

export default function Files(props: { file: { id: number, name: string, format: string, dateCreated: string, url: string }, type: 'loaded' | 'download' }) {

  if (props.type === 'loaded') {


    return (
      <div className="file-select">
        <div className="file__info">
          <Svg file="doctype-sprite" type={props.file.format} classes="file__type" />
          <span className="file__name">{props.file.name}</span>
          <span className="file__size">{'??? Кб'}</span>
        </div>
        <Button type="delete-file" text="Удалить" img="delete" />
      </div>
    )
  }

  if (props.type === 'download') {

  }
}
