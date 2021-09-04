// import SimpleBar from 'simplebar';

// const scrollbar = new SimpleBar(document.querySelector('.dropdown__content--select'));
// scrollbar.getContentElement();

const search = document.querySelector('.input__block-text--search');
const closeBtn = document.querySelector('.icon--close');

search.addEventListener('click', () => {
  closeBtn.classList.add('show');
});

search.addEventListener('focusout', () => {
  closeBtn.classList.remove('show');
});

document.querySelector('.user__btn').addEventListener('click', () => {
  document.querySelector('.user__btn').nextElementSibling.querySelector('.dropdown__content').classList.toggle('show');
});

document.querySelectorAll('.input__block-text').forEach((input) => input.addEventListener('click', (e) => {
  const target = e.currentTarget;
  if (input === target) {
    input.nextElementSibling.querySelector('.dropdown__content').classList.toggle('show');
    input.blur();
  }
}));

document.querySelectorAll('.dropdown__content-item').forEach((item) => item.addEventListener('click', (e) => {
  const target = e.currentTarget;
  for (let i = 0; i < target.closest('.input__block').children.length; i += 1) {
    target.closest('.input__block').querySelector('div.input__block-text').textContent = target.textContent;
  }
  target.closest('.dropdown__content').classList.remove('show');
  target.closest('.dropdown__content').blur();
}));
