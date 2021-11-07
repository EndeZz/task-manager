import './calendar.scss';
import React, { FC } from 'react';
import Flatpickr from 'react-flatpickr';
import { Russian } from 'flatpickr/dist/l10n/ru';

interface CalendarProps {
  className: string;
  name: string;
  placeholder: string;
  options?: object;
}

const Calendar: FC<CalendarProps> = ({
  className,
  name,
  placeholder,
  options = {
    time_24hr: true,
    altFormat: 'd M, Y',
    altInput: true,
    dateFormat: 'Y-m-d',
    locale: Russian,
  },
}) => <Flatpickr type="date" className={className} name={name} placeholder={placeholder} options={options} />;

export default Calendar;
