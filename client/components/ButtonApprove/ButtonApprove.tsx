import React, { ReactElement } from 'react';
import styles from './ButtonApprove.module.scss';

interface IButtonApprove {
    text: string;
}

const ButtonApprove = ({ text }: IButtonApprove): ReactElement => {
    return (
        <button className={styles.button + ' ' + styles.buttonHovered + ' ' + styles.buttonActived}>
            <span className={styles.buttonText}>{text}</span>
        </button>
    );
};

export default ButtonApprove;
