import React from 'react';
import Heading from '../../components/heading/heading';
import Message from '../../components/message/Message';
import './notifications.scss';

function Notifications() {
  return (
    <section className="notifications">
      <Heading text="Уведомления"></Heading>
      <ul className="notifications__list">
        <li className="notifications__item">
          <Message type="attach" author="Аркадий Юрченко" task="Новая задача" date="09:51 14.02.2020"></Message>
        </li>
        <li className="notifications__item">
          <Message type="comment" author="" task="Новая задача" date="09:51 14.02.2020"></Message>
        </li>
        <li className="notifications__item">
          <Message type="task_video" author="Аркадий Юрченко" task="" date="09:51 14.02.2020"></Message>
        </li>
        <li className="notifications__item">
          <Message type="task_audio" author="Аркадий Юрченко" task="" date="09:51 14.02.2020"></Message>
        </li>
        <li className="notifications__item">
          <Message type="comment" author="" task="Новая задача" date="09:51 14.02.2020"></Message>
        </li>
        <li className="notifications__item">
          <Message type="attach" author="Аркадий Юрченко" task="Новая задача" date="09:51 14.02.2020"></Message>
        </li>
        <li className="notifications__item">
          <Message type="comment" author="" task="Новая задача" date="09:51 14.02.2020"></Message>
        </li>
      </ul>
    </section>
  );
}

export default Notifications;
