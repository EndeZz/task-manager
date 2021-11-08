import '../buttons.scss';

function ButtonMini(props: { type: string, color: 'blue' | 'clear' | 'lightblue' }) {
  return (
    <button className={`button button__mini button__mini_${props.color}`}>
      <svg className="button__icon">
        <use xlinkHref={`/public/icons/icons.svg#${props.type}`}/>
      </svg>
    </button>
  );
}

export default ButtonMini;
