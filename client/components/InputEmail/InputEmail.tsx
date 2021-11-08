import React, { ReactElement, FC, useState } from 'react';
import styles from './InputEmail.module.scss';

export interface IInputEmail {
    title: string;
    placeholder: string;
    width: number;
    emailValue: (str: string) => void;
    error?: boolean;
}

const InputEmail: FC<IInputEmail> = ({ emailValue, title, placeholder, width, error = false }): ReactElement => {
    const [inputState, setInputState] = useState('');
    const [errorState, setErrorState] = useState(false);

    function handleChange(event: { target: { value: string } }) {
        inputState === '' ? emailValue('') : emailValue(inputState);
        return setInputState(event.target.value);
    }
    function handleBlur(event: { target: { value: string } }) {
        if (error) {
            if (inputState === '') {
                setErrorState(true);
                emailValue('');
            } else {
                setErrorState(false);
                emailValue(event.target.value);
            }
        }
        return setInputState(inputState);
    }
    return (
        <div className={styles.inputBox}>
            <h6 className={styles.inputBoxTitle}>{title}</h6>
            <input type={'email'} placeholder={placeholder} required style={{ width }} onChange={(event) => handleChange(event)} value={inputState} onBlur={handleBlur} className={`${errorState && styles.error}` + ' ' + styles.inputBoxInput + ' ' + styles.inputBoxInputHovered + ' ' + styles.inputBoxInputFocused} />
        </div>
    );
};

export default InputEmail;
