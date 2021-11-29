import * as React from 'react';
import './notifications.scss';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import NotifyItem from '../../components/notify/notifyItem';
import Button from '../../components/button/button';
import { getNotification } from '../../api';

const Notify = () => {
  const router = useHistory();
  const [notifications, setNotifications] = useState([]);

  const loadNotification = async () => {
    try {
      const notifications = await getNotification();
      setNotifications(notifications);
    } catch (e) {
      toast.error('Что-то пошло не так, попробуйте перезагрузить страницу');
    }
  };

  useEffect(() => {
    loadNotification();
  }, []);
  return (
    <div>
      <Header />
      <Main>
        <section className={'notify'}>
          <div className={'notify__inner'}>
            <div className={'notify__title-inner'}>
              <Button
                size={'small'}
                typeIcon={'back'}
                color={'transparent'}
                value={''}
                type={''}
                btnType={''}
                onClick={router.goBack}
                aria-label={'Назад'}
              />
              <h2 className={'notify__title'}>Уведомления</h2>
            </div>
            <div className={'notify__content-inner'}>
              <ul className={'notify__list'}>
                {notifications.map((notification) => (
                  <li key={notification.id} className={'notify__item'}>
                    <NotifyItem notification={notification} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Main>
    </div>
  );
};

export default Notify;
