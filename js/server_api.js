function getPhotos(onLoad, onFail) {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((resolve) => {
      if (resolve.ok) {
        return resolve.json();
      }
      throw Error();
    })
    .then((photos) => { onLoad(photos); })
    .catch(() => onFail());
}

function setPublication(onLoad, onFail, body) {
  fetch(
    'https://26.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body: body
    }
  )
    .then(() => onLoad())
    .catch(() => onFail());
}

export {getPhotos, setPublication};
