import React, { ReactElement, useState } from 'react';
import ModalConfirmDelete from '../ModalConfirmDelete/ModalConfirmDelete';
import styles from './ButtonRecycle.module.scss';

interface ISizeButtonRecycle {
    size?: 'small';
}

const ButtonRecycle = ({ size }: ISizeButtonRecycle): ReactElement => {
    const [openModalState, setOpenModalState] = useState(false);

    function handleOpenModal(arg: boolean) {
        setOpenModalState(arg);
    }

    const button = size === 'small' ? <a onClick={() => setOpenModalState(true)} className={styles.buttonRecycleSmall + ' ' + styles.buttonRecycleSmallHovered + ' ' + styles.buttonRecycleSmallActived} /> : <a onClick={() => setOpenModalState(true)} className={styles.buttonRecycle + ' ' + styles.buttonRecycleHovered + ' ' + styles.buttonRecycleActived} />;

    return (
        <div>
            {button}
            {openModalState && <ModalConfirmDelete handleOpenModal={handleOpenModal} />}
        </div>
    );
};

export default ButtonRecycle;
