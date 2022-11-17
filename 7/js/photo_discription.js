import {getUniqueRandom, getRandomFromRange, arrayFromRange} from './supporting_functions.js';

const AVAILABLE_PHOTOS_ID = arrayFromRange(1, 25);
const AVAILABLE_PHOTOS_URL = arrayFromRange(1, 25);
const AVAILABLE_COMMENTS_ID = arrayFromRange(1, 25);
const MESSAGE_DATA = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAME_DATA = [
  'Барух',
  'Иван',
  'Абрам',
  'Исаак',
  'Ноа',
  'Ревекка',
  'Хирам'
];

function createComments() {
  return {
    id: getUniqueRandom(AVAILABLE_COMMENTS_ID),
    avatar: `img/avatar-${getRandomFromRange(1, 6)}.svg`,
    message: MESSAGE_DATA[getRandomFromRange(0, MESSAGE_DATA.length - 1)],
    name: NAME_DATA[getRandomFromRange(0, NAME_DATA.length - 1)]
  };
}
function createPhotoDiscription() {
  return {
    id: getUniqueRandom(AVAILABLE_PHOTOS_ID),
    url: `photos/${getUniqueRandom(AVAILABLE_PHOTOS_URL)}.jpg`,
    description: 'У меня очень оригинальные описания',
    likes: getRandomFromRange(15, 200),
    comments: Array.from({length:5}, createComments)
  };
}
function getPhotosDiscriptions() {
  return Array.from({length:25}, createPhotoDiscription);
}

export {getPhotosDiscriptions};
