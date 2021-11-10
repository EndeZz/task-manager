import React, { ReactElement } from 'react';
import styles from './ButtonEdit.module.scss';

interface ISizeButtonEdit {
    size?: 'small';
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    link?: any;
}

const ButtonEdit = ({ link, size }: ISizeButtonEdit): ReactElement => {
    return (
        <div>
            {size === 'small' && <a href={link} className={styles.buttonEditSmall + ' ' + styles.buttonEditSmallHovered + ' ' + styles.buttonEditSmallActived}></a>}
            {size !== 'small' && <a href={link} className={styles.buttonEdit + ' ' + styles.buttonEditHovered + ' ' + styles.buttonEditActived}></a>}
        </div>
    );
};

export default ButtonEdit;
