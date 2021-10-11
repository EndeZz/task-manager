import './checkbox.scss';

const checkbox = document.getElementsByName('type')

Array.from(checkbox).forEach((item) =>
  item.onclick = function () {
    let obj = Array.from(checkbox).reduce((acc, i) => {
      acc[i.value] = i.checked;
      return acc;
    }, {})
    console.log(obj);
  });