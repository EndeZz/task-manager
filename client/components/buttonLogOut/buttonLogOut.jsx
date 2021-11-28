import React, { useEffect, useState } from 'react';


const ButtonLogOut = ( props ) => {
    // const [calendarSearch, setCalendarSearch] = useState('')
        return (
            props.btn.map((item, ind) =>
                <button className={`${item.classBtn} ${item.classReset} ${item.classBtn}--${item.bgBtn}` } type="submit" key={ind} >
                    <img className={ `${item.classBtn + "__img"} ${item.classBtn + "__img"} ${item.bgBtn}` } src={item.img} alt="Кнопка" />
                    <span className={ `${item.classBtn + "__title"} ${item.classBtn + "__title"} ${item.bgBtn} `} > {item.text} </span>
                </button>
            )
        )
}


export default ButtonLogOut;

