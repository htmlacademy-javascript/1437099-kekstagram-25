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
    const hashtag = form.querySelector('.text__hashtags');
    const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
    const hastagInput = hashtag.value.split(' ');
    if(hastagInput.length > 5){ console.log('нельзя отправлять, не больше 5 хэштегов'); }
    if(hastagInput.every((e, i, a) => a.indexOf(e) === i)){ console.log('нет повторяющихся') } else{ console.log('повторяющиеся хэштеги')};
    for (let i=0; i<hastagInput.length; i++){
      if(!re.test(hastagInput[i])){
        console.log('неверный хэштег');
      }
    }
  } else {
    console.log('нельзя отправлять');
  }
});


