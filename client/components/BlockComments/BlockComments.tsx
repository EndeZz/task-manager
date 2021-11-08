import React, { ReactElement } from 'react';
import styles from './BlockComments.module.scss';

export interface IBlockComments {
    id: number;
    src: string;
    author: string;
    message: string;
    ['time-date']: string;
}

interface IProps {
    props: IBlockComments;
}

const BlockComments = ({ props }: IProps): ReactElement => {
    const obj = props;

    return (
        <li className={styles.commentBlock}>
            <img className={styles.commentBlockAvatar} src={obj.src} />
            <div className={styles.commentBlockTextBox}>
                <div className={styles.commentBlockBoxInfo}>
                    <span className={styles.commentBlockBoxInfoName}>{obj.author}</span>
                    <span className={styles.commentBlockBoxInfoTimeDate}>{obj['time-date']}</span>
                </div>
                <p className={styles.commentBlockBoxDescription}>{obj.message}</p>
            </div>
        </li>
    );
};

export default BlockComments;
