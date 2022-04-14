const bodyElement = document.querySelector('body');
const fotoEditingElement = document.querySelector('.img-upload__overlay');
const closeFormModalElement = document.getElementById('upload-cancel');

closeFormModalElement.addEventListener('click', ()=>{
  fotoEditingElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
});

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form);

form.addEventListener('submit',(evt)=>{
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    const hashtagInput = form.querySelector('.text__hashtags');
    pristine.addValidator(hashtagInput, (value) => {
      const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
      const hastagInputArray = value.split(' ');
      if (hastagInputArray.length <= 5 && hastagInputArray.every( (e, i, a) => a.indexOf(e) === i ) && hastagInputArray.forEach((el)=>re.test(el))){
        return true;
      }
      return false;
    },  'errorMessage', 2, false);
  } else {
    console.log('нельзя отправлять');
  }
});
