import React, { ReactElement, FC, useState } from 'react';
import styles from './Input.module.scss';

export interface IInput {
    title: string;
    placeholder: string;
    width: number;
    type?: string;
    error?: boolean;
}

const Input: FC<IInput> = ({ type = 'text', title, placeholder, width, error = false }): ReactElement => {
    const [inputState, setInputState] = useState('');
    const [errorState, setErrorState] = useState(false);

    function handleChange(event: { target: { value: React.SetStateAction<string> } }) {
        return setInputState(event.target.value);
    }
    function handleBlur(event: { target: { value: React.SetStateAction<string> } }) {
        if (error) {
            !inputState ? setErrorState(true) : setErrorState(false);
        }
        return setInputState(event.target.value);
    }
    return (
        <div className={styles.inputBox}>
            <h6 className={styles.inputBoxTitle}>{title}</h6>
            <input type={type} placeholder={placeholder} style={{ width }} onChange={handleChange} value={inputState} onBlur={handleBlur} className={`${errorState && styles.error}` + ' ' + styles.inputBoxInput + ' ' + styles.inputBoxInputHovered + ' ' + styles.inputBoxInputFocused} />
        </div>
    );
};

export default Input;
