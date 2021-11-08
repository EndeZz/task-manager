import React, { ReactElement } from 'react';
import ButtonOnMainPage from '../../components/ButtonOnMainPage/ButtonOnMainPage';
import styles from './Error.module.scss';

const Error = (): ReactElement => {
    return (
        <main className={styles.pageError}>
            <div className={styles.pageErrorContent}>
                <div className={styles.pageErrorImg} />
                <h4 className={styles.pageErrorTitle}>{'Потерялись?'}</h4>
                <p className={styles.pageErrorDescription}>{'Страница которую вы ищите не существует, либо была удалена'}</p>
                <ButtonOnMainPage />
            </div>
        </main>
    );
};

export default Error;
