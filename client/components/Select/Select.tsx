import React, { ReactElement } from 'react';
import styles from './Select.module.scss';

export interface ISelect {
    id: number;
    text: string;
    color?: string;
}

interface IObject {
    object: Array<ISelect>;
    width?: number;
    handleChange: (str: string) => void;
    handleClick: (arg: boolean) => void;
}

const Select = ({ handleClick, handleChange, width, object }: IObject): ReactElement => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function onClick(event: any) {
        return handleChange(event.target.outerText);
    }
    function handleMouseLeave() {
        return handleClick(true);
    }
    return (
        <ul onMouseLeave={handleMouseLeave} className={styles.selectBody} style={{ width: width }}>
            {object.map((item) => (
                <li onClick={(event) => onClick(event)} key={item.id} className={styles.selectItem} style={{ color: item.color }}>
                    {item.text}
                </li>
            ))}
        </ul>
    );
};

export default Select;
