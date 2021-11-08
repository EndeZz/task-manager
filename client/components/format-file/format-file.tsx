import React from 'react';

import './format-file.scss';

export default function FormatFile(props: { format: string }) {
  return (
    <div className="format__box">
      <p className="format__type">{props.format}</p>
    </div>
  )
}



