import { $ } from './lib';

function startCalendar() {
    $('.calendar__icon').addEventListener('click', showCalendar);

    const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    let calendarBody = $('.calendar__body'),
        monthPicker = calendarBody.querySelector('#month'),
        currDate = new Date(),
        calendarBodyDays = calendarBody.querySelector('.calendar__body-days'),
        calendarBodyHeaderYear = calendarBody.querySelector('#year'),
        currentMonth = { value: currDate.getMonth() },
        currentYear = { value: currDate.getFullYear() };

    function showCalendar() {
        $('.calendar').classList.toggle('calendar_active');
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 === 0);
    }

    function getFebDays(year) {
        return isLeapYear(year) ? 29 : 28;
    }

    function generateCalendar(month, year) {
        calendarBodyDays.innerHTML = '';

        if (month < 0) month = currDate.getMonth();
        if (!year) year = currDate.getFullYear();

        let daysOfMonth = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let currentMonth = `${monthNames[month]}`;
        monthPicker.innerHTML = currentMonth;
        calendarBodyHeaderYear.innerHTML = year;

        let firstDayOfMonth = new Date(year, month, 0);

        for (let i = 0; i <= daysOfMonth[month] + firstDayOfMonth.getDay() - 1; i++) {
            let day = document.createElement('div');
            if (i >= firstDayOfMonth.getDay()) {
                day.classList.add('calendar__body-day');
                day.innerHTML = i - firstDayOfMonth.getDay() + 1;

                day.addEventListener('click', (e) => {
                    saveDataInInput(e);
                });

                if (i - firstDayOfMonth.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                    day.classList.add('calendar__body-current-date');
                }
            }
            calendarBodyDays.appendChild(day);
        }
    }

    generateCalendar(currentMonth.value, currentYear.value);

    function saveDataInInput(e) {
        const selectDay = e.target.innerText.toString().length > 1 ? e.target.innerText : `0${e.target.innerText}`,
            selectMonth = (currentMonth.value + 1).toString().length > 1 ? currentMonth.value + 1 : `0${currentMonth.value + 1}`;

        $('.calendar__select-date').value = `${selectDay}.${selectMonth}.${currentYear.value}`;
        $('.calendar').classList.remove('calendar_active');
    }

    function switchMonthYear() {
        $('.calendar__body-switch-prev').onclick = () => {
            showPrevMonth();
        };
        $('.calendar__body-switch-next ').onclick = () => {
            showNextMonth();
        };
        function showPrevMonth() {
            if (currentMonth.value > -1) currentMonth.value--;
            if (currentMonth.value < 0) {
                currentMonth.value = 11;
                currentYear.value--;
            }
            generateCalendar(currentMonth.value, currentYear.value);
        }
        function showNextMonth() {
            if (currentMonth.value < 12) currentMonth.value++;
            if (currentMonth.value > 11) {
                currentMonth.value = 0;
                currentYear.value++;
            }
            generateCalendar(currentMonth.value, currentYear.value);
        }
    }

    switchMonthYear();
}

export { startCalendar };
