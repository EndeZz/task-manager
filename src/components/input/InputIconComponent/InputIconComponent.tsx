import InputLabelPattern from '../InputLabelPattern/InputLabelPattern';
import InputPattern from '../InputPattern/InputPattern';
import '../input.scss';

function InputIconComponent(props: { label: string, placeholder: string, type: 'text' | 'date', id: string }) {
  return (
    <div className="form">
      <InputLabelPattern label={props.label} id={props.id}></InputLabelPattern>
      <div className="form__wrapper">
        <InputPattern placeholder={props.placeholder} type={props.type} id={props.id}></InputPattern>
        <img src={`/public/icons/${props.id}.svg`} alt={props.id} />
      </div>
    </div>
  );
}

export default InputIconComponent;
