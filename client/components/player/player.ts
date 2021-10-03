// interface Cards {
//   url: string, 
//   name: string,
//   id: number,
//   format: string,
//   type: {
//     name: string;
//     id: number;
//   }, 
//   dateCreated: string, 
//   author: {
//     name: string;
//     id: number
//   }
//   preview: string;
// }

export function playerGenerate(elem: HTMLElement, cards: any, contentTypePath: string) {
  const div = document.createElement('div') as HTMLElement;
  // const contentTypePath = require('../../../public/img/icons/icon.svg');
  div.classList.add(`player__${cards.type.name}`);
  switch (`${cards.type.name}`) {
    case 'video': {
      div.innerHTML = `
          <div class="player__${cards.type.name}-view">
            <video class="player__${cards.type.name}-custom">
              <source class="player-${cards.type.name}__url" src="${cards.url}" type="${cards.type.name}/mp4"></source>
            </video>
            <div class="player__controls">
              <div class="player__progress">
                <progress class="player__progress--filled" min="0" value="0"></progress>
                <input class="player__track player__track--${cards.type.name}" type="range" min="1" max="100" value="0" />
              </div>
              <div class="player__buttons-container">
                <div class="player-left__side">
                  <button class="player__btn-play" type="button">
                    <svg class="icon icon--play">
                        <use xlink:href=${contentTypePath}#play-icon></use>
                        <use class="hidden" xlink:href=${contentTypePath}#stop-icon></use>
                    </svg>
                  </button>
                  <div class="player__controls-volume">
                        <button class="player__btn-volume btn__volume-high" type="button">
                          <svg class="icon icon--volume">
                              <use xlink:href=${contentTypePath}#volume-icon></use>
                              <use class="hidden" xlink:href=${contentTypePath}#muted-icon></use>
                          </svg>
                        </button>
                        <div class="player__volume-box">
                          <input class="player__slider-volume player__slider--${cards.type.name}" type="range" name="volume" value="0.5" max="1" min="0" step="0.01" />
                          <progress class="player__progress-volume--filled" min="0" max="1" value="0.5"></progress>
                        </div>
                  </div>
                </div>
                <div class="player-right__side">
                  <span class="player__time-codes">
                    <span class="player-time__code player-time__code--current">00:00 /</span>
                    <span class="player-time__code player-time__code--duration"> 00:00</span>
                  </span>
                  <button class="player__btn-fullscreen btn-fullscreen" type="button">
                    <svg class="icon icon--fullscreen">
                      <use xlink:href=${contentTypePath}#fullscreen-icon></use>
                      <use class="hidden" xlink:href=${contentTypePath}#collapse-icon></use>
                    </svg>
                  </button>
                </div>
            </div>
          </div>
      `;
      break;
    }

    case 'audio': {
      div.innerHTML = `
          <div class="player__${cards.type.name}-view">
            <audio class="player__${cards.type.name}-custom">
              <source class="player-${cards.type.name}__url src=${cards.url} type="${cards.type.name}/${cards.format}"></source>
            </audio>
            <div class="player__controls player__controls--${cards.type.name}">
              <div class="player__buttons-container">
                <div class="player-left__side">
                  <button class="player__btn-play" type="button">
                    <svg class="icon icon--play">
                        <use xlink:href=${contentTypePath}#play-icon></use>
                        <use class="hidden" xlink:href=${contentTypePath}#stop-icon></use>
                    </svg>
                  </button>
                  <div class="player__progress player__progress--${cards.type.name}">
                      <progress class="player__progress--filled" min="0" value="0"></progress>
                      <input class="player__track player__track--${cards.type.name}" type="range" min="1" max="100" value="0" />
                  </div>
                  <div class="player__controls-volume">
                        <button class="player__btn-volume btn__volume-high" type="button">
                          <svg class="icon icon--volume">
                              <use xlink:href=${contentTypePath}#volume-icon></use>
                              <use class="hidden" xlink:href=${contentTypePath}#muted-icon></use>
                          </svg>
                        </button>
                        <div class="player__volume-box">
                          <input class="player__slider-volume player__slider--${cards.type.name}" type="range" name="volume" value="0.5" max="1" min="0" step="0.01" />
                          <progress class="player__progress-volume--filled" min="0" max="1" value="0.5"></progress>
                        </div>
                  </div>
                </div>
                <div class="player-right__side">
                  <span class="player__time-codes">
                    <span class="player-time__code player-time__code--current">00:00 /</span>
                    <span class="player-time__code player-time__code--duration"> 00:00</span>
                  </span>
                </div>
            </div>
          </div>
        `;
        break;
    }

    case 'photo': {
      div.innerHTML = `
          <div class=${cards.type.name}>
            <div class=${cards.type.name}-view>
                <img class=${cards.type.name}-custom src=${cards.url}  alt="Фотография"/>
            </div>
          </div>
      `;
      break;
    }
  }

  elem.append(div);
  player(`${cards.type.name}`);
}

