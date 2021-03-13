// Створення галереї 

import gallery from './gallery-items.js'

  const galleryContainer = document.querySelector('ul.js-gallery');
  const galleryCards = createGalleryCards(gallery);
  
  galleryContainer.insertAdjacentHTML('beforeend', galleryCards);

  function createGalleryCards(gallery) {
        
    return gallery.map(({original, preview, description}) => {
      return `<li class="gallery__item">
      <a
        class="gallery__link"
        href="${original}"
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
    }).join('');
  }


