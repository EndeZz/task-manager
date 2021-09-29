const contentList = document.querySelector('.feed__cards');
const checkbox = document.querySelector('.control__list');
const loader = document.querySelector('.loader');

const removeLoader = () => {
  contentList.classList.remove('feed__card_load');
  loader.classList.remove('loader_filtration');
};

const load = () => {
  contentList.classList.add('feed__card_load');
  loader.classList.add('loader_filtration');
  setTimeout(removeLoader, 1000);
};

checkbox.addEventListener('change', () => {
  load();
});
