import ButtonBig from '../../components/buttons/ButtonBig/ButtonBig';
import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import Header from '../../components/header/header';
import InputComponent from '../../components/input/InputComponent/InputComponent';
import Photo from '../../components/photo/Photo';
import './profile.scss';

function Profile() {
  return (
    <div>
      <Header></Header>
        <div className="account__information">
          <Photo></Photo>
          <div className="account__information__inputs">
            <InputComponent type='text' label='Имя, фамилия' placeholder='Введите имя и фамилию' id='user'></InputComponent>
            <InputComponent type='text' label='E-mail' placeholder='Введите e-mail' id='email'></InputComponent>
              <div className="account__information__inputs__buttons">
                <ButtonMain type="save" color="blue" text="Сохранить"></ButtonMain>
                <ButtonBig type="delete" color="red" text="Удалить профиль"></ButtonBig>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Profile;
