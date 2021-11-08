import React, { useState, useEffect, ReactElement } from 'react';
import styles from './AudioPlayer.module.scss';

interface IPath {
    src: string;
}

function convertTime(time: number, format = false): string {
    let seconds = String(Math.floor(time % 60)),
        minutes = String(Math.floor((time / 60) % 60));
    if (!format) {
        minutes = parseInt(minutes) < 10 ? '0' + minutes : minutes;
    } else {
        minutes;
    }
    seconds = parseInt(seconds) < 10 ? '0' + seconds : seconds;

    return `${minutes}:${seconds}`;
}

const AudioPlayer = ({ src }: IPath): ReactElement => {
    const path = src;
    const [playState, setPlayState] = useState(false);
    const [muteState, setMuteState] = useState(false);
    const [volumeState, setVolumeState] = useState(0.3);
    const [durationState, setDurationState] = useState(0);
    const [currentTimeState, setCurrentTimeState] = useState(0);
    const [timeUpdateState, setTimeUpdateState] = useState(0);
    const [progressBarWidthState, setProgressBarWidthState] = useState(0);
    const [progressBarChangeState, setProgressBarChangeState] = useState(0);
    const [progressValueState, setProgressValueState] = useState(0);

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function handleVolumeRange(e: any): void {
        setVolumeState(e.target.value / 100);
    }
    function handlePlay(): void {
        setPlayState(!playState);
    }
    function handleVolumeMuted(): void {
        setMuteState(!muteState);
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function updateCurrentTime(e: any) {
        setTimeUpdateState(e.target.currentTime);
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function handleProgress(e: any) {
        setProgressBarChangeState(e.nativeEvent.offsetX);
    }
    useEffect(() => {
        const audio = document.querySelector(`#audioPlayer`) as HTMLAudioElement;
        const progressBar = document.querySelector(`.${styles.audioPlayerProgressBar}`) as HTMLAudioElement;
        setProgressBarWidthState(progressBar.offsetWidth);
        audio.loop = false;
        playState ? audio.pause() : audio.play();
        audio.volume = volumeState;
        setDurationState(audio.duration);
        setCurrentTimeState(timeUpdateState);
        setProgressValueState((timeUpdateState / audio.duration) * 100);
        if (progressBarChangeState) {
            setProgressValueState((progressBarChangeState / progressBarWidthState) * 100);
            audio.currentTime = (durationState * progressBarChangeState) / progressBarWidthState;
        }
        //return () => {};
    }, [playState, volumeState, timeUpdateState, currentTimeState, progressBarChangeState]);

    return (
        <div className={styles.audioPlayerWrap} data-type="audio">
            <audio autoPlay id={'audioPlayer'} preload={'auto'} onTimeUpdate={(e) => updateCurrentTime(e)} muted={muteState} className={styles.audioPlayer} src={path} />
            <div className={styles.audioPlayerButtonsWrap}>
                <button onClick={handlePlay} className={playState ? styles.audioPlayerPlay : styles.audioPlayerPlayPause} />
                <div className={styles.audioPlayerProgressWrap}>
                    {/*@ts-expect-error //I haven't found a solution*/}
                    <progress onMouseDown={(e) => handleProgress(e)} value={progressValueState} className={styles.audioPlayerProgressBar} min={0} max={100} />
                </div>
                <button onClick={handleVolumeMuted} className={muteState ? styles.audioPlayerVolumeMuted : styles.audioPlayerVolume} />
                <input onChange={(e) => handleVolumeRange(e)} className={styles.audioPlayerVolumeRange} type={'range'} min={0} max={100} />
                <div className={styles.audioPlayerTimeBox}>
                    <span className={styles.audioPlayerTimeCurrent}>{currentTimeState ? convertTime(currentTimeState) : '00:00'}</span>
                    <span className={styles.audioPlayerTimeTotal}>{durationState ? convertTime(durationState, true) : '0:00'}</span>
                </div>
            </div>
        </div>
    );
};
export default AudioPlayer;
