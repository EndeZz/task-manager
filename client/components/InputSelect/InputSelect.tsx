import React, { ReactElement, FC, useState } from 'react';
import Select, { ISelect } from '../Select/Select';
import styles from './InputSelect.module.scss';

export interface IInputSelect {
    title: string;
    placeholder: string;
    width: number;
    object: Array<ISelect>;
    error?: boolean;
}

const InputSelect: FC<IInputSelect> = ({ object, title, placeholder, width, error = false }): ReactElement => {
    const [inputState, setInputState] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [activeState, setActiveState] = useState(false);

    function handleChange(str: string) {
        return setInputState(str);
    }
    function handleBlur() {
        if (error) {
            !inputState && !activeState ? setErrorState(true) : setErrorState(false);
        }
    }
    function handleClick(arg: boolean) {
        if (arg) setActiveState(!activeState);
        if (error) {
            if (inputState === '' && activeState) {
                setErrorState(true);
            } else {
                setErrorState(false);
            }
        }
    }
    return (
        <div className={styles.inputSelect}>
            <h6 className={styles.inputSelectTitle}>{title}</h6>
            <div onClick={() => setActiveState(!activeState)} className={`${activeState && styles.inputSelectWrapActived}` + ' ' + styles.inputSelectWrap}>
                <input readOnly placeholder={placeholder} onBlur={handleBlur} style={{ width }} value={inputState} className={`${errorState && styles.error}` + ' ' + styles.inputSelectWrapInput + ' ' + styles.inputSelectWrapInputHovered + ' ' + `${activeState && styles.inputSelectWrapInputActived}`} />
                <div className={styles.inputSelectWrapIcon}></div>
                {activeState && <Select handleClick={handleClick} handleChange={handleChange} object={object} width={width} />}
            </div>
        </div>
    );
};

export default InputSelect;
