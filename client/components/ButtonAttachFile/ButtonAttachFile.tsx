import React, { ReactElement } from 'react';
import styles from './ButtonAttachFile.module.scss';

const ButtonAttachFile = (): ReactElement => {
    return (
        <label className={styles.button + ' ' + styles.buttonHovered + ' ' + styles.buttonActived}>
            <span className={styles.buttonText}>{'Прикрепить файл'}</span>
            <input className={styles.buttonInput} type={'file'} />
        </label>
    );
};

export default ButtonAttachFile;
