  const modalOverlay = document.querySelector('.modal') as HTMLElement;
  const modalBtn = document.querySelector('.modal__btn') as HTMLButtonElement;

  const modalOpen = () => {
    modalOverlay.classList.remove('close');
  }
    
  const modalClose = () => {
    modalBtn.addEventListener('click', (e: Event) => {
      modalOverlay.classList.add('close');
      e.stopPropagation();
      document.querySelector('.modal__body').innerHTML = "";
    });

    // document.addEventListener('click', (e) => {
    //     if (e.target === modalOverlay) {
    //       modalOverlay.classList.add('close');
    //       e.stopPropagation();
    //     }
    //   });
  }

export {
  modalOpen,
  modalClose
}