import React, { ReactElement, useState } from 'react';
import styles from './Calendar.module.scss';

export interface IObject {
    handleChange: (arg: string) => void;
    handleClick: (arg: boolean) => void;
}

const Calendar = ({ handleChange, handleClick }: IObject): ReactElement => {
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    function onClick(event: any) {
        const selectDay = event.target.outerText.toString().length > 1 ? event.target.outerText : `0${event.target.outerText}`,
            selectMonth = (currentMonth + 1).toString().length > 1 ? currentMonth + 1 : `0${currentMonth + 1}`;

        return handleChange(`${selectDay}.${selectMonth}.${currentYear}`);
    }
    function handleMouseLeave() {
        return handleClick(true);
    }

    const currDate = new Date();
    const [currentMonth, setcurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setcurrentYear] = useState(new Date().getFullYear());
    const monthNames: string[] = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const weekDays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    let day = <li></li>;
    const arrDays: Array<ReactElement> = [];
    function isLeapYear(year: number): boolean {
        return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
    }

    function getFebDays(year: number): number {
        return isLeapYear(year) ? 29 : 28;
    }
    function generateCalendar(month: number, year: number): void {
        if (month < 0) month = currDate.getMonth();
        if (!year) year = currDate.getFullYear();

        const daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        const firstDayOfMonth = new Date(year, month, 0);

        for (let i = 0; i <= daysOfMonth[month] + firstDayOfMonth.getDay() - 1; i++) {
            if (i >= firstDayOfMonth.getDay()) {
                day = (
                    <li onClick={(event) => onClick(event)} key={i} className={styles.calendarBodyDay}>
                        {i - firstDayOfMonth.getDay() + 1}
                    </li>
                );

                if (i - firstDayOfMonth.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                    day = (
                        <li onClick={(event) => onClick(event)} key={i} className={styles.calendarBodyCurrentDate + ' ' + styles.calendarBodyDay}>
                            {i - firstDayOfMonth.getDay() + 1}
                        </li>
                    );
                }
            }
            arrDays.push(day);
        }
    }

    generateCalendar(currentMonth, currentYear);

    function showPrevMonth(): void {
        if (currentMonth > 0) setcurrentMonth(currentMonth - 1);
        if (currentMonth < 1) {
            setcurrentMonth(11);
            setcurrentYear(currentYear - 1);
        }
        generateCalendar(currentMonth, currentYear);
    }
    function showNextMonth(): void {
        if (currentMonth < 12) setcurrentMonth(currentMonth + 1);
        if (currentMonth === 11) {
            setcurrentMonth(0);
            setcurrentYear(currentYear + 1);
        }
        generateCalendar(currentMonth, currentYear);
    }
    function handlePrevious() {
        showPrevMonth();
    }
    function handleNext() {
        showNextMonth();
    }

    return (
        <div onMouseLeave={handleMouseLeave} className={styles.calendar}>
            <div className={styles.calendarBody}>
                <div className={styles.calendarBodyHeader}>
                    <div className={styles.calendarBodyHeaderLeft}>
                        <span className={styles.calendarBodyHeaderMonthYear}>{monthNames[currentMonth]}</span>
                        <span className={styles.calendarBodyHeaderMonthYear}>{currentYear}</span>
                    </div>
                    <div className={styles.calendarBodySwitch}>
                        <button onClick={handlePrevious} className={styles.calendarBodySwitchPrev + ' ' + styles.calendarBodySwitchPrevActived} type={'button'}></button>
                        <button onClick={handleNext} className={styles.calendarBodySwitchNext + ' ' + styles.calendarBodySwitchNextActived} type={'button'}></button>
                    </div>
                </div>
                <div className={styles.calendarBodyContent}>
                    <ul className={styles.calendarBodyWeekDays}>
                        {weekDays.map((item) => (
                            <li className={styles.calendarBodyWeekDayName}>{item}</li>
                        ))}
                    </ul>
                    <ul className={styles.calendarBodyDays}>{arrDays.map((item) => item)}</ul>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
