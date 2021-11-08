import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ButtonAdd.module.scss';

interface IButtonAdd {
    text: string;
    path: string;
}

const ButtonAdd = ({ text, path }: IButtonAdd): ReactElement => {
    return (
        <NavLink className={styles.buttonTaskActived + ' ' + styles.buttonTask + ' ' + styles.buttonTaskHovered} to={path}>
            <span className={styles.buttonTaskText}>{text}</span>
        </NavLink>
    );
};
export default ButtonAdd;
