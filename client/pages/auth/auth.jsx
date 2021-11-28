import './auth.scss';

import React, { useState } from 'react';

import ButtonLogOut from '../../components/buttonLogOut/buttonLogOut';
import InputEmail from '../../components/InputEmail/InputEmail';

import logo from '../../../public/img/logo.svg'
import entryImg from '../../../public/img/entry--icon.svg'
import show from '../../../public/img/show--icon.svg'

import InputPassword from '../../components/InputPassword/InputPassword';


const emailInput = [
    {
        classInput: "user-email", 
        label: "E-mail", 
        placeholder: "Введите email",
        img: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    }
]

const passwordInput = [
    {
        classInput: "password-block", 
        label: "Пароль", 
        placeholder: "Введите пароль",
        img: `${show}`
    }
]

const entryeBtn = [
    {
      classBtn: "entry-btn",
      classReset: "btn-reset",
      bgBtn: "blue",
      text: "Войти",
      img: `${entryImg}`
    }
  ]


const Auth = ( props ) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
  console.log('auth', props)
  const handleLogIn = (e) => {
    e.preventDefault()
    localStorage.setItem('isLoggedIn', true)
    localStorage.setItem('emailUser', email)
    props.setUserName(email)
    // eslint-disable-next-line react/prop-types
    props.setIsLoggedIn(true)
    // eslint-disable-next-line react/prop-types
    props.history.push('/home')
    console.log('asd')
  }

    return (
        <form className="loginForm"  onSubmit={handleLogIn}>
            <div className="main" > 
                <div className="auth" >
                    <div className="auth__logo" >
                        <img src={logo} />
                    </div>
                    <div className="auth__border">
                        <div className="auth__info">
                            <h2 className="auth__entry" > Вход </h2>
                            <InputEmail emailInput={emailInput} handleEmailChange={handleEmailChange} />
                            <InputPassword passwordInput={passwordInput} handlePasswordChange={handlePasswordChange} />
                            {/* <Input  /> */}
                            <ButtonLogOut btn={entryeBtn}/>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Auth;