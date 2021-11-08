import React, { ReactElement, FC, useState } from 'react';
import { TypeContent } from '../TypeContent/TypeContent';
import styles from './ButtonFilterPhoto.module.scss';

export interface IFilterPhoto {
    handleClickPhoto: (state: boolean) => void;
}

const ButtonFilterPhoto: FC<IFilterPhoto> = ({ handleClickPhoto }: IFilterPhoto): ReactElement => {
    const [clickState, setClickState] = useState(false);
    const changeCheckbox = (): void => {
        setClickState(!clickState);
        handleClickPhoto(!clickState);
    };
    const dataChange = {
        clicked: '',
        postFix: '',
    };

    if (clickState) {
        dataChange.postFix = 'White';
        dataChange.clicked = 'photoClicked';
    }

    return (
        <label className={styles.photo + ' ' + styles.photoHovered + ' ' + styles[dataChange.clicked]}>
            <input onChange={changeCheckbox} checked={clickState} className={styles.checkbox} type={'checkbox'} value={'photo'} />
            <TypeContent classModify={'photo'} postFix={dataChange.postFix} />
        </label>
    );
};

export default ButtonFilterPhoto;
