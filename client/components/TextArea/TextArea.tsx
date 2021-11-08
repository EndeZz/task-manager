import React, { ReactElement, FC, useState } from 'react';
import styles from './TextArea.module.scss';

export interface ITextArea {
    title?: string;
    placeholder: string;
    width: number;
    height: number;
    error?: boolean;
}

const TextArea: FC<ITextArea> = ({ title, placeholder, width, height, error = false }: ITextArea): ReactElement => {
    const [textAreaState, setTextAreaState] = useState('');
    const [errorState, setErrorState] = useState(false);

    function handleChange(event: { target: { value: React.SetStateAction<string> } }) {
        return setTextAreaState(event.target.value);
    }
    function handleBlur(event: { target: { value: React.SetStateAction<string> } }) {
        if (error) {
            !textAreaState ? setErrorState(true) : setErrorState(false);
        }
        return setTextAreaState(event.target.value);
    }
    return (
        <div className={styles.textAreaBox}>
            <div className={styles.textAreaBoxTitle}>{title}</div>
            <textarea placeholder={placeholder} style={{ width, height }} onChange={handleChange} value={textAreaState} onBlur={handleBlur} className={`${errorState && styles.error}` + ' ' + styles.textAreaBoxTextArea + ' ' + styles.textAreaBoxTextAreaHovered + ' ' + styles.textAreaBoxTextAreaFocused} />
        </div>
    );
};

export default TextArea;
