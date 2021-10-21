import './comment.scss';

export default (data) => {
  const container = document.querySelector('.box-list-comment');
  const template = document.getElementById('temptate-comment');

  const clone = template.content.cloneNode(true);

  if (data.user?.avatar) {
    clone.querySelector('.user-avatar__img').src = data.user.avatar;
    clone.querySelector('.user-avatar__img').style.display = "block";
  }

  if (data.user.id === +localStorage.id) {
    clone.querySelector('.comment__author').innerText = 'Вы';
  } else {
    clone.querySelector('.comment__author').innerText = data.user.name;
  }

  clone.querySelector('.comment__date').innerText = new Date(data.date).toLocaleString();
  clone.querySelector('.comment__text').innerText = data.message;

  container.append(clone);
};
