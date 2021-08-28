window.addEventListener('DOMContentLoaded', () => {
  // popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    const popupBtn = document.querySelectorAll('.header__btn');
    const formName = document.querySelectorAll('.form-name');
    const formPassword = document.querySelectorAll('.form-password');

    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });

    popup.addEventListener('click', (event) => {
      let { target } = event;
      if (target.classList.contains('form__btn')) {
        if (!formName && !formPassword) {
          popup.style.display = 'none';
        }
      } else {
        target = target.closest('.popup__content');
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };
  togglePopUp();

  // tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.tabs__title');
    const tab = tabHeader.querySelectorAll('.tabs__title-text');
    const tabContent = document.querySelectorAll('.tabs__content');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let { target } = event;
      target = target.closest('.tabs__title-text');
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  tabs();
});
