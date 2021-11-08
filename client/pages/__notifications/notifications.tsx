import React from "react";

import Nav from "../../components/nav/nav";
import CardNotifivation from "../../components/__notification/notification"
import './notifications.scss';


export default function Notifications() {
  return (
    <main className="main">
      <div className="container container_mini">
        <Nav text="Уведомления" type="title" />
        <div className="content-notifications">
          <ul className="content-notifications__list">
            { }
          </ul>
        </div>
      </div>
    </main>
  )
}


// +notification('content', 1, 'Название задачи', '09:51 14.02.2020', 'Аркадий Юрченко', 'new')
// +notification('comment', 1, 'Название задачи', '08:51 14.02.2020', '', 'new')
// +notification('video', 1, '', '15:17 13.02.2020', 'Аркадий Юрченко', 'new')
// +notification('audio', 1, '', '11:51 13.02.2020', 'Аркадий Юрченко')
// +notification('photo', 1, '', '11:51 13.02.2020', 'Аркадий Юрченко')
// +notification('comment', 1, 'Название задачи', '11:51 13.02.2020')
// +notification('content', 1, 'Название задачи', '11:51 13.02.2020', 'Аркадий Юрченко')



// import '../../components/header/header';
// import '../../components/avatar/avatar';
// import '../../components/media-button/media-button';
// import '../../components/notification/notification';

// document.querySelector('.media-button-back').onclick = () => {
//   window.history.back();
// };


