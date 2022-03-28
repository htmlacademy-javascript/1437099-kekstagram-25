import { getFotos } from './data.js';
const userPictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const similarFotos = getFotos;
const fragment = document.createDocumentFragment();

similarFotos.forEach((foto) => {
  const fotoElement = templateFragment.cloneNode(true);
  fotoElement.querySelector('.picture__img').src = foto.url;
  fotoElement.querySelector('.picture__comments').textContent = foto.comments.length;
  fotoElement.querySelector('.picture__likes').textContent = foto.likes;

  fragment.appendChild(fotoElement);
});

userPictures.appendChild(fragment);
