import { renderBigPicture } from './big_picture_drawer.js';
import { getPhotos } from './server_api.js';
import { showLoadError } from './message.js';

function renderMiniature(data) {
  const pictureContainert = document.querySelector('.pictures');
  const miniatureTamplate = document.querySelector('#picture').content;

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

getPhotos(renderMiniature, showLoadError);
