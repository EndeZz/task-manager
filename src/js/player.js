/* eslint-disable no-console */

const volumeLevel = document.querySelector('.video__volume__level');
const video = document.querySelector('.video__content');

// const playPath = document.querySelector('#play-path');

const controls = {
  play: document.querySelector('.video__state-play'),
  pause: document.querySelector('.video__state-pause'),
  state: document.querySelector('.video__state'),
  total: document.querySelector('.video__progress'),
  buffered: null,
  progress: document.querySelector('.video__progress__current'),
  thumb: document.querySelector('.video__progress__thumb'),
  duration: document.querySelector('.video__duration__total'),
  currentTime: document.querySelector('.video__duration__current'),
  fullscreen: document.querySelector('.video__fullscreen'),
  hasHours: false,
};

const formatTime = (secs) => {
  const sec = parseInt(secs, 10);
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor(sec / 60) % 60;
  const seconds = sec % 60;

  return [hours, minutes, seconds]
    .map((v) => (v < 10 ? `0${v}` : v))
    .filter((v, i) => v !== '00' || i > 0)
    .join(':');
};

const volumeLevelClick = () => {
  video.volume = volumeLevel.value;
};

const videoPlayClick = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  controls.play.classList.toggle('video__state-hidden');
  controls.pause.classList.toggle('video__state-hidden');
  volumeLevelClick();
};

const videoDuration = () => {
  controls.hasHours = (video.duration / 3600) >= 1.0;
  controls.duration.textContent = formatTime(video.duration);
  controls.currentTime.textContent = formatTime(0);
  console.log(1);
};

const videoDurationUpDate = () => {
  controls.currentTime.textContent = formatTime(video.currentTime);
};

const videoProgress = () => {
  const progress = Math.floor(video.currentTime) / Math.floor(video.duration);
  const total = controls.total.clientWidth;
  controls.progress.style.width = `${Math.floor(progress * total)}px`;
};

const videoProgressClick = (e) => {
  const x = (e.offsetX - controls.total.offsetLeft) / controls.total.clientWidth;
  video.currentTime = x * video.duration;
};
controls.thumb.onmousedown = function (event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)
  video.pause();
  video.removeEventListener('timeupdate', videoDurationUpDate);
  video.removeEventListener('timeupdate', videoProgress);
  // shiftY здесь не нужен, слайдер двигается только по горизонтали
  // eslint-disable-next-line no-shadow
  const videoProgressMouseMove = (event) => {
    const newLeft = (event.offsetX - controls.total.offsetLeft) / controls.total.clientWidth;
    controls.progress.style.width = `${Math.floor((Math.floor(video.currentTime) / Math.floor(video.duration)) * controls.total.clientWidth)}px`;
    video.currentTime = newLeft * video.duration;
    console.log(controls.progress.style.width);
  };
  function videoProgressMouseUp() {
    document.removeEventListener('mouseup', videoProgressMouseUp);
    document.removeEventListener('mousemove', videoProgressMouseMove);
    video.addEventListener('timeupdate', videoDurationUpDate);
    video.addEventListener('timeupdate', videoProgress);
    // video.play();
  }

  document.addEventListener('mousemove', videoProgressMouseMove);
  document.addEventListener('mouseup', videoProgressMouseUp);
};

const videoFullscreenClick = () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
  // video.classList.toggle('video__fullscreen-active');
};

controls.fullscreen.addEventListener('click', videoFullscreenClick);
volumeLevel.addEventListener('input', volumeLevelClick);
controls.state.addEventListener('click', videoPlayClick);
video.addEventListener('canplay', videoDuration);
video.addEventListener('timeupdate', videoDurationUpDate);
video.addEventListener('timeupdate', videoProgress);
controls.total.addEventListener('click', videoProgressClick);
