import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ButtonEdit.module.scss';

interface ISizeButtonEdit {
    size?: 'small';
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    link?: any;
}

const ButtonEdit = ({ link, size }: ISizeButtonEdit): ReactElement => {
    return (
        <div>
            {size === 'small' && <NavLink to={link} className={styles.buttonEditSmall + ' ' + styles.buttonEditSmallHovered + ' ' + styles.buttonEditSmallActived}></NavLink>}
            {size !== 'small' && <NavLink to={link} className={styles.buttonEdit + ' ' + styles.buttonEditHovered + ' ' + styles.buttonEditActived}></NavLink>}
        </div>
    );
};

export default ButtonEdit;
