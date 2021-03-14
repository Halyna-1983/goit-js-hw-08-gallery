// Відкриття / закриття модального вікна (фото в оригінальному розмірі)

import gallery from './gallery-items.js'

const galleryContainer = document.querySelector('ul.js-gallery');

const modalWindowRef = document.querySelector('.js-lightbox');
const modalImageRef = document.querySelector('.lightbox__image');
const modalOverlay = document.querySelector('.lightbox__overlay');
const closeButton = document.querySelector('.lightbox__button');

galleryContainer.addEventListener('click', getOriginalImage);
closeButton.addEventListener('click', modalClose);
modalOverlay.addEventListener('click', modalClose);

function getOriginalImage(event) {
  event.preventDefault();

  let modalImage = event.target.dataset.source;
  modalWindowRef.classList.add('is-open');
  modalImageRef.src = modalImage;
  modalImageRef.dataset.index = event.target.dataset.index;
};



function modalClose() {
  modalWindowRef.classList.remove('is-open');
  updateAltAndSrc();
  };

closeButton.addEventListener('click', modalClose);

function updateAltAndSrc(src="", alt=""){
  modalImageRef.src = src;
  modalImageRef.alt = alt;
}
