import { getFotos } from './data.js';
const userPictures = document.querySelector('.pictures');
const templateFragment = document.querySelector('#picture').content.querySelector('.picture');

const similarFotos = getFotos();
const fragment = document.createDocumentFragment();

const completeTemplateFotos = () => {
  similarFotos.forEach((foto) => {
    const fotoElement = templateFragment.cloneNode(true);
    fotoElement.querySelector('.picture__img').src = foto.url;
    fotoElement.querySelector('.picture__comments').textContent = foto.comments.length;
    fotoElement.querySelector('.picture__likes').textContent = foto.likes;
    fragment.appendChild(fotoElement);
    fotoElement.addEventListener('click', () => {
      const bigPictureElement = document.querySelector('.big-picture');
      bigPictureElement.classList.remove('hidden');
      const bodyElement = document.querySelector('body');
      bodyElement.classList.add('modal-open');
      const commentsCountElement = document.querySelector('.social__comment-count');
      commentsCountElement.classList.add('hidden');
      const commentsLoaderElement = document.querySelector('.comments-loader');
      commentsLoaderElement.classList.add('hidden');

      const bigPictureCancel = document.querySelector('.big-picture__cancel');
      bigPictureCancel.addEventListener('click', (evt) => {
        evt.preventDefault();
        bigPictureElement.classList.add('hidden');
        bodyElement.classList.remove('modal-open');
      });
      window.addEventListener('keydown', (evt) => {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          bigPictureElement.classList.add('hidden');
          bodyElement.classList.remove('modal-open');
        }
      });

      const bigImageElement = bigPictureElement.querySelector('.big-picture__img');
      const bigImage = bigImageElement.querySelector('img');
      bigImage.src = foto.url;
      const likesNumberElement = bigPictureElement.querySelector('.likes-count');
      likesNumberElement.textContent = foto.likes;
      const commentsNumberElement = bigPictureElement.querySelector('.comments-count');
      commentsNumberElement.textContent = foto.comments.length;

      const commentsContainerElement = bigPictureElement.querySelector('.social__comments');
      const commentElement = commentsContainerElement.querySelector('.social__comment');

      const fragmentComments = document.createDocumentFragment();
      commentsContainerElement.innerHTML = '';
      foto.comments.forEach((fotoComment) => {
        const commentTemplate = commentElement.cloneNode(true);
        const CommentElementAvatar = commentTemplate.querySelector('.social__picture');
        CommentElementAvatar.src = fotoComment.avatar;
        const bigPictureCommentElementText = commentTemplate.querySelector('.social__text');
        bigPictureCommentElementText.textContent = fotoComment.message;
        fragmentComments.appendChild(commentTemplate);
      });
      commentsContainerElement.appendChild(fragmentComments);

      const fotoDescriptionElement = bigPictureElement.querySelector('.social__caption');
      fotoDescriptionElement.textContent = foto.description;
    });
  });
  userPictures.appendChild(fragment);
};

export { completeTemplateFotos };

