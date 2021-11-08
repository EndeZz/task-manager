import React, { ReactElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ProfileMenu.module.scss';

const ProfileMenu = (): ReactElement => {
    const [openMenuState, setOpenMenuState] = useState(false);
    const AUTH_USER = true;
    const avatar = '/public/images/header/semen-sheglov.png';
    function handleOpenMenu() {
        setOpenMenuState(!openMenuState);
    }
    function handleMouseLeave() {
        setOpenMenuState(!openMenuState);
    }
    return (
        <div>
            <button onClick={handleOpenMenu} className={styles.profile} type={'button'}>
                <div className={`${openMenuState && styles.profilePhotoActived}` + ' ' + styles.profilePhoto + ' ' + styles.profilePhotoHovered}>
                    {AUTH_USER && <img className={styles.profilePhotoAvatar} src={avatar} />}
                    {!AUTH_USER && <div className={styles.profilePhotoNoAvatar} />}
                </div>
                <div className={`${openMenuState && styles.profileButtonMenuRotate}` + ' ' + styles.profileButtonMenu} />
            </button>
            <div onMouseLeave={handleMouseLeave} className={`${openMenuState && styles.profileSelectActived}` + ' ' + styles.profileSelect + ' ' + styles.profileSelectHovered}>
                <NavLink to={'/profile'} className={styles.profileSelectLink + ' ' + styles.firstLink + ' ' + styles.profileSelectLinkHovered}>
                    <span className={styles.profileSelectText}>{'Профиль'}</span>
                </NavLink>
                <NavLink to={'/'} className={styles.profileSelectLink + ' ' + styles.secondLink + ' ' + styles.profileSelectLinkHovered}>
                    <span className={styles.profileSelectText}>{'Выход'}</span>
                </NavLink>
            </div>
        </div>
    );
};

export default ProfileMenu;
