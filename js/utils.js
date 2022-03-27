function checkStringLength(string, length) {
  return string.length <= length;
}

function getRandomPositiveInteger(a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  return Math.floor(Math.random() * (upper - lower + 1) + lower);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const makeIdGenerator = () => {
  let id = 0;
  return () => { id = id + 1; return id; };
};

export { getRandomPositiveInteger, getRandomArrayElement, checkStringLength, makeIdGenerator };
