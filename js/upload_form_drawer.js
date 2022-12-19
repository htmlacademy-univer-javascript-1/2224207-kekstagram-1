import { setValidator } from './upload_form_validator.js';

const body = document.querySelector('body');
const uploadForm = body.querySelector('.img-upload__form');
const uploadImgInput = uploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const textDescription = uploadForm.querySelector('.text__description');
const textHashTag = uploadForm.querySelector('.text__hashtags');

setValidator(uploadForm);

function closeOverlay(evt) {
  const thisImgUploadForm = document.querySelector('.img-upload__form');
  const thisImgUploadOverlay = thisImgUploadForm.querySelector('.img-upload__overlay');

  thisImgUploadOverlay.classList.add('hidden');
  thisImgUploadOverlay.querySelector('.img-upload__cancel').removeEventListener('click', this);
  thisImgUploadForm.reset();
  evt.preventDefault();
}

uploadImgInput.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

imgUploadOverlay.querySelector('.img-upload__cancel').addEventListener('click', closeOverlay);
body.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27 &&
    document.activeElement !== textDescription &&
    document.activeElement !== textHashTag) {
    closeOverlay(evt);
    document.querySelector('body').classList.remove('modal-open');
  }
});
