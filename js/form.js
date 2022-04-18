import {showError, showSuccess} from './utils.js';
const bodyElement = document.querySelector('body');
const fotoEditingElement = document.querySelector('.img-upload__overlay');
const closeFormModalElement = document.getElementById('upload-cancel');

closeFormModalElement.addEventListener('click', ()=>{
  fotoEditingElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
});

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form);

const hashtagInput = form.querySelector('.text__hashtags');
pristine.addValidator(hashtagInput, (value) => {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  const hastagInputArray = value.split(' ');
  if (hastagInputArray.length <= 5 && hastagInputArray.every( (element, index, array) => array.indexOf(element) === index ) && hastagInputArray.every((element) => re.test(element))){
    return true;
  }
  return false;
},  'errorMessage', 2, false);

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      fetch('https://25.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formData
        },
      ).then(() => onSuccess()).then(() => showSuccess())
        .catch(() => showError());
      evt.target.reset();
    }
  });
};

const scaleSmallerBtn = fotoEditingElement.querySelector('.scale__control--smaller');
const scaleBiggerBtn = fotoEditingElement.querySelector('.scale__control--bigger');
const scaleValue = fotoEditingElement.querySelector('.scale__control--value');
const sliderScaleElement = fotoEditingElement.querySelector('.img-upload__effect-level');

noUiSlider.create(sliderScaleElement, {
  range: {
    min: 25,
    max: 100,
  },
  start: 50,
  step: 25,
  connect: 'lower',
});
sliderScaleElement.noUiSlider.on('update', () => {
  const valueScale = scaleValue.value = sliderScaleElement.noUiSlider.get();
  const imagePreview = document.querySelector('img-upload__preview');
  imagePreview.style.transform = `scale(${valueScale/100})`;
});

export {setUserFormSubmit};