export default function player(type: string) {
  const elem = document.querySelector(`${type}`) as HTMLMediaElement;
  const play = () => {
    const playBtn = document.querySelector('.player__btn-play');
    const playBtnIcons = document.querySelectorAll('.player__btn-play .icon use');
    const togglePlay = () => {
      if (elem.paused || elem.ended) {
        elem.play();
      } else {
        elem.pause();
      }
    };
    const updatePlayButton = () => {
      playBtnIcons.forEach((icon) => icon.classList.toggle('hidden'));
    };
    playBtn.addEventListener('click', togglePlay);
    elem.addEventListener('play', updatePlayButton);
    elem.addEventListener('pause', updatePlayButton);
  };

  const timeElem = () => {
    const timeElapsed = document.querySelector('.player-time__code--current') as HTMLElement;
    const duration = document.querySelector('.player-time__code--duration') as HTMLElement;
    const progressBar = document.querySelector('.player__progress--filled') as HTMLProgressElement;
    const track = document.querySelector('.player__track') as HTMLProgressElement;
    function formatTime(timeInSeconds: string) {
      const result = new Date(+timeInSeconds * 1000).toISOString().substr(11, 8);
      return {
        minutes: result.substr(3, 2),
        seconds: result.substr(6, 2),
      };
    }
    const initializeelem = () => {
      const elemDuration = Math.round(elem.duration);
      const time = formatTime(elemDuration.toString());
      track.setAttribute('max', elemDuration.toString());
      progressBar.setAttribute('max', elemDuration.toString());
      duration.innerText = `${time.minutes}:${time.seconds}`;
      duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
    };
    const updateTimeElapsed = () => {
      const time = formatTime(Math.round(elem.currentTime).toString());
      timeElapsed.innerText = `${time.minutes}:${time.seconds} / `;
      timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
    };
    const updateProgress = () => {
      track.value = Math.floor(elem.currentTime);
      progressBar.value = Math.floor(elem.currentTime);
    };
    const skipAhead = (event: Event) => {
      const skipTo = event !== null && event.target instanceof HTMLElement ? event.target.dataset.track : (<HTMLInputElement>event.target).value;
      elem.currentTime = +skipTo;
      progressBar.value = +skipTo;
      track.value = +skipTo;
    };
    elem.addEventListener('timeupdate', updateTimeElapsed);
    elem.addEventListener('loadedmetadata', initializeelem);
    elem.addEventListener('timeupdate', updateProgress);
    track.addEventListener('input', skipAhead);
  };
  const volumeFunc = () => {
    const volumeBtn = document.querySelector('.player__btn-volume');
    const volumeIcons = document.querySelectorAll('.player__btn-volume .icon use');
    const volume = document.querySelector('.player__slider-volume') as HTMLProgressElement;
    const volumeProgress = document.querySelector('.player__progress-volume--filled') as HTMLProgressElement;

    const updateVolume = () => {
      if (elem.muted) {
        elem.muted = false;
      }
      elem.volume = volume.value;
      volumeProgress.value = volume.value;
    };

    const updateVolumeIcon = () => {
      if (elem.muted || elem.volume === 0) {
        volumeIcons[1].classList.remove('hidden');
        volumeIcons[0].classList.add('hidden');
      } else {
        volumeIcons[1].classList.add('hidden');
        volumeIcons[0].classList.remove('hidden');
      }
    };
    const toggleMute = () => {
      elem.muted = !elem.muted;
      if (elem.muted) {
        volume.setAttribute('data-volume', volume.value.toString());
        volume.value = 0;
        volumeProgress.value = 0;
      } else {
        volume.value = +volume.dataset.volume;
        volumeProgress.value = +volume.dataset.volume;
      }
    };
    const skipAheadVolume = (event: Event) => {
      const skipTo = event !== null && event.target instanceof HTMLElement ? event.target.dataset.volume : (<HTMLInputElement>event.target).value;
      volumeProgress.value = +skipTo;
      volume.value = +skipTo;
    };
    volumeBtn.addEventListener('click', toggleMute);
    volume.addEventListener('input', updateVolume);
    elem.addEventListener('input', skipAheadVolume);
    elem.addEventListener('volumechange', updateVolumeIcon);
  };
  const fullScreeen = () => {
    const fullscreenBtn = document.querySelector('.player__btn-fullscreen');
    const videoContainer = document.querySelector('.player__video-view');
    const video = document.querySelector('.player__video-custom');
    const fullscreenIcons = document.querySelectorAll('.player__btn-fullscreen .icon use');

    const toggleFullScreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoContainer.requestFullscreen();
      }

      fullscreenIcons.forEach((icon) => icon.classList.toggle('hidden'));

      if (document.fullscreenElement) {
        fullscreenBtn.setAttribute('data-title', 'Exit full screen (f)');
        video.classList.remove('fullscreen');
      } else {
        fullscreenBtn.setAttribute('data-title', 'Full screen (f)');
        video.classList.add('fullscreen');
      }
    };
    fullscreenBtn.addEventListener('click', toggleFullScreen);
  };

  play();
  timeElem();
  volumeFunc();
  fullScreeen();
}
