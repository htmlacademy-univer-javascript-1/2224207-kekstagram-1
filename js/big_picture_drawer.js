const COMMENTS_STEP = 5;
const ESC_KEY = 27;

const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const commentLoader = bigPicture.querySelector('.comments-loader');
const commentsSection = bigPicture.querySelector('.social__comments');
const displayedCommentsCount = bigPicture.querySelector('.displayed-comments-count');
const commentTemplate = document.querySelector('#big__picture__comment').content;

let displayedComments = 0;
let comments = [];

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

function appendNextComments() {
  const commentsCount = displayedComments;
  for(; displayedComments < comments.length && displayedComments < commentsCount + COMMENTS_STEP; displayedComments++) {
    commentsSection.appendChild(createPictureComment(comments[displayedComments]));
  }
  displayedCommentsCount.textContent = displayedComments;
}

function renderBigPicture(data) {
  bigPicture.querySelector('.big-picture__cancel').addEventListener('click', closeBigPicture);

  body.classList.add('modal-open');

  bigPicture.classList.remove('hidden');
  bigPicture.querySelector('.big-picture__img img').src = data.url;
  bigPicture.querySelector('.likes-count').textContent = data.likes;
  bigPicture.querySelector('.comments-count').textContent = data.comments.length;
  bigPicture.querySelector('.social__caption').textContent = data.description;

  commentsSection.innerHTML = '';
  displayedComments = 0;
  comments = data.comments;
  appendNextComments();
}

body.addEventListener('keydown', (evt) => {
  if (evt.keyCode === ESC_KEY) {
    closeBigPicture(evt);
  }
});
commentLoader.addEventListener('click', () => {
  appendNextComments();
});

export {renderBigPicture};
