import ButtonMini from '../buttons/ButtonMini/ButtonMini';
import './userCard.scss';

function UserCard(props: { photo: string, name: string, email: string, role: "Администратор" | "Контент-мейкер" | "Менеджер" }) {
  return (
    <div className="user_card">
      <div className="user_card__info">
        <img src={`/public/profile/${props.photo}.png`} alt="Фото профиля" />
        <span className="user_card__info__name">{props.name}</span>
        <span className="user_card__info__email">{props.email}</span>
        <span className="user_card__info__role">{props.role}</span>
      </div>
      <div className="user_card__buttons">
        <ButtonMini type="edit" color="lightblue"></ButtonMini>
        <ButtonMini type="delete" color="lightblue"></ButtonMini>
      </div>
    </div>
  );
}

export default UserCard;
