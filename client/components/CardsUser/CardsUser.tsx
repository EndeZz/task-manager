import React, { ReactElement } from 'react';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import ButtonRecycle from '../ButtonRecycle/ButtonRecycle';
import styles from './CardsUser.module.scss';

export interface ICardsUser {
    id: number;
    'url-image': string;
    name: string;
    email: string;
    role: 'Контент-мейкер' | 'Менеджер' | 'Администратор';
}

interface IProps {
    props: ICardsUser;
}

const CardsUser = ({ props }: IProps): ReactElement => {
    const obj = props;
    return (
        <div className={styles.cardUsers + ' ' + styles.cardUsersHovered}>
            <div className={styles.cardUsersAvatarWrap}>
                <img className={styles.cardUsersAvatar} src={obj['url-image']} alt={'Фотография пользователя'} />
            </div>
            <div className={styles.cardUsersNameUser}>{obj.name}</div>
            <span className={styles.cardUsersEmail}>{obj.email}</span>
            <span className={styles.cardUsersRole}>{obj.role}</span>
            <div className={styles.cardUsersWrapButtonEdit}>
                <ButtonEdit size={'small'} link={'/'} />
            </div>
            <div className={styles.cardUsersWrapButtonRecycle}>
                <ButtonRecycle size={'small'} />
            </div>
        </div>
    );
};

export default CardsUser;
