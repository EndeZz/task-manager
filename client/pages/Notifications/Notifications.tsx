import React, { ReactElement, useEffect, useState } from 'react';
import BlockNotifications from '../../components/BlockNotifications/BlockNotifications';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import styles from './Notifications.module.scss';

const Notifications = (): ReactElement => {
    const [arrBlockNotificationsState, setArrBlockNotificationsState] = useState([]);
    const [statusReadState, setStatusReadState] = useState(false);
    useEffect(() => {
        document.title = 'Уведомления';
    }, []);
    useEffect(() => {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        async function getData(url: string, collback: any): Promise<void> {
            try {
                const response = await fetch('http://localhost:3000' + url);
                collback(await response.json());
            } catch (error) {
                console.error(error);
            }
        }
        getData('/block-notifications', setArrBlockNotificationsState);
    }, [statusReadState]);
    function handleChangeStatusRead() {
        setStatusReadState(!statusReadState);
    }

    return (
        <main className={styles.notifications}>
            <div className={styles.notificationsContent + ' ' + styles.notificationsContentNotifications}>
                <div className={styles.notificationsWrapperButtonBack}>
                    <ButtonBack text={'Уведомления'} />
                </div>
                <ul className={styles.notificationsWrapBlockComment}>
                    {arrBlockNotificationsState.map((item) => item['status-read'] === 'read' && <BlockNotifications key={item['id']} handleChangeStatusRead={handleChangeStatusRead} props={item} />)}
                    {arrBlockNotificationsState.map((item) => item['status-read'] === 'no-read' && <BlockNotifications key={item['id']} handleChangeStatusRead={handleChangeStatusRead} props={item} />)}
                </ul>
            </div>
        </main>
    );
};

export default Notifications;
