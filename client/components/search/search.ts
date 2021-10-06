export default function searchInput() {
  const search = document.querySelector('.input__block-text--search') as HTMLInputElement;
  const closeBtn = document.querySelector('.icon--close');
  search.addEventListener('click', () => {
    closeBtn.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    search.value = '';
    search.focus();
  })
  // search.addEventListener('focusout', () => {
  //   closeBtn.classList.remove('show');
  // });
}