import React, { FC, MouseEventHandler, ReactElement } from 'react';
import styles from './TypeContent.module.scss';
type classesTypeContent = '' | 'video' | 'audio' | 'photo' | 'videoWhite' | 'photoWhite' | 'audioWhite';
interface ITypeContent {
    classModify?: classesTypeContent;
    postFix?: string;
    hoverState?: boolean;
    onChange?: MouseEventHandler;
}
const TypeContent: FC<ITypeContent> = ({ classModify, postFix = '' }): ReactElement => {
    classModify = styles[classModify + postFix];
    let text = '';
    if (classModify === styles.video) {
        text = 'Видео';
    }
    if (classModify === styles.audio) {
        text = 'Аудио';
    }
    if (classModify === styles.photo) {
        text = 'Фото';
    }
    if (classModify === styles.videoWhite) {
        text = 'Видео';
    }
    if (classModify === styles.photoWhite) {
        text = 'Фото';
    }
    if (classModify === styles.audioWhite) {
        text = 'Аудио';
    }
    return <span className={styles.typeContent + ' ' + classModify}>{text}</span>;
};

export { TypeContent, ITypeContent, classesTypeContent };
