import React, { ReactElement } from 'react';
import ButtonRecycle from '../ButtonRecycle/ButtonRecycle';
import ButtonEdit from '../ButtonEdit/ButtonEdit';
import { TypeContent } from '../TypeContent/TypeContent';
import styles from './CardsTask.module.scss';
import { NavLink } from 'react-router-dom';

export interface ICardsTask {
    id: number;
    type: 'video' | 'photo' | 'audio';
    link: string;
    title: string;
    author: string;
    date: string;
    role?: 'Контент-мейкер' | 'Менеджер' | 'Администратор';
    status: 'В работе' | 'Выполнено' | 'Ожидает согласования';
}
interface IProps {
    props: ICardsTask;
}

const CardsTask = ({ props }: IProps): ReactElement => {
    const obj = props;
    return (
        <li data-id={obj.id}>
            <div className={styles.cardTask + ' ' + styles.cardTaskHovered + ' ' + styles.cardTaskThemeVideo + ' ' + styles.cardTaskStatusWork}>
                <TypeContent classModify={obj.type} />
                <div className={styles.cardTaskDescription}>
                    {obj.status !== 'Выполнено' && <NavLink to={'/taskresult'}>{obj.title}</NavLink>}
                    {obj.status === 'Выполнено' && <NavLink to={'/tasknoresult'}>{obj.title}</NavLink>}
                    <div className={styles.cardTaskDescriptionShadow} />
                </div>
                <span className={styles.cardTaskAuthorCardText}>{obj.author}</span>
                <div className={styles.cardTaskWrapDate}>
                    <button className={styles.cardTaskButtonDate} />
                    <span className={styles.cardTaskDate}>{obj.date}</span>
                </div>
                <span className={styles.cardTaskStatus + ' ' + `${obj.status === 'В работе' && styles.cardTaskStatusWork}` + ' ' + `${obj.status === 'Выполнено' && styles.cardTaskStatusDone}` + ' ' + `${obj.status === 'Ожидает согласования' && styles.cardTaskStatusWaiting}`}>{obj.status}</span>
                <div className={styles.cardTaskWrapButtonEdit}>
                    <ButtonEdit size={'small'} link={'/tasknoresult'} />
                </div>
                <div className={styles.cardTaskWrapButtonRecycle}>
                    <ButtonRecycle size={'small'} />
                </div>
            </div>
        </li>
    );
};

export default CardsTask;
