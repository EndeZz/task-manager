import React, { ReactElement } from 'react';
import styles from './UploadedVideoFile.module.scss';

export interface IUploadedVideoFile {
    src: string;
    name: string;
    'time-date': string;
}

interface IProps {
    props: IUploadedVideoFile;
}

const UploadedVideoFile = ({ props }: IProps): ReactElement => {
    const obj = props;
    return (
        <li className={styles.downloadedFileWrapper + ' ' + styles.downloadedFileWrapperHovered + ' ' + styles.tooltip}>
            <button className={styles.downloadedFileDeleteAttachment} />
            <div className={styles.downloadedFileBox}>
                <img className={styles.downloadedFileBoxImg} src={obj.src} />
            </div>
            <div className={styles.tooltipText}>
                <span className={styles.tooltipTextDate}>{obj['time-date']}</span>
                <span className={styles.tooltipTextInfo}>{obj.name}</span>
            </div>
        </li>
    );
};

export default UploadedVideoFile;
