import SimpleBar from 'simplebar';

try {
  const scrollbar = new SimpleBar(document.querySelector('.select__dropdown-content'));
} catch (err) {
  console.log(err);
}