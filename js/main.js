function getRandomFromRange(from = 0, to = 1) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

function isStringLessThen(string = "", maxLenght = 140) {
    return string.length <= maxLenght;
}