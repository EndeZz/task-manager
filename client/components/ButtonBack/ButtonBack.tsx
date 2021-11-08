import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './ButtonBack.module.scss';

export interface IButtonBack {
    size?: 'small';
    text: string;
}

const ButtonBack = (props: IButtonBack): ReactElement => {
    const history = useHistory();
    const obj = props;
    return (
        <button onClick={() => history.goBack()} className={styles.buttonBack + ' ' + styles.buttonBackHovered}>
            <span className={obj.size === 'small' ? styles.buttonBackTextSmall : styles.buttonBackText}>{obj.text}</span>
        </button>
    );
};

export default ButtonBack;
