import React from 'react';
import './StatusLabel.scss';

function fileSwitcher(type: 'work' | 'approve' | 'done') {
  let text = '';
  switch (type) {
    case 'work':
      text = 'В работе';
      break;
    case 'approve':
      text = 'Ожидает согласования';
      break;
    case 'done':
      text = 'Выполнено';
      break;
    default:
      return null;
  }

  return (
    <span className={`text__${type}`}>{text}</span>
  );
}

function StatusLabel(props: { type: 'work' | 'approve' | 'done' }) {
  return (
    <div className="status_label">
      {fileSwitcher(props.type)}
    </div>
  );
}

export default StatusLabel;
