import React, { ReactElement, FC, useState } from 'react';
import styles from './InputPassword.module.scss';

export interface IInputPassword {
    title: string;
    placeholder: string;
    width: number;
    passwordValue: (str: string) => void;
    error?: boolean;
}

const InputPassword: FC<IInputPassword> = ({ passwordValue, title, placeholder, width, error = false }): ReactElement => {
    const [inputState, setInputState] = useState('');
    const [errorState, setErrorState] = useState(false);

    function handleChange(event: { target: { value: string } }) {
        inputState === '' ? passwordValue('') : passwordValue(event.target.value);
        return setInputState(event.target.value);
    }
    function handleBlur(event: { target: { value: string } }) {
        if (error) {
            if (inputState === '') {
                setErrorState(true);
                passwordValue('');
            } else {
                setErrorState(false);
                passwordValue(inputState);
            }
        }
        return setInputState(event.target.value);
    }
    return (
        <div className={styles.inputBox}>
            <h6 className={styles.inputBoxTitle}>{title}</h6>
            <input type={'password'} required placeholder={placeholder} style={{ width }} onChange={(event) => handleChange(event)} value={inputState} onBlur={handleBlur} className={`${errorState && styles.error}` + ' ' + styles.inputBoxInput + ' ' + styles.inputBoxInputHovered + ' ' + styles.inputBoxInputFocused} />
        </div>
    );
};

export default InputPassword;
