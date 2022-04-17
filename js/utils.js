const checkStringLength = (string, length) => string.length <= length;


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makeIdGenerator = () => {
  let id = 0;
  return () => { id = id + 1; return id; };
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const bodyElement = document.querySelector('body');


const showError = () => {
  const templateErrFragment = document.querySelector('#error').content.querySelector('.error');
  const errorElement = templateErrFragment.cloneNode(true);
  bodyElement.appendChild(errorElement);
  const errButtonEl = errorElement.querySelector('.error__button');
  errButtonEl.addEventListener('click', () => {
    errorElement.classList.add('hidden');
  });
};

const showSuccess = () => {
  const templateSuccessFragment = document.querySelector('#success').content.querySelector('.success');
  const successElement = templateSuccessFragment.cloneNode(true);
  bodyElement.appendChild(successElement);
  const successButtonEl = successElement.querySelector('.success__button');
  successButtonEl.addEventListener('click', () => {
    successElement.classList.add('hidden');
  });
};

export { getRandomPositiveInteger, getRandomArrayElement, checkStringLength, makeIdGenerator, isEscapeKey, showError,showSuccess };
