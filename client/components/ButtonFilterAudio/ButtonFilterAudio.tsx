import React, { ReactElement, FC, useState } from 'react';
import { TypeContent } from '../TypeContent/TypeContent';
import styles from './ButtonFilterAudio.module.scss';

export interface IFilterAudio {
    handleClickAudio: (state: boolean) => void;
}

const ButtonFilterAudio: FC<IFilterAudio> = ({ handleClickAudio }: IFilterAudio): ReactElement => {
    const [clickState, setClickState] = useState(false);
    const changeCheckbox = (): void => {
        setClickState(!clickState);
        handleClickAudio(!clickState);
    };
    const dataChange = {
        clicked: '',
        postFix: '',
    };

    if (clickState) {
        dataChange.postFix = 'White';
        dataChange.clicked = 'audioClicked';
    }

    return (
        <label className={styles.audio + ' ' + styles.audioHovered + ' ' + styles[dataChange.clicked]}>
            <input onChange={changeCheckbox} checked={clickState} className={styles.checkbox} type={'checkbox'} value={'audio'} />
            <TypeContent classModify={'audio'} postFix={dataChange.postFix} />
        </label>
    );
};

export default ButtonFilterAudio;
