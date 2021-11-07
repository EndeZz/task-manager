import '../buttons.scss';

function ButtonDropdown(props: { type: 'video' | 'audio' | 'photo', text: string }) {
  return (
    <button className={`button button__content button__content_${props.type}`}>
      <svg className="button__icon">
        <use xlinkHref={`/public/icons/icons.svg#${props.type}`}/>
      </svg>
      <span className="button__text">{props.text}</span>
    </button>
  );
}

export default ButtonDropdown;
