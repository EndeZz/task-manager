import React, { ReactElement } from 'react';
import styles from './BlockInfo.module.scss';

export interface IBlockInfo {
    name: string;
    value: string;
}

const BlockInfo = (props: IBlockInfo): ReactElement => {
    const obj = props;
    return (
        <div className={styles.blockInfo}>
            <span className={styles.blockInfoTextFirst}>{obj.name}</span>
            <div className={styles.blockInfoFill} />
            <span className={styles.blockInfoTextLast}>{obj.value}</span>
        </div>
    );
};

export default BlockInfo;
