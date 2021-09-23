// Photo lightbox

// TODO: разобраться со вставкой svg и допилить до приемлемого вида вставку фото

const previewBox = document.querySelector('.lightbox');
const cardBox = document.querySelectorAll('.feed__card');
const closeIcon = document.querySelector('.lightbox__close');
const previewImg = document.querySelector('.lightbox__img');

const openPop = () => {
  previewBox.classList.add('lightbox__show');
};

const closePop = () => {
  previewBox.classList.remove('lightbox__show');
};

const activePop = (e) => {
  openPop();

  const captionImg = e.currentTarget.querySelector('img');
  const captionText = document.querySelector('.lightbox__caption');
  const captionTitle = e.currentTarget.querySelector('.feed__title');
  // const captionSvg = e.currentTarget.querySelector('.icon');
  const captionSubTitleDate = e.currentTarget.querySelector('.feed__subtitle-date');

  previewImg.src = captionImg.src;
  captionText.innerHTML = `
      <div class="type">
        <svg class="icon icon_video">
          <use xlink:href=></use>
        </svg>
        <span>Видео</span>
        <span class="type_time">02:31</span>
      </div>
      <div class="feed__info">
        <h2 class="feed__title feed__title-shift">${captionTitle.textContent}</h2>
        <span class="feed__subtitle feed__subtitle-date">${captionSubTitleDate.textContent}</span>
      </div>
`;
};

cardBox.forEach((image) => image.addEventListener('click', activePop));

closeIcon.addEventListener('click', closePop);

// Audio lightbox

const audio = document.querySelector('audio');
const playPauseBtn = document.querySelector('#audio-toggle');
const muteBtn = document.querySelector('#audio-mute');
const volBox = document.querySelector('#audio-volume');
const durBox = document.querySelector('#audio-time-duration');

let isPlaying = false;
let timer;

audio.src = 'https://dl.topmyz.ru/files/track/2020/08/Rick_Astley_-_Never_Gonna_Give_You_Up.mp3';

// TODO: сделать обновление времени
// реализовать отключение аудио при выходе из lightbox
// реализовать кастомную музыку
// наконец связать карту с аудио с самим аудио

function playAudio() {
  audio.play();
  isPlaying = true;
}

function pauseAudio() {
  audio.pause();
  isPlaying = false;
}

const updateVolume = () => {
  audio.volume = volBox.value / 100;
};

const toggleVolume = () => {
  audio.muted = !audio.muted;
  if (audio.muted) {
    muteBtn.classList.add('lightbox_mute');
    muteBtn.classList.remove('lightbox_volume');
  } else {
    muteBtn.classList.remove('lightbox_mute');
    muteBtn.classList.add('lightbox_volume');
  }
};

const updateProgress = () => {
  const progressPosition = audio.duration * (durBox.value / 100);
  audio.currentTime = progressPosition;
};

const updateDuration = () => {
  let position = 0;

  if (!Number.isNaN(audio.duration)) {
    position = audio.currentTime * (100 / audio.duration);
    durBox.value = position;
  }
};

const loadAudio = () => {
  clearInterval(timer);
  durBox.value = 0;
  audio.load();
  timer = setInterval(updateDuration, 1000);
};

loadAudio();

// function setTimeUpdate() {}

const toggleAudio = () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }

  if (audio.paused) {
    playPauseBtn.classList.remove('lightbox_play');
    playPauseBtn.classList.add('lightbox_pause');
    audio.play();
  } else {
    playPauseBtn.classList.remove('lightbox_pause');
    playPauseBtn.classList.add('lightbox_play');
    audio.pause();
  }
};

playPauseBtn.addEventListener('click', toggleAudio);
volBox.addEventListener('input', updateVolume);
muteBtn.addEventListener('click', toggleVolume);
durBox.addEventListener('input', updateProgress);
