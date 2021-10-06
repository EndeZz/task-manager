export default function selectList() {
  const selects = document.querySelectorAll('.select__text');
  const dropdownContent = document.querySelectorAll('.select__dropdown-content__item') as NodeListOf<HTMLElement>;
  selects.forEach((select) => select.addEventListener('click', (e: Event) => {
    const target = e.currentTarget;
    if (select === target) {
      select.nextElementSibling.querySelector('.select__dropdown-content').classList.toggle('show');
    }
  }));
  dropdownContent.forEach((item) => item.addEventListener('click', (e: Event) => {
    const target = e.currentTarget as Element;
    for (let i = 0; i < target.closest('.select').children.length; i += 1) {
      target.closest('.select').querySelector('div.select__text').textContent = target.textContent;
    }
    target.closest('.select__dropdown-content').classList.remove('show');
    (<HTMLInputElement>target.closest('.select__dropdown-content')).blur();
  }));
}
