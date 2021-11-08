import React, { ReactElement } from 'react';
import styles from './ModalConfirmDelete.module.scss';

interface IModalConfirmDelete {
    handleOpenModal: (arg: boolean) => void;
}

const ModalConfirmDelete = ({ handleOpenModal }: IModalConfirmDelete): ReactElement => {
    function handleClose() {
        return handleOpenModal(false);
    }
    return (
        <div className={styles.modal}>
            <div className={styles.modalPanel}>
                <div className={styles.modalPanelWrapCross}>
                    <button onClick={handleClose} className={styles.modalPanelCross}></button>
                </div>
                <div className={styles.modalPanelWrap}>
                    <p className={styles.modalPanelText}>{'Вы действительно хотите удалить задачу'}</p>
                </div>
                <div className={styles.modalPanelWrap}>
                    <button className={styles.modalPanelButton}>{'Да'}</button>
                    <div className={styles.modalPanelPadding}></div>
                    <button onClick={handleClose} className={styles.modalPanelButton}>
                        {'Нет'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalConfirmDelete;
