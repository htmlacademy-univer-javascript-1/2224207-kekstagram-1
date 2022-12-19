const bigPicture = document.querySelector('.big-picture');
const body = document.querySelector('body');
const commentTemplate = document.querySelector('#big__picture__comment').content;

function createPictureComment(data) {
  const newComment = commentTemplate.cloneNode(true);
  const commentImg = newComment.querySelector('.social__picture');

  commentImg.src = data.avatar;
  commentImg.alt = data.name;
  newComment.querySelector('.social__text').textContent = data.message;

  return newComment;
}

function closeBigPicture(evt) {
  const thisbigPicture = document.querySelector('.big-picture');
  thisbigPicture.classList.add('hidden');
  thisbigPicture.querySelector('.big-picture__cancel').removeEventListener('click', this);
  evt.preventDefault();
}

function renderBigPicture(data) {
  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeBigPicture);

  body.classList.add('modal-open');

  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');
  bigPicture.querySelector('.big-picture__img img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__caption').textContent = data.description;

  const commentsSection = bigPicture.querySelector('.social__comments');
  commentsSection.innerHTML = '';
  data.comments.forEach((e) => {
    commentsSection.appendChild(createPictureComment(e));
  });
}

body.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    closeBigPicture(evt);
  }
});

export {renderBigPicture};
