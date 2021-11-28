// import './input.scss';
import React, { useEffect, useState } from 'react';


const InputCalendar = ( props ) => {
    // const [ search, setSearch] = useState('')
    const [calendarSearch, setCalendarSearch] = useState('')
    useEffect(() => {
        props.onSearch(calendarSearch)
    }, [calendarSearch])
    console.log('itemsInput', props)

        return(
            props.items.map((item, ind) => 
                <div className={item.classInput} key={ind}>
                    <label className={item.classInput + '__title'}>{item.label}</label>
                    <input className={item.classInput + '__input'} required="required" type="text" placeholder={item.placeholder} onChange={(e) => setCalendarSearch(e.target.value)} value={calendarSearch} />
                    <img className={item.classInput + '__img'} src={item.img} />
                </div>
            )
        )
}


export default InputCalendar;

