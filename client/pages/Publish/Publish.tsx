import React, { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router';
import ButtonApprove from '../../components/ButtonApprove/ButtonApprove';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import { PUBLISH_CONTENT } from '../../components/data_base';
import Input from '../../components/Input/Input';
import PublishContent from '../../components/PublishContent/PublishContent';
import styles from './Publish.module.scss';

const Publish = (): ReactElement => {
    useEffect(() => {
        document.title = 'Задачи';
    }, []);

    const publishlink = useParams();
    console.log(`publishlink`, publishlink);

    return (
        <main className={styles.publish}>
            <div className={styles.publishContent}>
                <div className={styles.publishWrapperButtonBack}>
                    <ButtonBack text={'Выберите файл для публикации'} />
                </div>
                <div className={styles.publishWrapperFiles}>
                    <ul className={styles.publishFilesBox}>
                        {PUBLISH_CONTENT.map((item) => (
                            <PublishContent props={item} />
                        ))}
                    </ul>
                </div>
                <div className={styles.publishWrapperRename}>
                    <Input width={1160} placeholder={'Введите новое название'} title={'Изменить название'} />
                    <ButtonApprove text={'Утвердить и опубликовать'} />
                </div>
            </div>
        </main>
    );
};

export default Publish;
