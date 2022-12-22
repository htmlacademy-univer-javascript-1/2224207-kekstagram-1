const ESC_KEY = 27;

const body = document.querySelector('body');

function closeSuccess(evt) {
  if ((evt.type === 'click' && (evt.target.classList[0] === 'success__button' || evt.target.classList[0] !== 'success__inner')) ||
    (evt.type === 'keydown' && evt.keyCode === ESC_KEY)) {
    const success = document.querySelector('.success');

    body.removeEventListener('click', closeSuccess);
    body.removeEventListener('keydown', closeSuccess);
    success.remove();
  }
}

function closeError(evt) {
  if ((evt.type === 'click' && (evt.target.classList[0] === 'error__button' || evt.target.classList[0] !== 'error__inner')) ||
    (evt.type === 'keydown' && evt.keyCode === ESC_KEY)) {
    const error = document.querySelector('.error');

    body.removeEventListener('click', closeError);
    body.removeEventListener('keydown', closeError);
    error.remove();
  }
}

function showMessage(id) {
  const messageTamplate = document.querySelector(id).content;
  const message = messageTamplate.cloneNode(true);
  body.appendChild(message);
}

function showLoadError() {
  showMessage('#load_error');
}

function showSuccess() {
  body.addEventListener('keydown', closeSuccess);
  body.addEventListener('click', closeSuccess);
  showMessage('#success');
}

function showError() {
  body.addEventListener('keydown', closeError);
  body.addEventListener('click', closeError);
  showMessage('#error');
}

export {showLoadError, showSuccess, showError};
