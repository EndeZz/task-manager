import ButtonMain from '../../components/buttons/buttonMain/buttonMain';
import InputComponent from '../../components/input/InputComponent/InputComponent';
import './auth.scss';

function AuthComponent() {
  return (
    <section className="auth">
      <img className="auth__logo" src="/public/icons/logo.svg" alt="логотип" />
      <div className="auth__form">
        <h1 className="auth__form__h1">Вход</h1>
        <InputComponent type="text" label="Email" placeholder='Введите email' id='email'></InputComponent>
        <InputComponent type="text" label="Пароль" placeholder='Введите пароль' id='password'></InputComponent>
        <ButtonMain type="login" color="blue" text="Войти"></ButtonMain>
      </div>
    </section>
  );
}

export default AuthComponent;
