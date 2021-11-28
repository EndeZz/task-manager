// import '../input/input.scss';
import React, { useEffect, useState } from 'react';


const InputPassword = ( props ) => {
    return(
        props.passwordInput.map((item, ind) => 
            <div className={item.classInput} key={ind}>
                <label className={item.classInput + '__title'}>{item.label}</label>
                <input className={item.classInput + '__input'} 
                required="required" 
                type="text" 
                placeholder={item.placeholder}  
                onChange={props.handlePasswordChange}
                />
                <img className={item.classInput + '__img'} src={item.img} />
            </div>
        )
    )
}


export default InputPassword;




