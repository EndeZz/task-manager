import React, { useState, useEffect, ReactElement } from 'react';
import styles from './VideoPlayer.module.scss';

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

const VideoPlayer = ({ src }: IPath): ReactElement => {
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
    const [handleFullState, setHandleFullState] = useState(false);
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
    function handleFullScreen() {
        setHandleFullState(!handleFullState);
    }
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function handleProgress(e: any) {
        setProgressBarChangeState(e.nativeEvent.offsetX);
    }
    useEffect(() => {
        const video = document.querySelector(`#videoPlayer`) as HTMLAudioElement;
        const progressBar = document.querySelector(`.${styles.videoPlayerProgressBar}`) as HTMLAudioElement;
        setProgressBarWidthState(progressBar.offsetWidth);
        video.loop = false;
        playState ? video.pause() : video.play();
        video.volume = volumeState;
        setDurationState(video.duration);
        setCurrentTimeState(timeUpdateState);
        setProgressValueState((timeUpdateState / video.duration) * 100);
        handleFullState && video.requestFullscreen();
        if (progressBarChangeState) {
            setProgressValueState((progressBarChangeState / progressBarWidthState) * 100);
            video.currentTime = (durationState * progressBarChangeState) / progressBarWidthState;
        }
        //return () => {};
    }, [playState, volumeState, timeUpdateState, currentTimeState, progressBarChangeState, handleFullState]);

    return (
        <div className={styles.videoPlayerWrap} data-type="video">
            <video id={'videoPlayer'} autoPlay preload={'auto'} onTimeUpdate={(e) => updateCurrentTime(e)} muted={muteState} className={styles.videoPlayer} src={path} />
            <div className={styles.videoPlayerWrapControlPanel}>
                <div className={styles.videoPlayerProgressWrap}>
                    {/*@ts-expect-error //I haven't found a solution*/}
                    <progress onMouseDown={(e) => handleProgress(e)} value={progressValueState} className={styles.videoPlayerProgressBar} min={0} max={100} />
                </div>
                <div className={styles.videoPlayerButtonsWrap}>
                    <button onClick={handlePlay} className={playState ? styles.videoPlayerPlay : styles.videoPlayerPlayPause} />
                    <button onClick={handleVolumeMuted} className={muteState ? styles.videoPlayerVolumeMuted : styles.videoPlayerVolume} />
                    <input onChange={(e) => handleVolumeRange(e)} className={styles.videoPlayerVolumeRange} type="range" min={0} max={100} />
                    <div className={styles.videoPlayerTimeBox}>
                        <span className={styles.videoPlayerTimeCurrent}>{currentTimeState ? convertTime(currentTimeState) : '00:00'}</span>
                        <span className={styles.videoPlayerTimeTotal}>{durationState ? convertTime(durationState, true) : '0:00'}</span>
                    </div>
                    <button onClick={handleFullScreen} className={styles.videoPlayerFullScreen} />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;
