function selectList() {
  const selects = document.querySelectorAll('.select__text');
  const dropdownContent = document.querySelectorAll('.select__dropdown-content__item');
  selects.forEach((select) => select.addEventListener('click', (e) => {
    const target = e.currentTarget;
    if (select === target) {
      select.nextElementSibling.querySelector('.select__dropdown-content').classList.toggle('show');
      select.blur();
    }
  }));
  dropdownContent.forEach((item) => item.addEventListener('click', (e) => {
    const target = e.currentTarget;
    for (let i = 0; i < target.closest('.select').children.length; i += 1) {
      target.closest('.select').querySelector('div.select__text').textContent = target.textContent;
    }
    target.closest('.select__dropdown-content').classList.remove('show');
    target.closest('.select__dropdown-content').blur();
  }));
}

function userMenu() {
  document.querySelector('.user__btn').addEventListener('click', () => {
    document.querySelector('.user__btn').nextElementSibling.querySelector('.dropdown__content').classList.toggle('show');
  });
}

function searchInput() {
  const search = document.querySelector('.input__block-text--search');
  const closeBtn = document.querySelector('.icon--close');
  search.addEventListener('click', () => {
    closeBtn.classList.add('show');
  });
  search.addEventListener('focusout', () => {
    closeBtn.classList.remove('show');
  });
}

export {
  selectList,
  searchInput,
  userMenu,
};
