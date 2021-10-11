import './search.scss';

const search = document.getElementsByClassName('search__container_search');

Array.from(search).forEach(element => {
  const input = element.querySelector('.search__input');

  input.oninput = function () {

    if (input.value != "") {
      input.classList.add('search__input_full');
    }

    else {
      input.classList.remove('search__input_full')
    }
  }

  const cross = element.querySelector('.search__img_cross');

  cross.onclick = function () {
    input.value = "";
    input.classList.remove('search__input_full');
  }
});




