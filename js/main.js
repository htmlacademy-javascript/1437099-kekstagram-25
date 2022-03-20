function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

function checkStringLength(string, length) {
  return string.length <= length;
}
checkStringLength('ghbdt', 80);


const FOTOS_NUMBER = 25;
const DESCRIPTIONS = [
  'лето в деревне',
  'рыжий кот',
  'школа',
  'закат на море',
  'кокосовая пальма',
  'яхта',
  'английский завтрак',
  'праздничный торт',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const AUTHOR_NAMES = [
  'Артем',
  'Александр',
  'Роман',
  'Василий',
  'Павел',
  'Константин',
  'Ольга',
  'Анна',
  'Наталья',
  'Анастасия',
  'Елена',
];
const AVATARS_NUMBER = 6;
const fotosIndexes = Array.from({ length: FOTOS_NUMBER }, (currentValue, index) => index + 1);
const urlIndexes = fotosIndexes.slice();

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];
const makeIdGenerator = () => {
  let id = 0;
  return () => { id = id + 1; return id; };
};
const idGenerator = makeIdGenerator();

function createFotoCard() {
  const commentsNumber = getRandomPositiveInteger(1, 100);
  const createComment = () => {
    const randomMessageLength = getRandomPositiveInteger(1, 2);
    const getmessageFrase = () => {
      const messageFrase = [];
      for (let i = 0; i < randomMessageLength; i++) {
        messageFrase.push(getRandomArrayElement(MESSAGES));
      }
      return messageFrase.join(' ');
    };
    return {
      id: idGenerator(),
      avatar: `img/avatar-${getRandomPositiveInteger(1, AVATARS_NUMBER)}.svg`,
      message: getmessageFrase(),
      name: getRandomArrayElement(AUTHOR_NAMES),
    };
  };

  return {
    id: idGenerator(),
    url: `photos/${urlIndexes.pop()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({ length: commentsNumber }, createComment)
  };
}

const getFotos = Array.from({ length: FOTOS_NUMBER }, createFotoCard);
export { getFotos };

