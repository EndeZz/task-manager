import React, { ReactElement } from 'react';
import styles from './Nickname.module.scss';

const userName = 'Семен Щеглов';

const Nickname = (): ReactElement => {
    return (
        <div>
            <div className={styles.nickname}>{userName}</div>
        </div>
    );
};

export default Nickname;
