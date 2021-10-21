import './input.scss';

if (document.getElementsByClassName('search__container_search')) {
  const search = document.getElementsByClassName('search__container_search');

  Array.from(search).forEach((element) => {
    const input = element.querySelector('.search__input');

    input.oninput = () => {
      if (input.value !== '') {
        input.classList.add('search__input_full');
      } else {
        input.classList.remove('search__input_full');
      }
    };

    const cross = element.querySelector('.search__img_cross');

    cross.onclick = () => {
      input.value = '';
      input.classList.remove('search__input_full');
    };
  });
}

if (document.querySelector('.password')) {
  const password = document.querySelector('.password');
  const passwordButton = document.querySelector('.password-button');

  passwordButton.addEventListener('click', () => {
    passwordButton.classList.toggle('password-button_active');
    if (passwordButton.classList.contains('password-button_active')) {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  });
}
