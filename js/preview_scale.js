import { parsePercents } from './utils.js';

const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;

function initializeScaling(imgUploadOverlay) {
  const smallerControl = imgUploadOverlay.querySelector('.scale__control--smaller');
  const biggerControl = imgUploadOverlay.querySelector('.scale__control--bigger');
  const scaleValue = imgUploadOverlay.querySelector('.scale__control--value');
  const imgPreview = imgUploadOverlay.querySelector('.img-upload__preview img');

  smallerControl.addEventListener('click', () => {
    let value = parsePercents(scaleValue.value);
    value = value - (value > SCALE_MIN ? SCALE_STEP: 0);
    imgPreview.style.transform = `scale(${value / 100})`;
    scaleValue.value = `${value}%`;
  });
  biggerControl.addEventListener('click', () => {
    let value = parsePercents(scaleValue.value);
    value = value + (value < SCALE_MAX ? SCALE_STEP: 0);
    imgPreview.style.transform = `scale(${value / 100})`;
    scaleValue.value = `${value}%`;
  });
}

export { initializeScaling };
