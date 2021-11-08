import React, { ReactElement, FC } from 'react';
import styles from './CardsAudio.module.scss';
import { TypeContent } from '../TypeContent/TypeContent';
import { IViewerState } from '../../pages/MainPage/MainPage';

export interface IObjAudio {
    id: number;
    type: 'audio';
    link: string;
    source: string;
    img: string | '';
    description: string | '';
    duration: string;
    title: string;
    author: string;
    'time-date': string;
}

interface IProps {
    viewerData: (obj: IViewerState) => void;
    object: IObjAudio;
}

const CardsAudio: FC<IProps> = ({ viewerData, object }: IProps): ReactElement => {
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
                    <picture className={styles.cardsPicture + ' ' + styles.pictureAudio + ' ' + styles.cardsPictureHovered}>
                        <source src={obj.source} />
                        <img className={styles.cardsPictureImg} src={obj.img} alt={obj.description} />
                    </picture>
                    <div className={styles.cardsTypeBox}>
                        <TypeContent classModify={obj.type} />
                        <span className={styles.cardsTypeBoxDuration + ' ' + styles.durationAudio}>{obj.duration}</span>
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

export default CardsAudio;
