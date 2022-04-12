import {getHidden} from './get-hidden';
import {bodyElement} from './make-fotos';
const fotoEditingElement = document.querySelector('.img-upload__overlay');
const closeFormModalElement = document.getElementById('upload-cancel');
closeFormModalElement.addEventListener('click', ()=>{
  getHidden(fotoEditingElement);
  bodyElement.classList.remove('modal-open');
});

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form);

form.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const hashtag = form.querySelector('.text__hashtags');

    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

    hashtag.textContent.split(' ').forEach((el)=>{ re.test(el); });
  }
});

