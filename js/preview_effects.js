const EFFECTS_CONFIG = {
  'none': undefined,
  'chrome': {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => value,
      from: (value) => Number(value)
    }
  },
  'sepia': {
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => value,
      from: (value) => Number(value)
    }
  },
  'marvin': {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
    format: {
      to: (value) => `${value}%`,
      from: (value) => Number(value)
    }
  },
  'phobos': { /*и сюда*/
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => `${value}px`,
      from: (value) => Number(value)
    }
  },
  'heat': {
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
    connect: 'lower',
    format: {
      to: (value) => value,
      from: (value) => Number(value)
    }
  }
};
const EFFECTS_FILTER = {
  'chrome': 'grayscale',
  'sepia': 'sepia',
  'marvin': 'invert',
  'phobos': 'blur',
  'heat': 'brightness'
};

function initializeEffects(imgUploadOverlay) {
  const slider = imgUploadOverlay.querySelector('.effect-level__slider');
  const effectsRadio = imgUploadOverlay.querySelectorAll('.effects__radio');
  const effectLevelValue = imgUploadOverlay.querySelectorAll('effect-level__value');
  const imgPreview = imgUploadOverlay.querySelector('.img-upload__preview img');

  let currentEffect = 'none';

  effectsRadio.forEach((element) => {
    element.addEventListener('change', (evt) => {
      currentEffect = evt.target.defaultValue;
      const options = EFFECTS_CONFIG[currentEffect];
      if (!options) {
        slider.noUiSlider.destroy();
        imgPreview.style.filter = null;
      }
      else if (slider.noUiSlider) {
        slider.noUiSlider.updateOptions(options);
      }
      else {
        noUiSlider.create(slider, options);
        slider.noUiSlider.on('update', () => {
          const value = slider.noUiSlider.get();
          imgPreview.style.filter = `${EFFECTS_FILTER[currentEffect]}(${value})`;
          effectLevelValue.value = value;
        });
      }
    });
  });
}

export { initializeEffects };
