import React, { ReactElement } from 'react';
import styles from './ButtonDownloadAvatar.module.scss';

const ButtonDownloadAvatar = (): ReactElement => {
    return (
        <label className={styles.avatarButton + ' ' + styles.avatarButtonHovered + ' ' + styles.avatarButtonActived}>
            <span className={styles.avatarButtonText}>{'Загрузить аватар'}</span>
            <input className={styles.avatarButtonInput} type={'file'} accept={'image/*'} />
        </label>
    );
};

export default ButtonDownloadAvatar;
