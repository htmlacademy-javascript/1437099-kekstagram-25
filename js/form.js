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

form.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  pristine.validate();
  evt.target.reset();
});
