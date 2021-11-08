import React, { ReactElement, useEffect, useState } from 'react';
import ButtonFilterAudio from '../../components/ButtonFilterAudio/ButtonFilterAudio';
import ButtonFilterPhoto from '../../components/ButtonFilterPhoto/ButtonFilterPhoto';
import ButtonFilterVideo from '../../components/ButtonFilterVideo/ButtonFilterVideo';
import CardsTask from '../../components/CardsTask/CardsTask';
import InputCalendar from '../../components/InputCalendar/InputCalendar';
import InputSearch from '../../components/InputSearch/InputSearch';
import InputSelect from '../../components/InputSelect/InputSelect';
import styles from './Tasks.module.scss';
import ButtonAdd from '../../components/ButtonAdd/ButtonAdd';
import { useRouteMatch } from 'react-router';

const Tasks = (): ReactElement => {
    const [arrCardsTasksState, setarrCardsTasksState] = useState([]);
    const [statusesState, setStatusesState] = useState([]);
    const [filterVideoState, setFilterVideoState] = useState(false);
    const [filterPhotoState, setFilterPhotoState] = useState(false);
    const [filterAudioState, setFilterAudioState] = useState(false);
    const match = useRouteMatch();
    useEffect(() => {
        document.title = 'Задачи';
    }, []);
    useEffect(() => {
        let cleanupFunction = false;
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        async function getData(url: string, collback: any): Promise<void> {
            try {
                const response = await fetch('http://localhost:3000' + url);
                collback(await response.json());
                if (!cleanupFunction) collback(await response.json());
            } catch (error) {
                console.error(error);
            }
        }
        getData('/cards-task', setarrCardsTasksState);
        getData('/statuses', setStatusesState);
        return () => {
            cleanupFunction = true;
        };
    }, []);

    function handleClickVideo(state: boolean) {
        setFilterVideoState(state);
    }
    function handleClickPhoto(state: boolean) {
        setFilterPhotoState(state);
    }
    function handleClickAudio(state: boolean) {
        setFilterAudioState(state);
    }

    return (
        <main className={styles.mainPage}>
            <div className={styles.mainPageContent}>
                <form className={styles.searchPanel} action="#!">
                    <InputSearch />
                    <InputSelect title={'Статус'} placeholder={'Выберите статус'} object={statusesState} width={187} />
                    <InputCalendar title={'Срок выполнения'} placeholder={'Укажите дату'} width={187} />
                    <div className={styles.searchPanelBoxItem}>
                        <span className={styles.searchPanelBoxTitle}>{'Тип контента'}</span>
                        <div className={styles.searchPanelBoxButtons}>
                            <ButtonFilterVideo handleClickVideo={handleClickVideo} />
                            <ButtonFilterPhoto handleClickPhoto={handleClickPhoto} />
                            <ButtonFilterAudio handleClickAudio={handleClickAudio} />
                        </div>
                    </div>
                </form>
                <div className={styles.mainPageWrapButtonTask}>
                    <ButtonAdd text={'Новая задача'} path={`${match.url}/newtask`} />
                </div>
                <ul className={styles.mainPageWrapCardTask}>
                    {!filterVideoState && !filterPhotoState && !filterAudioState && arrCardsTasksState.map((item, i) => <CardsTask key={i} props={item} />)}
                    {filterVideoState && arrCardsTasksState.map((item, i) => item['type'] === 'video' && <CardsTask key={i} props={item} />)}
                    {filterPhotoState && arrCardsTasksState.map((item, i) => item['type'] === 'photo' && <CardsTask key={i} props={item} />)}
                    {filterAudioState && arrCardsTasksState.map((item, i) => item['type'] === 'audio' && <CardsTask key={i} props={item} />)}
                </ul>
            </div>
        </main>
    );
};

export default Tasks;
