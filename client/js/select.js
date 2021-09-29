const selectEl = document.querySelectorAll('.select');

selectEl.forEach((e) => {
  const selectBtn = e.querySelector('.btn__select');
  const selectList = e.querySelector('.select__list');
  const selectListItems = selectList.querySelectorAll('.select__list-item');

  function toggleDropdown() {
    selectList.classList.toggle('select__list_visible');
    this.classList.add('btn__select_active');
  }

  function selectElement() {
    selectBtn.innerText = this.innerText;
    selectBtn.focus();
    selectList.classList.remove('select__list_visible');
  }

  const closeDropdown = (elem) => {
    if (elem.target !== selectBtn) {
      selectBtn.classList.remove('btn__select_active');
      selectList.classList.remove('select__list_visible');
    }
  };

  const closeDropdownByKeydown = (elem) => {
    if (elem.key === 'Tab' || elem.key === 'Escape') {
      selectBtn.classList.remove('btn__select_active');
      selectList.classList.remove('select__list_visible');
    }
  };

  selectListItems.forEach((listItem) => {
    listItem.addEventListener('click', selectElement);
  });

  selectBtn.addEventListener('click', toggleDropdown);
  document.addEventListener('click', closeDropdown);
  document.addEventListener('keydown', closeDropdownByKeydown);
});
