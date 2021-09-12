window.addEventListener('DOMContentLoaded', () => {
  // const btnTypeContent = document.querySelectorAll('.btn__type-content');
  const headerUserLink = document.querySelector('.header-user__link');
  const userMenuBtn = document.querySelector('.header-user__profile-box');
  const userProfile = document.querySelector('.header-user__profile');

  headerUserLink.addEventListener('click', () => {
    headerUserLink.classList.toggle('active');
  });

  userMenuBtn.addEventListener('click', () => {
    userProfile.classList.toggle('active');
  });
  // eslint-disable-next-line no-undef
  dycalendar.draw({
    target: '#dycalendar',
    type: 'month',
    dayformat: 'full',
    monthformat: 'full',
    highlighttargetdate: true,
    prevnextbutton: 'show',
  });
});
