import { bigPictureElement, bodyElement } from './make-fotos.js';
import { getHidden } from './get-hidden.js';
const bigPictureCancel = document.querySelector('.big-picture__cancel');
bigPictureCancel.addEventListener('click', (evt) => {
  evt.preventDefault();
  getHidden(bigPictureElement);
  bodyElement.classList.remove('modal-open');
});
window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    getHidden(bigPictureElement);
    bodyElement.classList.remove('modal-open');
  }
});

