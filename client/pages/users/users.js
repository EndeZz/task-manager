import './users.scss';

import '../../components/header/header';
import '../../components/user-avatar/user-avatar';
import '../../components/input/input';
import '../../components/checkbox/checkbox';
import '../../components/button-task/button-task';
import '../../components/button-with-text/button-with-text';

import data from '../../../server/UserResponseDto.json';

const role = {
  admin: "Администратор",
  manager: "Менеджер",
  contentMaker: "Контент-мейкер"
}

data.forEach((data) => {
  const template = document.getElementById('template-user');
  const container = document.querySelector('.content__list');

  const clone = template.content.cloneNode(true);

  clone.querySelector('.user-box').id = data.id;

  if (data?.avatar && data.avatar != "") {
    clone.querySelector('.user-avatar__img').src = data.avatar;
    clone.querySelector('.user-avatar__img').style.display = "block";
  }

  clone.querySelector('.user-box__name').innerText = data.name;
  clone.querySelector('.user-box__email').innerText = data.email;

  clone.querySelector('.user-box__role').innerText = role?.[data.role.name];

  container.append(clone);
}
);

if (document.querySelector('.button-task_edit')) {
  Array.from(document.querySelectorAll('.button-task_edit')).forEach((item) => {
    item.addEventListener('click', () => {
      const location = window.location.pathname.match(/(?<=\/)\w+-?\w+(?=\.html)/ig)[0];
      if (location == "users") {
        const container = item.closest('.user-box');
        window.location.href = "user.html?id=" + container.id
      }
    });
  });
}

if (document.querySelector('.button-task_delete')) {
  Array.from(document.querySelectorAll('.button-task_delete')).forEach((item) => {
    item.addEventListener('click', () => {
      const location = window.location.pathname.match(/(?<=\/)\w+-?\w+(?=\.html)/ig)[0];
      if (location == "users") {
        const container = item.closest('.user-box');
        confirm(`Удалить пользователя ${container.id}`)
      }
    });
  });
}

