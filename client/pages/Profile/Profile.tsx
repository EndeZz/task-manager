import React, { ReactElement, useEffect } from 'react';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import ButtonDeleteOpen from '../../components/ButtonDeleteOpen/ButtonDeleteOpen';
import ButtonDownloadAvatar from '../../components/ButtonDownloadAvatar/ButtonDownloadAvatar';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import Input from '../../components/Input/Input';
import InputEmail from '../../components/InputEmail/InputEmail';
import styles from './Profile.module.scss';

const Profile = (): ReactElement => {
    useEffect(() => {
        document.title = 'Профиль';
    }, []);
    return (
        <main className={styles.profile}>
            <div className={styles.profileContent}>
                <div className={styles.profileWrapperButtonBack}>
                    <ButtonBack text={'Профиль'} />
                </div>
                <form className={styles.profileWindowRegistration}>
                    <div className={styles.profileLeftCollumn}>
                        <div className={styles.profileAvatar} />
                        <ButtonDownloadAvatar />
                    </div>
                    <div className={styles.profileRightCollumn}>
                        <div className={styles.profileWrapForm}>
                            <Input title={'Имя, фамилия'} width={529} placeholder={'Введите имя и фамилию'} />
                            <InputEmail title={'E-mail'} width={529} placeholder={'Введите e-mail'} />
                        </div>
                        <div className={styles.profileWrapButtons}>
                            <ButtonSubmit src={'/public/images/UI_Kit/buttons/approve-blue.svg'} text={'Сохранить'} />
                            <ButtonDeleteOpen text={'Удалить профиль'} />
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default Profile;
