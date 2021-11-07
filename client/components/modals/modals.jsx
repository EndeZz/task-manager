// import './modals.pug';
import './modals.scss';
// import '../../styles/common.scss';


// import React, {Component} from 'react';


// class Modals extends Component {
//     render() {
//       return pug`
//           ${this.props.children[1].map((item, ind) => pug`

//           `)}
//       `;
//   }
// }


// export default Modals;


// const video = document.querySelector('.player-block__setting-video');
// const playBtn = document.querySelector('.controls__play');
// const playBtnImg = document.querySelector('.controls__play-btn');
// // const progress = (<HTMLInputElement>document.querySelector('.controls__progress'));
// const progress = document.querySelector('.controls__progress');
// const volumeVideo = document.querySelector('.controls__progress-audio');
// const time = document.querySelector('.controls__duration-video');
// const audio = document.querySelector('.audio-block__audio-music');
// const playAudioBtn = document.querySelector('.audio-block__audio-play');
// const playAudioBtnImg = document.querySelector('.audio-block__audio-btn');
// const progressAudio = document.querySelector('.audio-block__progress');
// const volumeAudio = document.querySelector('.audio-block__progress-control');
// const timeAudio = document.querySelector('.audio-block__duration-video');

// let cardImg = document.querySelectorAll('.card__column');
// cardImg.forEach(el => {
//   el.addEventListener('click', () => {

//     let BlockName = el.querySelector('.card__column-type').textContent;

//     if (BlockName === 'Видео') {
//       document.querySelector('.player-block').setAttribute('style', "display: block")
//       document.querySelector('.player-block').classList.add('popup_open');

//       document.querySelector('.player-block__time-duration').textContent = el.querySelector('.card__column-time').textContent;
//       document.querySelector('.player-block__text').textContent = el.querySelector('.card__column-text').textContent;
//       document.querySelector('.player-block__content-data').textContent = el.querySelector('.card__column-public_data').textContent;

//       window.addEventListener('click', (event) => {
//         const modal = document.querySelector('.player-block__descr');

//         if (event.target === modal) {
//           document.querySelector('.player-block').setAttribute('style', 'display: none;');
//           document.querySelector('.player-block').classList.remove('popup_open');
//         }
//       });
//     } else if (BlockName === 'Фото') {
//       document.querySelector('.photo-block').setAttribute('style', "display: block;");
//       document.querySelector('.photo-block').classList.add('popup_open');

//       // Ставим нужную картинку
//       let srcImg = document.querySelectorAll('.card__column-img');
//       srcImg.forEach(val => {
//         val.addEventListener('click', () => {
//           let path = val.getAttribute('src');
//           console.log('elem', val);
//           document.querySelector('.photo-block__setting-img').setAttribute('src', path);
//         });
//       });

//       window.addEventListener('click', (event) => {
//         const modal = document.querySelector('.photo-block__descr');
//         if (event.target === modal) {
//           document.querySelector('.photo-block').setAttribute('style', 'display:none;');
//           document.querySelector('.photo-block').classList.remove('popup_open');
//         }
//       });
//     } else if (BlockName === 'Аудио') {
//       document.querySelector('.audio-block').setAttribute('style', 'display: block');
//       document.querySelector('.audio-block').classList.add('popup_open');

//       window.addEventListener('click', (event) => {
//         const modal = document.querySelector('.audio-block__descr');
//         if (event.target === modal) {
//           document.querySelector('.audio-block').setAttribute('style', 'display: none;')
//           document.querySelector('.audio-block').classList.remove('popup_open');

//           audio.pause();
//           playAudioBtnImg.src = './img/play-icon..svg';
//         }
//       });
//     }
//   });
// });

// const playerBtn = document.querySelector('.player-block__btn');
// const photoBtn = document.querySelector('.photo-block__btn');
// const audioBtn = document.querySelector('.audio-block__btn');

//   playerBtn.addEventListener('click', () => {
//     document.querySelector('.player-block').setAttribute('style', 'display: none');
//   });
//   photoBtn.addEventListener('click', () => {
//     document.querySelector('.photo-block').setAttribute('style', 'display: none');
//   });
//   audioBtn.addEventListener('click', () => {
//     document.querySelector('.audio-block').setAttribute('style', 'display: none');
//   });

// function toggleVideoStatus() {
//   if (video.paused) {
//     video.play();
//     playBtnImg.src = './img/pause-icon..svg';
//   } else {
//     video.pause();
//     playBtnImg.src = './img/play-icon..svg';
//   }
// }



// function updateProgress() {
//   let tmp = 0
//   tmp = (video.currentTime / video.duration) * 100;
//   progress.setAttribute('value', String(tmp)); 

//    let minutes = Math.floor(video.currentTime / 60);
//   if (minutes < 10) {
//     minutes = '0' + String(minutes);
//   }

//   let seconds = Math.floor(video.currentTime % 60);
//   if (seconds < 10) {
//     seconds = '0' + String(seconds);
//   }

//   time.innerHTML = `${minutes}:${seconds}`;
// }




// function setProgress() {
//     // let progressVal: any = progress.value
//     let progressVal = progress.getAttribute('value');
//   video.currentTime = (progressVal * video.duration) / 100;
// }


// function setVolume() {
//   video.volume = this.value / 100;
// }


// АУДИО

// function toggleAudioStatus() {
//   if (audio.paused) {
//     audio.play();
//     playAudioBtnImg.src = './img/pause-icon..svg';
//   } else {
//     audio.pause();
//     playAudioBtnImg.src = './img/play-icon..svg';
//   }
// }


// function updateAudioProgress() {
//     let progAudio = (audio.currentTime / audio.duration) * 100;
//   progressAudio.value = progAudio

//   let minutes = Math.floor(audio.currentTime / 60);
//   if (minutes < 10) {
//     minutes = '0' + String(minutes);
//   }

//   let seconds = Math.floor(audio.currentTime % 60);
//   if (seconds < 10) {
//     seconds = '0' + String(seconds);
//   }

//   timeAudio.innerHTML = `${minutes}:${seconds}`;
// }

// function setAudioProgress() {
//   let progAudio = progressAudio.value
//   audio.currentTime = (progAudio * audio.duration) / 100;
// }

// // Громкость
// function setAudioVolume() {
//   audio.volume = this.value / 100;
// }



// if (playBtn && video && progress && volumeVideo && playAudioBtn && audio && progressAudio && volumeVideo) {
//   playBtn.addEventListener('click', toggleVideoStatus);
//   video.addEventListener('click', toggleVideoStatus);
//   video.addEventListener('timeupdate', updateProgress);
//   progress.addEventListener('change', setProgress);
//   volumeVideo.addEventListener('change', setVolume);
//   volumeVideo.addEventListener('input', setVolume);
//   playAudioBtn.addEventListener('click', toggleAudioStatus);
//   audio.addEventListener('click', toggleAudioStatus);
//   audio.addEventListener('timeupdate', updateAudioProgress);
//   progressAudio.addEventListener('change', setAudioProgress);
//   volumeAudio.addEventListener('change', setAudioVolume);
//   volumeAudio.addEventListener('input', setAudioVolume);
// }



