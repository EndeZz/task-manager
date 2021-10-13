export default (countSecond) => {
  const hour = (countSecond / 3600 >= 1) ? `${Math.floor(countSecond / 3600)}:` : '';

  let minute = '00:';
  if (((countSecond % 3600) / 60 >= 1)) {
    minute = ((countSecond % 3600) / 60 < 10) ? `0${Math.floor((countSecond % 3600) / 60)}:` : `${Math.floor((countSecond % 3600) / 60)}:`;
  }

  let second = '00';
  if (((countSecond % 3600) % 60 >= 1)) {
    second = ((countSecond % 3600) % 60 < 10) ? `0${Math.floor((countSecond % 3600) % 60)}` : `${Math.floor((countSecond % 3600) % 60)}`;
  }

  return hour + minute + second;
};
