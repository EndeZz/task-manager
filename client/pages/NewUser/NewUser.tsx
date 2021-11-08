import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import ButtonDeleteOpen from '../../components/ButtonDeleteOpen/ButtonDeleteOpen';
import ButtonDownloadAvatar from '../../components/ButtonDownloadAvatar/ButtonDownloadAvatar';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import { ROLE } from '../../components/data_base';
import Input from '../../components/Input/Input';
import InputEmail from '../../components/InputEmail/InputEmail';
import InputPasswordOpenClose from '../../components/InputPasswordOpenClose/InputPasswordOpenClose';
import InputSelect from '../../components/InputSelect/InputSelect';
import styles from './NewUser.module.scss';

const NewUser = (): ReactElement => {
    useEffect(() => {
        document.title = 'Новый пользователь';
    }, []);
    const newuserlink = useParams();
    console.log(`newuserlink`, newuserlink);
    const formValid = false;
    return (
        <main className={styles.newUser}>
            <div className={styles.newUserContent}>
                <div className={styles.newUserWrapperButtonBack}>
                    <ButtonBack text={'Пользователь'} />
                </div>
                <form className={styles.newUserWindowRegistration}>
                    <div className={styles.newUserLeftCollumn}>
                        <div className={styles.newUserAvatar} />
                        <ButtonDownloadAvatar />
                    </div>
                    <div className={styles.newUserRightCollumn}>
                        <div className={styles.newUserWrapForm}>
                            <Input title={'Имя, фамилия'} width={529} placeholder={'Введите имя и фамилию'} error={true} />
                            <InputEmail title={'E-mail'} width={529} placeholder={'Введите e-mail'} error={true} />
                            <InputSelect object={ROLE} title={'Роль'} width={529} placeholder={'Выберите роль'} error={true} />
                            <InputPasswordOpenClose title={'Пароль'} width={529} placeholder={'Введите пароль'} error={true} />
                        </div>
                        <div className={styles.newUserErrorWrap}>
                            <span className={styles.newUserErrorText}>{'Заполните отмеченные поля'}</span>
                        </div>
                        <div className={styles.newUserButtonsWrap}>
                            <ButtonSubmit src={'/public/images/UI_Kit/buttons/approve-blue.svg'} text={'Сохранить'} />
                            {formValid && <ButtonDeleteOpen text={'Удалить профиль'} />}
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default NewUser;

//function validPassword(element: HTMLInputElement): boolean {
//    const regTemplate = /(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
//    return regTemplate.test((element as HTMLInputElement).value);
//}
