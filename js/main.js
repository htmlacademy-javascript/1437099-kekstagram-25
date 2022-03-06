function getRandomInt(a, b) {
  const from = Math.ceil(Math.min(a, b));
  const to = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (to - from + 1) + from);
}
getRandomInt(5, 8);
function checkStringLength(string, length) {
  return string.length <= length;
}
checkStringLength('привет', 8);
