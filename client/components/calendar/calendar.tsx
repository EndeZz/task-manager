import React, { useState } from 'react';

import Svg from '../svg/svg';
import DatePicker, { registerLocale } from "react-datepicker";
import ru from 'date-fns/locale/ru';

import './calendar.scss';

registerLocale('ru', ru)

export default function Calendar(props: { placeholder: string, value: string, editValue: Function, selectDay: Function }) {
  function editValue(e: { target: HTMLInputElement }) {
    props.editValue(e);
  }

  function selectDay(day: Date | [Date, Date]) {
    props.selectDay(day)
  }

  return (
    <div className='search__box'>
      <DatePicker placeholderText={props.placeholder} value={props.value} onChange={day => { }} onSelect={selectDay} onChangeRaw={editValue} locale="ru" dateFormat='dd/MM/yyyy' />
      <Svg file='input-sprite' type='calendar' classes='search__img search__img_calendar' />
    </div>
  )
}
