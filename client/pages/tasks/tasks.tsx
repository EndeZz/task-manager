import './tasks.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useTitle } from '../../hooks/useTitle';
import ROUTES from '../../router/routes';
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import Control from '../../components/control/control';
import TypeContent from '../../components/type/type';
import Loader from '../../components/loader/loader';

const Tasks = ({ title }) => {
  const { data, isPending } = useFetch('http://localhost:8081/tasks');
  const [searchFilter, setSearchFilter] = useState<string>('');

  const controlPanel = ['search', 'status', 'due-date', 'type-content'];

  useTitle(title);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchFilter(event.target.value);
  };

  const clearHandler = () => {
    setSearchFilter('');
  };

  function statusOption(children: string) {
    switch (children) {
      case 'in-work':
        return <span className="task__progress task__progress_in-work">В работе</span>;

      case 'complete':
        return <span className="task__progress task__progress_complete">Выполнено</span>;

      case 'awaiting':
        return <span className="task__progress task__progress_awaiting">Ожидает согласования</span>;
      default:
        return '';
    }
  }

  return (
    <div className="container task">
      <Control
        value={searchFilter}
        onChange={handleChange}
        clearButton={clearHandler}
        data={controlPanel}
        className="control__list-task"
      />

      <ul className="task__subject">
        <li className="task__btn-new">
          <Button className="btn btn_primary">
            <Icon
              className="icon icon_primary icon_plus icon_edge"
              path="./img/icons/icons.svg#plus-circle"
              aria-hidden="true"
            />
            Новая задача
          </Button>
        </li>

        {isPending ? (
          <Loader />
        ) : (
          data
          && data.map((task) => (
            <li className="task__card" key={task.id}>
              <ul className="task__list">
                <li className="task__item">
                  <div className="task__content">
                    <TypeContent
                      type={task.type.name}
                      path={`./img/icons/icons.svg#${task.type.name}-icon`}
                      variantSpan={`type type-${task.type.name} type__task type-def`}
                      width={12}
                      height={10}
                    />

                    <h2 className="task__title fade">{task.name}</h2>
                  </div>

                  <div className="task__particle">
                    <span className="task__subtitle">{task.executor.name}</span>

                    <time className="task__date" dateTime="09:21 14.02.2020">
                      {task.dateExpired}
                    </time>

                    {statusOption(task.status.name)}
                  </div>

                  {task.status.name !== 'complete' ? (
                    <div className="task__btn-group">
                      <Link className="btn btn_primary-trans btn_edit-sm btn__task-sm" to={`${ROUTES.TASK.url}`}>
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
                    </div>
                  ) : (
                    ''
                  )}
                </li>
              </ul>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Tasks;
