import React, { ReactElement, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import InputEmail from '../../components/InputEmail/InputEmail';
import InputPassword from '../../components/InputPassword/InputPassword';
import styles from './Auth.module.scss';

const Auth = (): ReactElement => {
    const [inputPasswordState, setInputPasswordState] = useState('');
    const [inputEmailState, setInputEmailState] = useState('');
    const [activeButtonState, setActiveButtonState] = useState(true);

    const state = useSelector((state) => state.user);

    console.log(`state`, state);

    useEffect(() => {
        document.title = 'Авторизация';

        if (!inputEmailState || !inputPasswordState) setActiveButtonState(true);
        if (inputEmailState && inputPasswordState) setActiveButtonState(false);
    }, [inputEmailState, inputPasswordState]);

    function emailValue(str: string) {
        return setInputEmailState(str);
    }
    function passwordValue(str: string) {
        return setInputPasswordState(str);
    }

    function handleSubmit() {
        if (inputEmailState && inputPasswordState) {
            location.pathname = '/mainpage'; //for testing
        }
    }

    return (
        <div className={styles.modal}>
            <form className={styles.modalContainer}>
                <img className={styles.modalImg} src={'/public/images/header/logo.svg'} alt={'Логотип сайта'} />
                <div className={styles.modalPanel}>
                    <h1 className={styles.modalTitle}>{'Вход'}</h1>
                    <InputEmail emailValue={emailValue} placeholder={'Введите e-mail'} title={'E-mail'} error={true} width={334} />
                    <InputPassword passwordValue={passwordValue} placeholder={'Введите пароль'} title={'Пароль'} error={true} width={334} />
                    <ButtonSubmit handleSubmit={handleSubmit} disabled={activeButtonState} text={'Войти'} src={'/public/images/UI_Kit/buttons/lock.svg'} />
                </div>
            </form>
        </div>
    );
};

export default Auth;
