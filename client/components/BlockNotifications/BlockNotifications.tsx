import React, { ReactElement, useEffect, useState } from 'react';
import styles from './BlockNotifications.module.scss';

export interface IBlockNotifications {
    id: number;
    'type-notifications': string;
    text_1: string;
    text_2: string;
    text_3: string;
    'time-date': string;
    'status-read': 'no-read' | 'read';
}

interface IProps {
    props: IBlockNotifications;
    handleChangeStatusRead: () => void;
}

const BlockNotifications = ({ handleChangeStatusRead, props }: IProps): ReactElement => {
    const obj = props;
    const [statusState, setStatusState] = useState('no-read');

    useEffect(() => {
        async function changeData(url: string, data: string | unknown): Promise<void> {
            try {
                const response = await fetch('http://localhost:3000' + url, {
                    method: 'PATCH',
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' },
                });
                return await response.json();
            } catch (error) {
                console.error(error);
            }
        }
        if (statusState === 'read') {
            changeData('/block-notifications/' + obj.id, {
                'status-read': 'read',
            });
        }
    }, [statusState]);

    function handleClick() {
        setStatusState('read');
        handleChangeStatusRead();
    }

    return (
        <div onClick={handleClick} className={styles.blockNotifications + ' ' + styles.blockNotificationsHovered}>
            <div className={styles.blockNotificationsBoxImg + ' ' + styles[`${obj['type-notifications']}`]}>
                <div className={`${statusState === 'read' || (obj['status-read'] === 'read' && styles.markerRead)}` + ' ' + styles.blockNotificationsCyrcle} />
            </div>
            <div className={styles.blockNotificationsWrap}>
                <div className={styles.blockNotificationsText}>
                    <span className={styles.blockNotificationsText_1}>{obj.text_1}</span>
                    <span className={styles.blockNotificationsText_2}>{obj.text_2}</span>
                    <span className={styles.blockNotificationsText_3}>{obj.text_3}</span>
                </div>
                <span className={styles.blockNotificationsDateTime}>{obj['time-date']}</span>
            </div>
        </div>
    );
};

export default BlockNotifications;
