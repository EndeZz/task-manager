// TODO: разобраться со вставкой svg и допилить до приемлемого вида вставку фото

const previewBox = document.querySelector('.lightbox');
const cardBox = document.querySelectorAll('.feed__card');
const closeIcon = document.querySelector('.lightbox_close');
const previewImg = document.querySelector('.lightbox__img');
const body = document.querySelector('body');

const previewAudio = document.querySelector('audio');
const playPauseBtn = document.querySelector('#audio-toggle');
const muteBtn = document.querySelector('#audio-mute');
const volBox = document.querySelector('#audio-volume');
const durBox = document.querySelector('#audio-time-duration');

let isPlaying = false;
let timer;

const openLightbox = () => {
  previewBox.classList.add('lightbox_show');
};

const closeLightbox = () => {
  previewBox.classList.remove('lightbox_show');
  body.style.overflow = 'auto';
  previewAudio.currentTime = 0;
  previewAudio.pause();
};

const activeLightbox = (e) => {
  openLightbox();

  const captionImg = e.currentTarget.querySelector('.feed__pic-photo');
  const captionText = document.querySelector('.lightbox__caption');
  const captionTitle = e.currentTarget.querySelector('.feed__title');
  // const captionSvg = e.currentTarget.querySelector('.icon');
  const captionSubTitleDate = e.currentTarget.querySelector('.feed__subtitle-date');

  body.style.overflow = 'hidden';
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

cardBox.forEach((image) => image.addEventListener('click', activeLightbox));

closeIcon.addEventListener('click', closeLightbox);

// Audio lightbox

previewAudio.src = 'https://dl.topmyz.ru/files/track/2020/08/Rick_Astley_-_Never_Gonna_Give_You_Up.mp3';

// TODO:
// реализовать отключение аудио при выходе из lightbox
// реализовать кастомную музыку
// наконец связать карту с аудио с самим аудио

function playAudio() {
  previewAudio.play();
  isPlaying = true;
}

function pauseAudio() {
  previewAudio.pause();
  isPlaying = false;
}

const updateVolume = () => {
  previewAudio.volume = volBox.value / 100;
};

const toggleVolume = () => {
  // previewAudio.muted = !previewAudio.muted;
  if (!previewAudio.muted) {
    muteBtn.classList.add('lightbox_mute');
    muteBtn.classList.remove('lightbox_volume');
    previewAudio.muted = true;
  } else {
    muteBtn.classList.remove('lightbox_mute');
    muteBtn.classList.add('lightbox_volume');
    previewAudio.muted = false;
  }
};

function getTimeCodeFromNum(time) {
  let seconds = Math.floor(time);
  let minutes = Math.floor(time / 60);
  const hours = Math.floor(minutes / 60);

  minutes -= hours * 60;
  seconds -= minutes * 60;

  if (hours === 0) {
    return `${String(minutes).padStart(2, 0)}:${String(seconds % 60).padStart(2, 0)}`;
  }
  return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(seconds % 60).padStart(2, 0)}`;
}

const updateProgress = () => {
  const progressPosition = previewAudio.duration * (durBox.value / 100);
  previewAudio.currentTime = progressPosition;
};

const updateDuration = () => {
  let position = 0;

  if (!Number.isNaN(previewAudio.duration)) {
    position = previewAudio.currentTime * (100 / previewAudio.duration);
    durBox.value = position;

    const valPercent = (durBox.value / durBox.max) * 100;
    durBox.style.background = `linear-gradient(to right, #107eff ${valPercent}%, #fff ${valPercent}%)`;
  }
};

const loadAudio = () => {
  clearInterval(timer);
  previewAudio.load();
  timer = setInterval(updateDuration, 1000);
};

loadAudio();

const toggleAudio = () => {
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }

  if (previewAudio.paused) {
    playPauseBtn.classList.remove('lightbox_play');
    playPauseBtn.classList.add('lightbox_pause');
    previewAudio.play();
  } else {
    playPauseBtn.classList.remove('lightbox_pause');
    playPauseBtn.classList.add('lightbox_play');
    previewAudio.pause();
  }
};

playPauseBtn.addEventListener('click', toggleAudio);
volBox.addEventListener('input', updateVolume);
muteBtn.addEventListener('click', toggleVolume);
durBox.addEventListener('input', updateProgress);
previewAudio.addEventListener('timeupdate', () => {
  const timeCurrent = document.getElementById('audio-caption-current');
  timeCurrent.textContent = getTimeCodeFromNum(previewAudio.currentTime);

  previewAudio.addEventListener('loadeddata', () => {
    const timeDuration = document.getElementById('audio-caption-duration');
    timeDuration.textContent = getTimeCodeFromNum(previewAudio.duration);
    previewAudio.volume = 0.5;
  });
});
