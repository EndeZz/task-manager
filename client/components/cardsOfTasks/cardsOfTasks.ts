export default function hideText(elems: NodeListOf<HTMLElement>) {
  elems.forEach((elem) => {
    if (elem.textContent.length > 50) {
      console.log(elem.textContent.length);
      const span = document.createElement('span') as HTMLElement;
      span.classList.add('gradientText');
      elem.append(span);
    }
  });
};
