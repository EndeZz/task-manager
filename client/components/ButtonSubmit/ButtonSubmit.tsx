import React, { ReactElement } from 'react';
import styles from './ButtonSubmit.module.scss';

interface IButtonSubmit {
    src: string;
    text: string;
    disabled?: boolean;
    handleSubmit: () => void;
}

const ButtonSubmit = ({ handleSubmit, disabled, src, text }: IButtonSubmit): ReactElement => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function onClick(e: any) {
        e.preventDefault();
        handleSubmit();
    }
    return (
        <button onClick={(e) => onClick(e)} disabled={disabled} className={styles.buttonDisabled + ' ' + styles.button + ' ' + styles.buttonHovered + ' ' + styles.buttonActived} type={'submit'}>
            <img src={src} className={styles.buttonImg} />
            <span className={styles.buttonText}>{text}</span>
        </button>
    );
};

export default ButtonSubmit;
