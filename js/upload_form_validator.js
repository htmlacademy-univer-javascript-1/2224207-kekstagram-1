const RE = /^#[a-zа-яё0-9]{1,19}$/;
const MAX_HASHTAG_COUNT = 5;

function setValidator(uploadForm) {
  const hashTag = uploadForm.querySelector('.text__hashtags');
  const pristine = new Pristine(uploadForm, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper'
  });

  pristine.addValidator(
    hashTag,
    (value) => {
      const hashTags = value.split(' ').map((element) => element.toLowerCase());
      const hashTagsFiltred = hashTags.filter((element, index) => hashTags.indexOf(element) === index);
      if (hashTags.length > MAX_HASHTAG_COUNT) { return false; }
      if (hashTagsFiltred.length !== hashTags.length) { return false; }
      return hashTags.every((element) => RE.test(element));
    },
    'Хештег некорректен'
  );
  return pristine;
}

export {setValidator};
