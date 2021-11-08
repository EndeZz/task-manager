import ButtonBig from '../buttons/ButtonBig/ButtonBig';
import './photo.scss';

function Photo() {
  return (
    <div className="photo">
      <div className="photo__img">
        <img src="/public/icons/profile.svg" alt="Изображение профиля" />
      </div>
      <div className="photo__button">
        <ButtonBig type='upload' color='blue' text='Загрузить аватар'></ButtonBig>
      </div>
    </div>
  );
}

export default Photo;