import { renderBigPicture } from './big_picture_drawer.js';
import { getPhotos } from './server_api.js';
import { showLoadError } from './message.js';
import { debounce, getRandomSample } from './utils.js';

const RANDOM_LENGTH = 10;
const TIME_DELAY = 500;

const pictureContainert = document.querySelector('.pictures');
const miniatureTamplate = document.querySelector('#picture').content;
const imgFiltersSection = document.querySelector('.img-filters');
const imgFiltersBtns = imgFiltersSection.querySelectorAll('.img-filters__button');

function switchActiveClass(newActive) {
  imgFiltersBtns.forEach((element) => element.classList.remove('img-filters__button--active'));
  newActive.classList.add('img-filters__button--active');
}

function clearMiniatures() {
  pictureContainert.querySelectorAll('.picture').forEach((element) => element.remove());
}

function makeMiniatures(data) {
  clearMiniatures();
  for (let i = 0; i < data.length; i++) {
    const miniature = miniatureTamplate.cloneNode(true);

    miniature.querySelector('.picture__img').src = data[i].url;
    miniature.querySelector('.picture__comments').textContent = data[i].comments.length;
    miniature.querySelector('.picture__likes').textContent = data[i].likes;

    miniature.firstElementChild.addEventListener('click', () => {
      renderBigPicture(data[i]);
    });

    pictureContainert.appendChild(miniature);
  }
}

function renderMiniature(data) {
  imgFiltersSection.classList.remove('img-filters--inactive');
  imgFiltersBtns.forEach((element) => {
    element.addEventListener('click', debounce((evt) => {
      switchActiveClass(evt.target);
      switch(evt.target.id) {
        case 'filter-default':
          makeMiniatures(data);
          break;
        case 'filter-random':
          makeMiniatures(getRandomSample(data, RANDOM_LENGTH));
          break;
        case 'filter-discussed':
          makeMiniatures(data.slice().sort((a, b) => {
            if (a.comments.length < b.comments.length) {
              return 1;
            }
            else if (a.comments.length > b.comments.length) {
              return -1;
            }
            return 0;
          }));
          break;
      }
    }, TIME_DELAY));
  });
  makeMiniatures(data);
}

getPhotos(renderMiniature, showLoadError);
