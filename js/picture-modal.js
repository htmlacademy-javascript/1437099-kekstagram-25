import { bigPictureElement, bodyElement } from './make-fotos.js';
import { getHidden } from './get-hidden.js';
import {isEscapeKey} from './utils.js';

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigFotoModal();
  }
};

function openBigFotoModal(){
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    onPopupEscKeydown(evt);
  });
}

function closeBigFotoModal(){
  getHidden(bigPictureElement);
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', (evt) => {
    onPopupEscKeydown(evt);
  });
}
const formEditClose = document.querySelector('.img-upload__cancel');

const formEditElement = document.querySelector('.img-upload__overlay');
const loadElement =  document.getElementById('upload-file');

loadElement.addEventListener('change', ()=>{
  formEditElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');

  formEditClose.addEventListener('click', ()=>{
    formEditElement.classList.add('hidden');
    bodyElement.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      formEditElement.classList.add('hidden');
      bodyElement.classList.remove('modal-open');
    }
  });
});

export { closeBigFotoModal, openBigFotoModal };
