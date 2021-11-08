import React, { ReactElement, FC, useState } from 'react';
import { TypeContent } from '../TypeContent/TypeContent';
import styles from './ButtonFilterVideo.module.scss';

export interface IFilterVideo {
    handleClickVideo: (state: boolean) => void;
}

const ButtonFilterVideo: FC<IFilterVideo> = ({ handleClickVideo }: IFilterVideo): ReactElement => {
    const [clickState, setClickState] = useState(false);
    const changeCheckbox = (): void => {
        setClickState(!clickState);
        handleClickVideo(!clickState);
    };
    const dataChange = {
        clicked: '',
        postFix: '',
    };

    if (clickState) {
        dataChange.clicked = 'videoClicked';
        dataChange.postFix = 'White';
    }

    return (
        <label className={styles.video + ' ' + styles.videoHovered + ' ' + styles[dataChange.clicked]}>
            <input onChange={changeCheckbox} checked={clickState} className={styles.checkbox} type={'checkbox'} value={'video'} />
            <TypeContent classModify={'video'} postFix={dataChange.postFix} />
        </label>
    );
};

export default ButtonFilterVideo;
