function getRandomFromRange(from = 0, to = 1) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
}
function isStringLessThen(string = '', maxLenght = 140) {
  return string.length <= maxLenght;
}
function arrayFromRange(start = 0, end = 1) {
  const result = [];
  for(let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
function getUniqueRandom(range) {
  const index = getRandomFromRange(0, range.length - 1);
  const result = range[index];
  range.splice(index, 1);
  return result;
}

function parsePercents(percents) {
  return Number(percents.slice(0, -1));
}

function getRandomSample(data, length) {
  const indexes = arrayFromRange(0, data.length - 1);
  const resultIndexes = [];
  for (let i = 0; i < length; i++) {
    resultIndexes.push(getUniqueRandom(indexes));
  }
  return resultIndexes.map((el) => data[el]);
}

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;
  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

export {
  getRandomFromRange,
  isStringLessThen,
  arrayFromRange,
  getUniqueRandom,
  parsePercents,
  getRandomSample,
  debounce,
  throttle
};
