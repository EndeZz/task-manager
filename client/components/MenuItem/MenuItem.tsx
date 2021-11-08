import React, { FC, ReactElement, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MenuItem.module.scss';

export interface IMenu {
    text: string;
    href: string;
    location: string;
}

const MenuItem: FC<IMenu> = (props: IMenu): ReactElement => {
    const [activeState, setActiveState] = useState(false);
    const obj = props;
    useEffect(() => {
        const href = obj.href.split('/')[0];
        const location = obj.location.split('/')[1];
        if ('/' + location === '/' + href) setActiveState(true);
        return () => {
            setActiveState(false);
        };
    }, [obj.location]);
    return (
        <li className={styles.menuItem}>
            <NavLink to={obj.href} className={`${activeState && styles.menuItemLinkActived}` + ' ' + styles.menuItemLink + ' ' + styles.menuItemLinkHovered}>
                <span className={styles.menuItemLinkName}>{obj.text}</span>
            </NavLink>
        </li>
    );
};

export default MenuItem;
