import React, { ReactElement, useState } from 'react';
import styles from './ButtonUserRole.module.scss';

interface IButtonUserRole {
    text: string;
    onClick: (str: string) => void;
}

const ButtonUserRole = ({ onClick, text }: IButtonUserRole): ReactElement => {
    const [clickState, setClickState] = useState(false);

    function handleClick(): void {
        onClick(text);
        setClickState(!clickState);
    }
    return (
        <label className={styles.button + ' ' + styles.buttonHovered + ' ' + `${clickState && styles.buttonActived}`}>
            <input onClick={handleClick} className={styles.checkbox} type={'radio'} value={text} />
            <span className={styles.buttonText}>{text}</span>
        </label>
    );
};

export default ButtonUserRole;
