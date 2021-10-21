import './button-with-text.scss';

if (document.querySelector('.button-home')) {
  document.querySelector('.button-home').onclick = () => {
    window.location.href = 'index.html';
  };
}

if (document.querySelector('.button-new-task')) {
  document.querySelector('.button-new-task').onclick = () => {
    window.location.href = 'task-new.html';
  };
}

if (document.querySelector('.button-new-user')) {
  document.querySelector('.button-new-user').onclick = () => {
    window.location.href = 'user.html';
  };
}

if (document.querySelector('.button-download__input') && document.querySelector('.user-avatar__container_big')) {
  document.querySelector('.button-download__input').addEventListener('change', function avatar() {
    if (this.files[0]) {
      const fr = new FileReader();
      fr.addEventListener('load', () => {
        document.querySelector('.user-avatar__container_big .user-avatar__img').src = fr.result;
      }, false);
      fr.readAsDataURL(this.files[0]);
    }
    document.querySelector('.user-avatar__container_big .user-avatar__img').style.display = 'block';
  });
}
