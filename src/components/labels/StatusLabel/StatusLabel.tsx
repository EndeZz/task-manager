import './StatusLabel.scss';

function StatusLabel(props: { type: 'work' | 'approve' | 'done' }) {
  return (
    <div className="status_label">
      {(() => {
        switch (props.type) {
          case 'work':
            return (
              <span className={`text__${props.type}`}>В работе</span>
            )
          case 'approve':
            return (
              <span className={`text__${props.type}`}>Ожидает согласования</span>
            )
          case 'done':
            return (
              <span className={`text__${props.type}`}>Выполнено</span>
            )
          }  
      })()}
    </div>
  );
}

export default StatusLabel;
