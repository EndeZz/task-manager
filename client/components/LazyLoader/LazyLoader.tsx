import React, { ReactElement, FC } from 'react';
import styles from './LazyLoader.module.scss';

const LazyLoader: FC = (): ReactElement => {
    return (
        <div className={styles.lazyLoader}>
            <div className={styles.lazyLoaderCyrcleOuter}>
                <div className={styles.lazyLoaderCyrcleInner} />
            </div>
        </div>
    );
};

export default LazyLoader;
