(() => {
  let modalBtn = [...document.querySelectorAll('.section__button')];
  let closeBtn = document.querySelector('.close');
  let modalWindow = document.querySelector('.modalwindow');

  let openModal = () => {
    modalWindow.classList.add('modalwindow_active');
  }

  let closeModal = (e) => {
    let target = e.target;
    // console.log(target.closest('.modalwindow_container'));
     if (!target.closest('.modalwindow_container') || target.classList.contains('close')) {
      modalWindow.classList.remove('modalwindow_active');
    }
  }

  modalBtn.forEach(el => {
    el.addEventListener('click', openModal);
  });
  closeBtn.addEventListener('click', closeModal);
  modalWindow.addEventListener('click', closeModal);
})();