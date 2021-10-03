export default function searchInput() {
  const search = document.querySelector('.input__block-text--search');
  const closeBtn = document.querySelector('.icon--close');
  search.addEventListener('click', () => {
    closeBtn.classList.add('show');
  });
  search.addEventListener('focusout', () => {
    closeBtn.classList.remove('show');
  });
}