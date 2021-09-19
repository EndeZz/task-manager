import SimpleBar from 'simplebar';

const scrollEl = document.querySelector('.select__body[data-simplebar]');
if (scrollEl) {
  const scroll = new SimpleBar(scrollEl);
}

const selectHeader = document.querySelectorAll('.select__header');
const selectItem = document.querySelectorAll('.select__item');

function openSelect(select) {
  select.parentElement.classList.add('select--active');
}

function closedSelect(select) {
  select.parentElement.classList.remove('select--active');
}

function selectChoose(e) {
  const text = e.target.innerText;
  const select = e.target.closest('.select');
  const current = select.querySelector('.select__current');
  current.innerText = text;
  select.classList.remove('select--active');
}

selectItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    selectChoose(e);
  });
});

selectHeader.forEach((el) => {
  el.addEventListener('click', () => {
    const isClosed = !el.parentElement.classList.contains('select--active');
    if (isClosed) {
      openSelect(el);
    } else {
      closedSelect(el);
    }
  });
});
