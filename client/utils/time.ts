export default function (element: HTMLAudioElement | HTMLVideoElement) {
  const countSeconds = element.duration
  return formatTime((Math.trunc(+countSeconds) * 100) / 100);
}

function formatTime(time: number): string {
  const hour = (time / 3600 >= 1) ? `${Math.floor(time / 3600)}:` : '';

  let minute = '00:';
  if (((time % 3600) / 60 >= 1)) {
    minute = ((time % 3600) / 60 < 10) ? `0${Math.floor((time % 3600) / 60)}:` : `${Math.floor((time % 3600) / 60)}:`;
  }

  let second = '00';
  if (((time % 3600) % 60 >= 1)) {
    second = ((time % 3600) % 60 < 10) ? `0${Math.floor((time % 3600) % 60)}` : `${Math.floor((time % 3600) % 60)}`;
  }

  return hour + minute + second;
}