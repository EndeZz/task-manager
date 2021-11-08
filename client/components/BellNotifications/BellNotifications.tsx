import React, { FC, ReactElement, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './BellNotifications.module.scss';

const BellNotifications: FC = (): ReactElement => {
    const location = useLocation();
    const [arrNotificationsState, setArrNotificationsState] = useState([]);

    useEffect(() => {
        async function getData(url: string): Promise<void> {
            try {
                const response = await fetch('http://localhost:3000' + url);
                setArrNotificationsState(await response.json());
            } catch (error) {
                console.error(error);
            }
        }
        getData('/block-notifications');
    }, []);

    function showCountNotification(): number {
        return arrNotificationsState.length ? arrNotificationsState.length : 0;
    }

    function hideCountNotifications(validator: number) {
        if (location.pathname === '/notifications') validator = 0;

        return !validator ? styles.bellNotificationsCountHidden : '';
    }

    return (
        <div className={`${location.pathname === '/notifications' && styles.empty}` + ' ' + styles.bellNotifications + ' ' + styles.bellNotificationsHovered}>
            <NavLink className={styles.bellNotificationsLink} to={'/notifications'}>
                <img className={styles.bellNotificationsImg} src={'/public/images/UI_Kit/buttons/bell-icon.svg'} alt={'Изображение колокольчика уведомлений'} />
                <div className={styles.bellNotificationsCount + ' ' + hideCountNotifications(showCountNotification())} aria-roledescription={'Количество уведомлений'}>
                    {showCountNotification()}
                </div>
            </NavLink>
        </div>
    );
};

export default BellNotifications;
