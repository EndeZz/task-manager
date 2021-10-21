import './checkbox.scss';

const checkbox = document.getElementsByName('type');

Array.from(checkbox).forEach((item) => {
  item.onclick = () => {
    const obj = Array.from(checkbox).reduce((acc, i) => {
      acc[i.value] = i.checked;
      return acc;
    }, {});
    console.log(obj);
  };
});

const checkboxs = document.querySelectorAll('.filter-role__checkbox');
const checkboxAll = document.getElementById('filter-role_all');

if (checkboxs && checkboxAll) {
  Array.from(checkboxs).forEach((item) => {
    item.onclick = () => {
      const obj = Array.from(checkboxs).reduce((acc, i) => {
        acc = (i.checked) ? acc + 1 : acc;
        return acc;
      }, 0);

      if (obj > 0 && obj < 3) {
        document.getElementById('filter-role_all').checked = false;
      } else {
        document.getElementById('filter-role_all').checked = true;
        Array.from(checkboxs).forEach((i) => {
          i.checked = false;
          return i;
        });
      }
    };
  });

  checkboxAll.addEventListener('click', () => {
    if (checkboxAll.checked) {
      Array.from(checkboxs).forEach((item) => {
        item.checked = false;
        return item;
      });
    }
  });
}
