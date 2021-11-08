import React, { ReactElement } from 'react';
import styles from './DownloadFileTypeSize.module.scss';

export type iconsTypesFiles =
    | '/public/images/UI_Kit/iconTypeExtention/DOC.svg'
    | '/public/images/UI_Kit/iconTypeExtention/AVI.svg'
    | '/public/images/UI_Kit/iconTypeExtention/GIF.svg'
    | '/public/images/UI_Kit/iconTypeExtention/JPG.svg'
    | '/public/images/UI_Kit/iconTypeExtention/MOV.svg'
    | '/public/images/UI_Kit/iconTypeExtention/MP3.svg'
    | '/public/images/UI_Kit/iconTypeExtention/PDF.svg'
    | '/public/images/UI_Kit/iconTypeExtention/PNG.svg'
    | '/public/images/UI_Kit/iconTypeExtention/PPT.svg'
    | '/public/images/UI_Kit/iconTypeExtention/RAR.svg'
    | '/public/images/UI_Kit/iconTypeExtention/RTF.svg'
    | '/public/images/UI_Kit/iconTypeExtention/TXT.svg'
    | '/public/images/UI_Kit/iconTypeExtention/WAV.svg'
    | '/public/images/UI_Kit/iconTypeExtention/XLS.svg'
    | '/public/images/UI_Kit/iconTypeExtention/ZIP.svg';

export interface IDownloadFileTypeSize {
    text: string;
    extention: string;
    size: number;
    iconTypeFile: iconsTypesFiles;
}

const DownloadFileTypeSize = (props: IDownloadFileTypeSize): ReactElement => {
    const obj = props;
    return (
        <div className={styles.box}>
            <div className={styles.boxIcon} style={{ background: obj.iconTypeFile }} />
            <div className={styles.boxTitle}>{`${obj.text}.${obj.extention}`}</div>
            <div className={styles.boxSize}>{`${obj.size} Мб`}</div>
        </div>
    );
};

export default DownloadFileTypeSize;
