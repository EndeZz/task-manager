import './dropdown.scss';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AuthActionCreator } from '../../store/reducers/auth/action-creator';
import Button from '../button/button';

const DropDown: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <ul className="dropdown__list">
        <li className="dropdown__item">
          <Link to="/profile" className="btn btn__profile btn__profile_link">
            Профиль
          </Link>
        </li>
        <li className="dropdown__item">
          <Button className="btn btn__profile btn__profile_link" onClick={() => dispatch(AuthActionCreator.logout())}>
            Выход
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
