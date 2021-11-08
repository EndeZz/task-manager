import React, { ReactElement } from 'react';
import styles from './NextFileForDowmloading.module.scss';

const NextFileForDowmloading = (): ReactElement => {
    return (
        <label className={styles.nextFile + ' ' + styles.nextFileHovered}>
            <div className={styles.nextFileImg} />
            <input className={styles.nextFileInput} type={'file'} accept={'video/avi, video/flv, video/mov'} />
        </label>
    );
};

export default NextFileForDowmloading;
