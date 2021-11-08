import React, { ReactElement, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import ButtonUserRole from '../../components/ButtonUserRole/ButtonUserRole';
import CardsUser from '../../components/CardsUser/CardsUser';
import InputSearch from '../../components/InputSearch/InputSearch';
import styles from './Users.module.scss';

const Users = (): ReactElement => {
    const [rolesState, setRolesState] = useState('');
    const [arrUsersState, setArrUsersState] = useState([]);
    const match = useRouteMatch();
    useEffect(() => {
        document.title = 'Пользователи';
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
        getData('/users', setArrUsersState);
    }, []);

    function onClick(str: string) {
        switch (str) {
            case 'Контент-мейкер':
                setRolesState('Контент-мейкер');
                break;
            case 'Менеджер':
                setRolesState('Менеджер');
                break;
            case 'Администратор':
                setRolesState('Администратор');
                break;
        }
    }
    return (
        <main className={styles.mainPage}>
            <div className={styles.mainPageContent}>
                <form className={styles.searchPanel} action={'#!'}>
                    <InputSearch />
                    <div className={styles.searchPanelBoxItem}>
                        <span className={styles.searchPanelBoxTitle}>Роль</span>
                        <div className={styles.searchPanelBoxButtons}>
                            <ButtonUserRole onClick={onClick} text={'Все'} />
                            <ButtonUserRole onClick={onClick} text={'Контент-мейкер'} />
                            <ButtonUserRole onClick={onClick} text={'Менеджер'} />
                            <ButtonUserRole onClick={onClick} text={'Администратор'} />
                        </div>
                    </div>
                </form>
                <div className={styles.mainPageWrapButton}>
                    <ButtonAdd text={'Добавить пользователя'} path={`${match.url}/newuser`} />
                </div>
                <ul className={styles.mainPageWrapListCards}>
                    {!rolesState && arrUsersState.map((item) => <CardsUser key={item['id']} props={item} />)}
                    {rolesState && arrUsersState.map((item) => item['role'] === rolesState && <CardsUser key={item['id']} props={item} />)}
                </ul>
            </div>
        </main>
    );
};

export default Users;
