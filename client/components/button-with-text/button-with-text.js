import './button-with-text.scss';

if (document.querySelector('.button-home')) {
  document.querySelector('.button-home').onclick = () => {
    window.location.href = 'index.html';
  };
}

if (document.querySelector('.button-new-task')) {
  document.querySelector('.button-new-task').onclick = () => {
    window.location.href = 'new-task.html';
  };
}
