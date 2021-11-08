import React, { ReactElement } from 'react';
import styles from './PublishContent.module.scss';

export interface IPublishContent {
    id: number;
    src: string;
    name: string;
    'time-date': string;
}

interface IPorps {
    props: IPublishContent;
}

const PublishContent = ({ props }: IPorps): ReactElement => {
    const obj = props;
    return (
        <li className={styles.publish + ' ' + styles.publishHovered}>
            <div className={styles.publishItemWrapperImg}>
                <img className={styles.publishItemImg} src={obj.src} />
            </div>
            <div className={styles.publishItemInfo}>{obj.name}</div>
            <div className={styles.publishItemTimeDate}>{obj['time-date']}</div>
        </li>
    );
};

export default PublishContent;
