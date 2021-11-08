import React, { ReactElement, FC, useState } from 'react';
import styles from './InputSearch.module.scss';

const InputSearch: FC = (): ReactElement => {
    const [inputState, setInputState] = useState('');

    function clearInput(value: React.SetStateAction<string>) {
        return setInputState(value);
    }
    function handleChange(event: { target: { value: React.SetStateAction<string> } }) {
        return setInputState(event.target.value);
    }
    function handleBlur(event: { target: { value: React.SetStateAction<string> } }) {
        return setInputState(event.target.value);
    }

    return (
        <div className={styles.search}>
            <h6 className={styles.searchTitle}>{'Поиск'}</h6>
            <div className={styles.searchWrap}>
                <input onChange={handleChange} value={inputState} onBlur={handleBlur} className={styles.searchWrapInput + ' ' + styles.searchWrapInputHovered + ' ' + styles.searchWrapInputFocused} type="search" placeholder="Введите название имя исполнителя" />
                <button className={styles.searchWrapButtonSubmit} />
                <button onClick={() => clearInput('')} className={styles.searchWrapButtonCross + ' ' + styles.searchWrapButtonCrossHovered} type="button" />
            </div>
        </div>
    );
};

export default InputSearch;
