import { bigPictureElement } from './make-fotos.js';
import { getHidden } from './get-hidden.js';
import {isEscapeKey} from './utils.js';
const bodyElement = document.querySelector('body');
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

function closeForm(){
  getHidden(formEditElement);
  bodyElement.classList.remove('modal-open');
}

formEditClose.addEventListener('click', closeForm);

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)){
    evt.preventDefault();
    getHidden(formEditElement);
    bodyElement.classList.remove('modal-open');
  }
});

loadElement.addEventListener('change', ()=>{
  formEditElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
});

export { closeBigFotoModal, openBigFotoModal, closeForm };
