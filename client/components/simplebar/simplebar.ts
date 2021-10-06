import SimpleBar from 'simplebar';
export default function createScrollbar() {
  try {
    const scrollbar = document.querySelectorAll('.select__dropdown-content') as NodeListOf<HTMLElement>;
    scrollbar.forEach((item) => new SimpleBar(item).getContentElement());
  } catch (err) {
    console.log(err);
  }
};