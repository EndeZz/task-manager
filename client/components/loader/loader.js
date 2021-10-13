import './loader.scss';

const loadIndicator = document.querySelector('.loader');

document.addEventListener('scroll', () => {
  const scrollPosition = document.body.getBoundingClientRect().bottom - window.innerHeight;

  if (Math.floor(scrollPosition) <= 0) {
    loadIndicator.style.display = 'block';
  }
});
