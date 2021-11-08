import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ButtonAttachFile from '../../components/ButtonAttachFile/ButtonAttachFile';
import ButtonBack from '../../components/ButtonBack/ButtonBack';
import ButtonDeleteOpen from '../../components/ButtonDeleteOpen/ButtonDeleteOpen';
import ButtonSubmit from '../../components/ButtonSubmit/ButtonSubmit';
import DownloadFileTypeSize from '../../components/DownloadFileTypeSize/DownloadFileTypeSize';
import Input from '../../components/Input/Input';
import InputCalendar from '../../components/InputCalendar/InputCalendar';
import InputSelect from '../../components/InputSelect/InputSelect';
import TextArea from '../../components/TextArea/TextArea';
import styles from './NewTask.module.scss';

const NewTask = (): ReactElement => {
    const [arrTypeContetState, setArrTypeContetState] = useState([]);
    const [arrListUsersState, setArrListUsersState] = useState([]);
    const newtasklink = useParams();
    console.log(`newtasklink`, newtasklink);
    useEffect(() => {
        document.title = 'Новая задача';
    }, []);
    useEffect(() => {
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        async function getData(url: string, collback: any): Promise<void> {
            try {
                const response = await fetch('http://localhost:3000' + url);
                collback(await response.json());
            } catch (error) {
                console.error(error);
            }
        }
        getData('/type-content', setArrTypeContetState);
        getData('/list-users', setArrListUsersState);
    }, []);

    return (
        <main className={styles.mainPage}>
            <div className={styles.mainPageContent}>
                <div className={styles.mainPageWrapButtonBack}>
                    <ButtonBack size={'small'} text={'К списку задач'} />
                </div>
                <div className={styles.mainPageEditBlockWrapper}>
                    <div className={styles.mainPageLeftCollumn}>
                        <div className={styles.mainPageWrapBlock}>
                            <InputSelect object={arrTypeContetState} title={'Тип контента'} placeholder={'Выберите тип контента'} width={383} error={true} />
                            <Input title={'Заголовок'} placeholder={'Введите заголовок задачи'} width={747} error={true} />
                            <TextArea title={'Описание'} placeholder={'Опишите требования'} height={110} width={747} error={true} />
                            <div className={styles.mainPageBlockFiles}>
                                <DownloadFileTypeSize iconTypeFile={'/public/images/UI_Kit/iconTypeExtention/ZIP.svg'} text={'Материалы'} extention={'zip'} size={64} />
                                <ButtonDeleteOpen text={'Удалить'} />
                            </div>
                            <ButtonAttachFile />
                        </div>
                        <div className={styles.mainPageErrorWrap}>
                            <span className={styles.mainPageErrorText}>{'Заполните отмеченные поля'}</span>
                        </div>
                        <ButtonSubmit src={'/public/images/UI_Kit/buttons/approve-blue.svg'} text={'Создать задачу'} />
                    </div>
                    <aside className={styles.mainPageRightCollumn}>
                        <InputCalendar title={'Срок выполнения'} placeholder={'Укажите дату'} width={334} error={true} />
                        <InputSelect object={arrListUsersState} title={'Инициатор'} placeholder={'Выберите инициатора'} width={334} error={true} />
                        <InputSelect object={arrListUsersState} title={'Ответственный'} placeholder={'Выберите ответственного'} width={334} error={true} />
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default NewTask;
