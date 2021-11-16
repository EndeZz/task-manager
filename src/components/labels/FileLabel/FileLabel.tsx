import React, { Fragment } from 'react';
import './FileLabel.scss';

function fileSwitcher(type: 'video' | 'audio' | 'photo') {
  let formats: Array<string> = [];
  switch (type) {
    case 'video':
      formats = ['avi', 'flv', 'mov'];
      break;
    case 'photo':
      formats = ['gif', 'jpg', 'png'];
      break;
    case 'audio':
      formats = ['mp3'];
      break;
    default:
      return null;
  }

  const fortmatsList = formats.map((format) => (
    <div className="file_label__text" key={format}>
      <span>{format}</span>
    </div>
  ));

  return (
    <Fragment>
      {fortmatsList}
    </Fragment>
  );
}

function FileLabel(props: { type: 'video' | 'audio' | 'photo' }) {
  return (
    <div className="status_label">
      {fileSwitcher(props.type)}
    </div>
  );
}

export default FileLabel;
