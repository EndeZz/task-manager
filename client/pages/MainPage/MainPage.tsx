import React, { FC, ReactElement, useState, useEffect } from 'react';
import LazyLoader from '../../components/LazyLoader/LazyLoader';
import AudioPlayer from '../../components/AudioPlayer/AudioPlayer';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import PhotoPlayer from '../../components/PhotoPlayer/PhotoPlayer';
import { TypeContent, classesTypeContent } from '../../components/TypeContent/TypeContent';
import InputSearch from '../../components/InputSearch/InputSearch';
import InputCalendar from '../../components/InputCalendar/InputCalendar';
import ButtonFilterVideo from '../../components/ButtonFilterVideo/ButtonFilterVideo';
import ButtonFilterAudio from '../../components/ButtonFilterAudio/ButtonFilterAudio';
import ButtonFilterPhoto from '../../components/ButtonFilterPhoto/ButtonFilterPhoto';
import CardsVideo from '../../components/CardsVideo/CardsVideo';
import CardsPhoto from '../../components/CardsPhoto/CardsPhoto';
import CardsAudio from '../../components/CardsAudio/CardsAudio';
import styles from './MainPage.module.scss';

export interface IViewerState {
    source: string;
    type: classesTypeContent;
    duration: string;
    title: string;
    'time-date': string;
}

const MainPage: FC = (): ReactElement => {
    const [videoState, setVideoState] = useState([]);
    const [photoState, setPhotoState] = useState([]);
    const [audioState, setAudioState] = useState([]);
    const [filterVideoState, setFilterVideoState] = useState(false);
    const [filterPhotoState, setFilterPhotoState] = useState(false);
    const [filterAudioState, setFilterAudioState] = useState(false);
    const [closeViewerState, setcloseViewerState] = useState(false);
    useEffect(() => {
        document.title = 'Главная страница';
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
        getData('/cards-video', setVideoState);
        getData('/cards-photo', setPhotoState);
        getData('/cards-audio', setAudioState);
    }, []);
    const [viewerState, setViewerState] = useState({
        source: '',
        type: '',
        duration: '',
        title: '',
        'time-date': '',
    });
    function viewerData(obj: IViewerState) {
        setcloseViewerState(!closeViewerState);

        setViewerState({
            source: obj.source,
            type: obj.type,
            duration: obj.duration,
            title: obj.title,
            'time-date': obj['time-date'],
        });
    }
    function handleCloseViewer() {
        setcloseViewerState(!closeViewerState);

        setViewerState({
            source: '',
            type: '',
            duration: '',
            title: '',
            'time-date': '',
        });
    }

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
        <div>
            <div className={closeViewerState ? styles.modeViewActive : styles.modeView}>
                <div className={styles.modeViewBoxText}>
                    <button onClick={handleCloseViewer} className={styles.modeViewButtonComeBack + ' ' + styles.modeViewButtonComeBackHovered}>
                        {/*@ts-expect-error //I haven't found a solution*/}
                        <TypeContent classModify={viewerState.type} postFix={'White'} />
                        <span className={styles.modeViewButtonComeBackDuration}>{viewerState.duration}</span>
                    </button>
                    <div className={styles.modeViewButtonWrap}>
                        <span className={styles.modeViewButtonTitle}>{viewerState.title}</span>
                        <span className={styles.modeViewButtonTimeDate}>{viewerState['time-date']}</span>
                    </div>
                </div>
                <div className={styles.modeViewWindowView}>
                    {viewerState.type === 'audio' && <AudioPlayer src={viewerState.source} />}
                    {viewerState.type === 'video' && <VideoPlayer src={viewerState.source} />}
                    {viewerState.type === 'photo' && <PhotoPlayer src={viewerState.source} />}
                </div>
            </div>
            <main className={styles.mainPage}>
                <div className={styles.mainPageContent}>
                    <form className={styles.searchPanel} action="#!">
                        <InputSearch />
                        <InputCalendar title={'Дата публикации'} placeholder={'Укажите дату публикации'} width={394} />
                        <div className={styles.searchPanelBoxItem}>
                            <span className={styles.searchPanelBoxTitle}>{'Тип контента'}</span>
                            <div className={styles.searchPanelBoxButtons}>
                                <ButtonFilterVideo handleClickVideo={handleClickVideo} />
                                <ButtonFilterPhoto handleClickPhoto={handleClickPhoto} />
                                <ButtonFilterAudio handleClickAudio={handleClickAudio} />
                            </div>
                        </div>
                    </form>
                    <ul className={styles.mainPageListCards}>
                        {filterVideoState && videoState.map((item, i) => <CardsVideo key={i} viewerData={viewerData} object={item} />)}
                        {filterPhotoState && photoState.map((item, i) => <CardsPhoto key={i} viewerData={viewerData} object={item} />)}
                        {filterAudioState && audioState.map((item, i) => <CardsAudio key={i} viewerData={viewerData} object={item} />)}
                        {!filterVideoState && !filterPhotoState && !filterAudioState && videoState.map((item, i) => <CardsVideo key={i} viewerData={viewerData} object={item} />)}
                        {!filterVideoState && !filterPhotoState && !filterAudioState && photoState.map((item, i) => <CardsPhoto key={i} viewerData={viewerData} object={item} />)}
                        {!filterVideoState && !filterPhotoState && !filterAudioState && audioState.map((item, i) => <CardsAudio key={i} viewerData={viewerData} object={item} />)}
                    </ul>
                    <LazyLoader />
                </div>
            </main>
        </div>
    );
};

export default MainPage;
