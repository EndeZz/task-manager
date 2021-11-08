import React, { ReactElement } from 'react';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import Nickname from '../Nickname/Nickname';
import BellNotifications from '../BellNotifications/BellNotifications';
import MenuItem from '../MenuItem/MenuItem';
import styles from './Header.module.scss';
import { useLocation } from 'react-router';

const Header = (): ReactElement => {
    const location = useLocation();
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <nav className={styles.headerMenuWrap}>
                    <img className={styles.headerLogo} src="/public/images/header/logo.svg" alt="Логотип сайта" />
                    <ul>
                        <MenuItem location={location.pathname} href={'mainpage'} text={'Главная'} />
                        <MenuItem location={location.pathname} href={'tasks'} text={'Задачи'} />
                        <MenuItem location={location.pathname} href={'users'} text={'Пользователи'} />
                    </ul>
                </nav>
                <div className={styles.headerUserblock}>
                    <BellNotifications />
                    <Nickname />
                    <ProfileMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;
