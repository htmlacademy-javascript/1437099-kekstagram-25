import { getFotos } from './data.js';
import { showBigFoto } from './show-big-foto.js';


const userPictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const similarFotos = getFotos();

const bigPictureElement = document.querySelector('.big-picture');
const fragment = document.createDocumentFragment();

const completeTemplateFotos = () => {
  similarFotos.forEach((foto) => {
    const fotoElement = templateFragment.cloneNode(true);
    fotoElement.querySelector('.picture__img').src = foto.url;
    fotoElement.querySelector('.picture__comments').textContent = foto.comments.length;
    fotoElement.querySelector('.picture__likes').textContent = foto.likes;
    fragment.appendChild(fotoElement);

    fotoElement.addEventListener('click', () => { showBigFoto(foto); });
  });
  userPictures.appendChild(fragment);
};

export { completeTemplateFotos, bigPictureElement};

