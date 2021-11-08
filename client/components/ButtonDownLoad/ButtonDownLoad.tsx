import React, { ReactElement } from 'react';
import styles from './ButtonDownLoad.module.scss';

const ButtonDownLoad = (): ReactElement => {
    return (
        <a className={styles.button + ' ' + styles.buttonHovered + ' ' + styles.buttonActived} download>
            <div className={styles.buttonImg} />
            <div className={styles.buttonText}>{'Скачать'}</div>
        </a>
    );
};

export default ButtonDownLoad;
