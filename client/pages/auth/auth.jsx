import './auth.pug';
import './auth.scss';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Select from '../../components/select/select.jsx';

import { emailInput } from '../user/user';
import { passwordInput } from '../user/user';

import logo from '../../../public/img/logo.svg'
import entryImg from '../../../public/img/entry--icon.svg'


const entryeBtn = [
    {
      classBtn: "entry-btn",
      classReset: "btn-reset",
      bgBtn: "blue",
      text: "Войти",
      img: `${entryImg}`
    }
  ]


const Auth = (props) => {

  console.log(props)
  const handleLogIn = (e) => {
    e.preventDefault()
    props.setIsLoggedIn(true)
    props.history.push('/')
    console.log('asd')
  }

      return pug`
        form(class="loginForm" onSubmit=${handleLogIn})
          .main 
              .auth
                  .auth__logo
                      img(src=${logo})
                  .auth__border 
                      .auth__info 
                          h2(class="auth__entry") Вход
                          Input inp=${emailInput}
                          Input inp=${passwordInput}
                          Button btn=${entryeBtn}


                                           
      `
}

export default Auth;