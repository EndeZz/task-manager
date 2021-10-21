import './select.scss';

const selectBox = document.getElementsByClassName('select-box');

Array.from(selectBox).forEach((select) => {
  const input = select.querySelector('.select');
  input.addEventListener('click', () => {
    select.classList.toggle('select-box_active');
  });

  const items = select.getElementsByClassName('select__item');

  Array.from(items).forEach((item) => {
    item.addEventListener('click', () => {
      if (input.classList.contains('select-status')) {
        input.style.color = getComputedStyle(item).color;
        input.style.fontWeight = +getComputedStyle(item).fontWeight;
      }
      input.value = item.innerText;
      input.dataset.value = item.dataset.value;
      select.classList.toggle('select-box_active');
    });
  });
});
