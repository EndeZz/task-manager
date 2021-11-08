import React, { ReactElement } from 'react';
import BlockInfo from '../../components/BlockInfo/BlockInfo';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import ButtonDownLoad from '../../components/ButtonDownLoad/ButtonDownLoad';
import ButtonEdit from '../../components/ButtonEdit/ButtonEdit';
import ButtonRecycle from '../../components/ButtonRecycle/ButtonRecycle';
import DownloadFileTypeSize from '../../components/DownloadFileTypeSize/DownloadFileTypeSize';
import NextFileForDowmloading from '../../components/NextFileForDowmloading/NextFileForDowmloading';
import TextArea from '../../components/TextArea/TextArea';
import { TypeContent } from '../../components/TypeContent/TypeContent';
import styles from './TaskNoResult.module.scss';

export interface ITaskNoResult {
    status: string;
    color: string;
    title: string;
    description: string;
}

const TaskNoResult = (): ReactElement => {
    const type = 'video';
    const obj = {
        status: 'В работе',
        color: '#d663ff',
        title: 'Заголовок задачи с другой стороны консультация с широким активом позволяет',
        description:
            'Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности позволяет оценить значение форм развития. Значимость этих проблем настолько очевидна, что новая модель организационной деятельности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям. Товарищи! постоянный количественный рост и сфера нашей активности требуют определения и уточнения позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание системы обучения кадров, соответствует насущным потребностям.',
    };

    return (
        <main className={styles.mainPage}>
            <div className={styles.mainPageContent}>
                <div className={styles.mainPageWrapButtonBack}>
                    <ButtonBack text={'К списку задач'} size={'small'} />
                    <div className={styles.mainPageWrapBoxButtons}>
                        <ButtonEdit />
                        <div className={styles.mainPageWrapBoxButtonsPadding}></div>
                        <ButtonRecycle />
                    </div>
                </div>
                <div className={styles.mainPageEditBlockWrapper}>
                    <div className={styles.mainPageLeftCollumn}>
                        <section className={styles.mainPageEditDescription}>
                            <div className={styles.mainPageInfo}>
                                <TypeContent classModify={type} />
                                <div className={styles.mainPageStatus} style={{ color: obj.color }}>
                                    {obj.status}
                                </div>
                            </div>
                            <h2 className={styles.mainPageTitle}>{obj.title}</h2>
                            <p className={styles.mainPageText}>{obj.description}</p>
                            <div className={styles.mainPageCaption}>{'Файлы'}</div>
                            <div className={styles.mainPageDownloadWrapBlock}>
                                <DownloadFileTypeSize extention={'zip'} text={'Материалы'} size={64} iconTypeFile={'/public/images/UI_Kit/iconTypeExtention/ZIP.svg'} />
                                <ButtonDownLoad />
                            </div>
                            <div className={styles.mainPageDownloadWrapBlock}>
                                <DownloadFileTypeSize extention={'doc'} text={'Техническое задание'} size={215} iconTypeFile={'/public/images/UI_Kit/iconTypeExtention/DOC.svg'} />
                                <ButtonDownLoad />
                            </div>
                        </section>
                        <section className={styles.mainPageDownloadContent}>
                            <div className={styles.mainPageDownloadContentWrap}>
                                <div className={styles.mainPageDownloadContentBox}>
                                    <div className={styles.mainPageDownloadContentFormats}>
                                        <h3 className={styles.mainPageDownloadContentTitle}>{'Результат'}</h3>
                                        <span className={styles.mainPageDownloadContentText}>{'Допустимые форматы:'}</span>
                                        <div className={styles.mainPageDownloadContentFormat + ' ' + styles.mainPageDownloadContentFormatAvi} />
                                        <div className={styles.mainPageDownloadContentFormat + ' ' + styles.mainPageDownloadContentFormatFlv} />
                                        <div className={styles.mainPageDownloadContentFormat + ' ' + styles.mainPageDownloadContentFormatMov} />
                                    </div>
                                    <ul className={styles.mainPageDownloadContentDownloadedBlockFiles}>
                                        <NextFileForDowmloading />
                                    </ul>
                                </div>
                            </div>
                            <div className={styles.mainPageDownloadFilesWrapMessage}>
                                <form className={styles.mainPageDownloadFilesForm}>
                                    <TextArea placeholder={'Введите сообщение...'} width={747} height={117} />
                                    <button className={styles.mainPageDownloadFilesButton + ' ' + styles.mainPageDownloadFilesButtonHovered + ' ' + styles.mainPageDownloadFilesButtonActived}>Отправить</button>
                                </form>
                            </div>
                        </section>
                    </div>
                    <aside className={styles.mainPageRightCollumn}>
                        <BlockInfo name={'Задача создана'} value={'05.02.2020'} />
                        <BlockInfo name={'Срок выполнения'} value={'11.02.2020'} />
                        <BlockInfo name={'Опубликовал'} value={'Семён Щеглов'} />
                        <BlockInfo name={'Ответственный'} value={'Станислав Щукин'} />
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default TaskNoResult;
