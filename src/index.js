const filmBtn = document.getElementById('film-tab-btn');
const channelBtn = document.getElementById('channel-tab-btn');
const authBtn = document.getElementById('auth-btn');
const popupBtn = document.getElementById('popup-btn');
const films = document.getElementById('films-content');
const channels = document.getElementById('channels-content');
const popup = document.getElementById('popup-container');
const popupLogin = document.getElementById('login');
const auth = document.getElementById('auth');
const authExitBtn = document.getElementById('auth-btn-exit');

const active = 'active';


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}


filmBtn.addEventListener('click', () =>{
  if(filmBtn.classList.contains(active) === false){
    filmBtn.classList.toggle(active);
    if(channelBtn.classList.contains(active))
      channelBtn.classList.toggle(active);
      channels.style.display='none';
  }
  films.style.display='flex';
});

channelBtn.addEventListener('click', () =>{
  if(channelBtn.classList.contains(active) === false){
    channelBtn.classList.toggle(active);
    if(filmBtn.classList.contains(active))
      filmBtn.classList.toggle(active);
      films.style.display='none';
  }
  channels.style.display='flex';
});

authBtn.addEventListener('click', () =>{
  popup.style.display = 'flex';
});


if(getCookie('user') !== undefined ){
  authBtn.setAttribute('hidden','enabled');
  authExitBtn.removeAttribute('hidden');
  let name = getCookie('user');
  auth.innerHTML = `
    <input onclick="" id="my-input"></input>
  `;
  const inputEl = document.getElementById('my-input');
  inputEl.value = name;
}

popupBtn.addEventListener('click', () =>{
  popup.style.display = 'none';
  authBtn.setAttribute('hidden','enabled');
  authExitBtn.removeAttribute('hidden');
  let name = popupLogin.value;
  auth.innerHTML = `
    <input onclick="makeField()"" id="my-input"></input>
  `;
  const inputEl = document.getElementById('my-input');
  inputEl.value = name;
  setCookie('user',`${name}`);
});

authExitBtn.addEventListener('click', () =>{
  authExitBtn.setAttribute('hidden','enabled');
  authBtn.removeAttribute('hidden');
  auth.innerHTML = ``;
});

