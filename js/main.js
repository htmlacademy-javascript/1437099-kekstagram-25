import { completeTemplateFotos } from './make-fotos.js';
import { setUserFormSubmit } from './form.js';
import { closeForm } from './picture-modal.js';

fetch('https://25.javascript.pages.academy/kekstagram/data')
  .then((response)=>response.json())
  .then((similarFotos)=>
  {
    completeTemplateFotos(similarFotos);
  });

setUserFormSubmit(closeForm);
