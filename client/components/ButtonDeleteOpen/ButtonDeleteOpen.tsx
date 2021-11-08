import React, { ReactElement } from 'react';
import styles from './ButtonDeleteOpen.module.scss';

export interface IButtonDeleteOpen {
    text: string;
}

const ButtonDeleteOpen = ({ text }: IButtonDeleteOpen): ReactElement => {
    return (
        <button className={styles.button + ' ' + styles.buttonHovered + ' ' + styles.buttonActived} type="reset">
            <span className={styles.buttonText}>{text}</span>
        </button>
    );
};

export default ButtonDeleteOpen;
