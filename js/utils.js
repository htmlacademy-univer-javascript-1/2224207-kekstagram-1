function getRandomFromRange(from = 0, to = 1) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
function isStringLessThen(string = '', maxLenght = 140) {
  return string.length <= maxLenght;
}
function arrayFromRange(start = 0, end = 1) {
  const RESULT = [];
  for(let i = start; i <= end; i++) {
    RESULT.push(i);
  }
  return RESULT;
}
function getUniqueRandom(range) {
  const INDEX = getRandomFromRange(0, range.length - 1);
  const RESULT = range[INDEX];
  range.splice(INDEX, 1);
  return RESULT;
}

function parsePercents(percents) {
  return Number(percents.slice(0, -1));
}

export {
  getRandomFromRange,
  isStringLessThen,
  arrayFromRange,
  getUniqueRandom,
  parsePercents
};
