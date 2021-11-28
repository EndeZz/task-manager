import './header.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from '../navigation/navigation';


const Header = (  props  ) => {

    const handleLogOut = () => {
        localStorage.setItem('isLoggedIn', false)
        props.setIsLoggedIn(false)
    }
    
        return (
            props.isLoggedIn ?
                props.head.map((item, ind) =>
                    <div className={item.className} key >
                        <div className="container" >
                            <div className="header-block" >
                                <div className="header__logo-img"> 
                                    <a > 
                                        <img src={item.logoImg} ></img>
                                    </a>
                                </div>
                                <nav className="header__menu" >        
                                    <Navigation nav={props.nav} />
                                </nav>
                                <div className="header__notif-block" >                
                                    <a className="header__notif-link header__notif-link_border" href="#" >
                                        <img src={item.notifImg} />
                                        <span className={item.classNotif} > {item.notifCount} </span>
                                    </a>
                                </div>
                                <div className="header__user-block" > {props.userName} </div>
                                <div className="header__user-photo" > 
                                    <img className="header__user-img" src={item.logoPers} alt="Логотип пользователя" />
                                </div>
                                <ul className="header__user-profile" > 
                                    <li className="header__user-item" > 
                                        <Link className="header__user-log" to="#" > Профиль </Link>
                                    </li>
                                    <li className="header__user-item" > 
                                        <Link className="header__user-goout" to="/" onClick={handleLogOut} > Выход </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                    </div>
                ) 
            : ''
        )
}


export default Header;


// nav=${this.props.children[3]}
// nav.header__menu
// ul.header__menu-list ${this.getNav()}