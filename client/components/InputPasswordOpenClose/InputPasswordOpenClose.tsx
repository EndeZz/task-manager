import React, { ReactElement, FC, useState } from 'react';
import styles from './InputPasswordOpenClose.module.scss';

export interface IInputPasswordOpenClose {
    title: string;
    placeholder: string;
    width: number;
    error?: boolean;
}

const InputPasswordOpenClose: FC<IInputPasswordOpenClose> = ({ title, placeholder, width, error = false }): ReactElement => {
    const [inputState, setInputState] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [visibilityState, setVisibilityState] = useState(false);

    function handleShow() {
        return setVisibilityState(!visibilityState);
    }
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
            <div className={styles.inputBoxWrap}>
                {!visibilityState && <input type={'password'} required placeholder={placeholder} style={{ width }} onChange={handleChange} value={inputState} onBlur={handleBlur} className={`${errorState && styles.error}` + ' ' + styles.inputBoxWrapInput + ' ' + styles.inputBoxWrapInputHovered + ' ' + styles.inputBoxWrapInputFocused} />}
                {!visibilityState && <button onClick={handleShow} className={styles.inputBoxWrapButtonHidden}></button>}
                {visibilityState && <input type={'text'} required placeholder={placeholder} style={{ width }} onChange={handleChange} value={inputState} onBlur={handleBlur} className={`${errorState && styles.error}` + ' ' + styles.inputBoxWrapInput + ' ' + styles.inputBoxWrapInputHovered + ' ' + styles.inputBoxWrapInputFocused} />}
                {visibilityState && <button onClick={handleShow} className={styles.inputBoxWrapButtonVisibility}></button>}
            </div>
        </div>
    );
};

export default InputPasswordOpenClose;
