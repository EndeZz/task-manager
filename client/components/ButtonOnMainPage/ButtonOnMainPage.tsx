import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ButtonOnMainPage.module.scss';

const ButtonOnMainPage = (): ReactElement => {
    return (
        <NavLink className={styles.buttonActived + ' ' + styles.button + ' ' + styles.buttonHovered} to={'/mainpage'}>
            <span className={styles.buttonText}>{'На главную'}</span>
        </NavLink>
    );
};
export default ButtonOnMainPage;
