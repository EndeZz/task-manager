import React, { ReactElement, FC, useState } from 'react';
import styles from './InputCalendar.module.scss';
import Calendar from '../Calendar/Calendar';

export interface IinputCalendar {
    title: string;
    placeholder: string;
    width: number;
    error?: boolean;
}

const InputCalendar: FC<IinputCalendar> = ({ title, placeholder, width, error = false }): ReactElement => {
    const [inputState, setInputState] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [openCalendarState, setOpenCalendarState] = useState(false);

    function handleChangeInput(event: { target: { value: React.SetStateAction<string> } }) {
        return setInputState(event.target.value);
    }
    function handleChange(arg: string) {
        setInputState(arg);
    }
    function handleBlur(event: { target: { value: React.SetStateAction<string> } }) {
        if (error) {
            !inputState ? setErrorState(true) : setErrorState(false);
        }
        return setInputState(event.target.value);
    }
    function handleClick(arg: boolean) {
        if (arg) setOpenCalendarState(!openCalendarState);
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function handleOpen(e: any) {
        e.preventDefault();
        setOpenCalendarState(!openCalendarState);
    }
    return (
        <div className={styles.inputCalendar}>
            <h6 className={styles.inputCalendarTitle}>{title}</h6>
            <div className={styles.inputCalendarWrap}>
                <input placeholder={placeholder} style={{ width }} onChange={handleChangeInput} value={inputState} onBlur={handleBlur} className={`${errorState && styles.error}` + ' ' + styles.inputCalendarWrapInput + ' ' + styles.inputCalendarWrapInputHovered + ' ' + styles.inputCalendarWrapInputFocused} />
                <button onClick={(e) => handleOpen(e)} className={styles.inputCalendarWrapIcon}></button>
                {openCalendarState && <Calendar handleClick={handleClick} handleChange={handleChange} />}
            </div>
        </div>
    );
};

export default InputCalendar;
