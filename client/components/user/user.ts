export default function userMenu() {
  const userMenuBtn = document.querySelector('.user__btn') as HTMLButtonElement;
  userMenuBtn.addEventListener('click', () => {
    document.querySelector('.dropdown__content--avatar').classList.toggle('show');
  });
}