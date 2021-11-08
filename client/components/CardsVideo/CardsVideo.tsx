import React, { ReactElement, FC } from 'react';
import styles from './CardsVideo.module.scss';
import { TypeContent } from '../TypeContent/TypeContent';
import { IViewerState } from '../../pages/MainPage/MainPage';

export interface IObjVideo {
    id: number;
    type: 'video';
    link: string;
    source: string;
    poster: string;
    description: string | '';
    duration: string;
    title: string;
    author: string;
    'time-date': string;
}

interface IProps {
    viewerData: (obj: IViewerState) => void;
    object: IObjVideo;
}

const CardsVideo: FC<IProps> = ({ viewerData, object }: IProps): ReactElement => {
    const obj = object;
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function handleClick(e: any) {
        e.preventDefault();

        return viewerData({
            source: obj.source,
            type: obj.type,
            duration: obj.duration,
            title: obj.title,
            'time-date': obj['time-date'],
        });
    }
    return (
        <li onClick={(e) => handleClick(e)} data-type={obj.type} data-duration={obj.duration} data-title={obj.title} data-time_date={obj['time-date']} data-source={obj.source} data-description={obj.description}>
            <section className={styles.cards}>
                <a className={styles.cardsLink} href={obj.link}>
                    <video poster={obj.poster} className={styles.cardsPicture + ' ' + styles.pictureVideo + ' ' + styles.cardsPictureHovered}>
                        <source src={obj.source} />
                        <img className={styles.cardsPictureImg} alt={obj.description} />
                    </video>
                    <div className={styles.cardsTypeBox}>
                        <TypeContent classModify={obj.type} />
                        <span className={styles.cardsTypeBoxDuration + ' ' + styles.durationVideo}>{obj.duration}</span>
                    </div>
                    <h4 className={styles.cardsTitle}>{obj.title}</h4>
                    <div className={styles.cardsInfo}>
                        <span className={styles.cardsInfoAuthor}>{obj.author}</span>
                        <div className={styles.cardsInfoPoint} />
                        <span className={styles.cardsInfoTimeDate}>{obj['time-date']}</span>
                    </div>
                </a>
            </section>
        </li>
    );
};

export default CardsVideo;
