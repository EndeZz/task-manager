export default function (countSecond) {
  return ((countSecond / 3600 >= 1) ? Math.floor(countSecond / 3600) + ':' : '') +
    ((countSecond % 3600 / 60 >= 10) ?
      Math.floor(countSecond % 3600 / 60) + ':' :
      ((countSecond % 3600 / 60 >= 1) ?
        '0' + Math.floor(countSecond % 3600 / 60) + ':' : '00:')) +
    ((countSecond % 3600 % 60 >= 10) ? Math.floor(countSecond % 3600 % 60) : ((countSecond % 3600 % 60 >= 1) ? '0' + Math.floor(countSecond % 3600 % 60) : '00'))
}