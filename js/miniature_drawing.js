import {getPhotosDiscriptions} from './photo_discription.js';

const TEST_DATA = getPhotosDiscriptions();

function renderMiniature(data) {
  const pictureContainert = document.querySelector('.pictures');
  const miniatureTamplate = document.querySelector('#picture').content;

  for (let i = 0; i < data.length; i++) {
    const miniature = miniatureTamplate.cloneNode(true);

    miniature.querySelector('.picture__img').src = data[i].url;
    miniature.querySelector('.picture__comments').textContent = data[i].comments.length;
    miniature.querySelector('.picture__likes').textContent = data[i].likes;

    pictureContainert.appendChild(miniature);
  }
}

renderMiniature(TEST_DATA);
