export default function filter() {
  const filterButtons = document.querySelectorAll('.filter__btn') as NodeListOf<HTMLElement>;
  const filterBlock = document.querySelector('.filter') as HTMLElement;
  const elems = document.querySelectorAll('.card__item') as NodeListOf<HTMLElement>;
  filterBlock.addEventListener('click', (e: Event) => {
      filterButtons.forEach((button: HTMLElement) => {
        if (e.target === button) {
            button.classList.toggle('filter__btn--active');
            if (!button.classList.contains('filter__btn--active')) {
              button.blur();
              elems.forEach((elem) => elem.classList.remove('filter-hide'));
            } else {
              const filterClass = button.getAttribute('data-filter');
              elems.forEach((elem) => {
                if (!elem.classList.contains(filterClass)) {
                  elem.classList.add('filter-hide');
                } else {
                  elem.classList.remove('filter-hide');
                }
              })
            }
        }
      })
  })
}