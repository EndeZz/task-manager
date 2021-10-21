import './task.scss';

import '../../components/header/header';
import '../../components/button-task/button-task';
import '../../components/media-button/media-button';
import '../../components/type/type';
import '../../components/files/files';
import '../../components/button-with-text/button-with-text';
import '../../components/format-file/format-file';
import '../../components/user-avatar/user-avatar';
import createComment from '../../components/comment/comment';
import data from '../../../server/task.json';

const search = window.location.search.substring(1).split('&').reduce((acc, item) => {
  const arg = item.split('=');

  const [key] = arg;
  const value = arg[1];

  acc[key] = value;
  return acc;
}, {});

document.querySelector('.media-button-back').onclick = () => {
  window.history.back();
}

const actData = data.filter((item) => item.id === +search.id)


document.querySelector('.file__input').addEventListener('change', function change() {
  if (this.files[0]) {
    const fr = new FileReader();

    fr.addEventListener('load', () => {
      const container = document.querySelector('.task-data__img-box');
      const template = document.getElementById('content');

      const clone = template.content.cloneNode(true);
      // clone.querySelector('.task-data__container').id=
      clone.querySelector('.task-data__img').src = fr.result;

      container.append(clone);
    }, false);

    fr.readAsDataURL(this.files[0]);
  }
});

const comment = (actData[0]?.comments) ? actData[0].comments : [];

comment.forEach((item) => {
  createComment(item);
});

