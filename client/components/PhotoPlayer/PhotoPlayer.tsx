import React, { useState, useEffect, ReactElement } from 'react';
import styles from './PhotoPlayer.module.scss';

interface IPath {
    src: string;
}

const PhotoPlayer = ({ src }: IPath): ReactElement => {
    const path = src;
    const [handleFullState, setHandleFullState] = useState(false);

    function handleFullScreen() {
        setHandleFullState(!handleFullState);
    }
    useEffect(() => {
        const picture = document.querySelector(`#photoPlayer`) as HTMLAudioElement;
        handleFullState && picture.requestFullscreen();
    }, [handleFullState]);

    return (
        <div className={styles.photoPlayerWrap} data-type="photo">
            <picture id={'photoPlayer'} className={styles.photoPlayer}>
                <source src={path} />
                <img className={styles.photoPlayerImg} src={path} />
                <div className={styles.photoPlayerButtonsWrap}>
                    <button onClick={handleFullScreen} className={styles.photoPlayerFullScreen} />
                </div>
            </picture>
        </div>
    );
};

export default PhotoPlayer;
