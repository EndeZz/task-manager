import './users.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTitle } from '../../hooks/useTitle';
import ROUTES from '../../router/routes';
import useFetch from '../../hooks/useFetch';
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import Loader from '../../components/loader/loader';
import Control from '../../components/control/control';

const Users = ({ title }) => {
  const [searchField, setSearchField] = useState<string>('');
  const { data, isPending } = useFetch('http://localhost:8081/users');
  const controlPanel = ['search', 'role'];

  useTitle(title);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const clearHandler = () => {
    setSearchField('');
  };

  return (
    <div className="container users">
      <Control
        value={searchField}
        onChange={handleChange}
        clearButton={clearHandler}
        data={controlPanel}
        className="control__list-users"
      />

      <ul className="users__subject">
        <li className="task__btn-new">
          <Button className="btn btn_primary">
            <Icon
              className="icon icon_primary icon_plus icon_edge"
              path="./img/icons/icons.svg#plus-circle"
              width={14}
              height={16}
              aria-hidden="true"
            />
            Добавить пользователя
          </Button>
        </li>
        {isPending ? (
          <Loader />
        ) : (
          data
          && data.map((user) => (
            <li className="users__card" key={user.id}>
              <ul className="users__list">
                <li className="users__item">
                  <section className="users__content">
                    <img className="nav__profile_img" src={user.avatar} alt="Аватар профиля" />
                    <h2 className="users__title">{user.name}</h2>
                  </section>
                  <section className="task__particle">
                    <span className="task__subtitle">{user.email}</span>
                    <span className="task__subtitle">{user.role.name}</span>
                  </section>
                  <section className="task__btn-group">
                    <Link className="btn btn_primary-trans btn_edit-sm btn__task-sm" to={`${ROUTES.USER.url}`}>
                      <Icon
                        className="icon icon_md"
                        path="./img/icons/icons.svg#edit-icon"
                        width={20}
                        height={20}
                        aria-hidden="true"
                      />
                    </Link>

                    <Button className="btn btn_primary-trans btn_edit-sm btn__task-sm">
                      <Icon
                        className="icon icon_md icon_md-delete"
                        path="./img/icons/icons.svg#delete-icon"
                        width={14}
                        height={16}
                        aria-hidden="true"
                      />
                    </Button>
                  </section>
                </li>
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
