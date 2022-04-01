import { bigPictureElement, bodyElement } from './make-fotos.js';
const bigPictureCancel = document.querySelector('.big-picture__cancel');
bigPictureCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
});
window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    bigPictureElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  }
});

