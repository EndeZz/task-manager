// Dropdown on profile
const profile = document.querySelector('#profile-toggle');

function menuToggle() {
  const toggleMenu = document.querySelector('.dropdown');
  toggleMenu.classList.toggle('dropdown_active');
}
profile.addEventListener('click', menuToggle);
