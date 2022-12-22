import { setValidator } from './upload_form_validator.js';
import { initializeScaling, deleteScaling } from './preview_scale.js';
import { initializeEffects, deleteEffects } from './preview_effects.js';
import { setPublication } from './server_api.js';
import { showSuccess, showError } from './message.js';

const ESC_KEY = 27;

const body = document.querySelector('body');
const uploadForm = body.querySelector('.img-upload__form');
const uploadImgInput = uploadForm.querySelector('.img-upload__input');
const imgUploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const imgUploadCancel = imgUploadOverlay.querySelector('.img-upload__cancel');
const textDescription = uploadForm.querySelector('.text__description');
const textHashTag = uploadForm.querySelector('.text__hashtags');
const submiteBtn = uploadForm.querySelector('.img-upload__submit');
const imgPreview = uploadForm.querySelector('.img-upload__preview img');
const pristine = setValidator(uploadForm);

function closeOverlay() {
  imgUploadOverlay.classList.add('hidden');
  imgUploadCancel.removeEventListener('click', cancelUpload);
  body.removeEventListener('keydown', cancelUpload);
  body.classList.remove('modal-open');
  submiteBtn.removeEventListener('click', onSubmite);
  deleteEffects();
  deleteScaling();
  uploadForm.reset();
}

function cancelUpload(evt) {
  if (evt.type === 'click' ||
    (evt.keyCode === ESC_KEY &&
    document.activeElement !== textDescription &&
    document.activeElement !== textHashTag)) {
    closeOverlay();
  }
}

function onSubmite(evt) {
  evt.preventDefault();

  if (pristine.validate()) {
    setPublication(
      () => {
        showSuccess();
        closeOverlay();
      },
      () => {
        showError();
      },
      new FormData(uploadForm)
    );
  }
}

uploadImgInput.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  imgPreview.src = URL.createObjectURL(uploadImgInput.files[0]);
  initializeEffects();
  initializeScaling();

  imgUploadCancel.addEventListener('click', cancelUpload);
  body.addEventListener('keydown', cancelUpload);
  submiteBtn.addEventListener('click', onSubmite);
});
