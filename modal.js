// Відкриття / закриття модального вікна (фото в оригінальному розмірі)

import gallery from './gallery-items.js'

const galleryContainer = document.querySelector('ul.js-gallery');
// const galleryCards = createGalleryCards(gallery);
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

//   if (event.target.nodeName !== 'IMG') {
//     return;
//   };

//   // const imageOrigin = event.target.dataset.source;
//   // const imageAlt = event.target.alt;
//   // const dataIndex = event.target.dataset.index;

//   // modalOpen(imageOrigin, imageAlt, dataIndex);
// };

// function keydownModuleWindow(event) {
//   if (event.code === 'Escape') {
//     return modalClose();
//   };
// };

// function modalOpen(image, alt, index) {
//   modalWindowRef.classList.add('is-open');
//   modalImageRef.src = image;
//   modalImageRef.alt = alt;
//   modalImageRef.dataset.index = index;
//   window.addEventListener('keydown', event => keydownModuleWindow(event));
// };

function modalClose() {
  modalWindowRef.classList.remove('is-open');
  // delete modalImageRef.dataset.index;
  // window.removeEventListener('keydown', event => keydownModuleWindow(event));
};

closeButton.addEventListener('click', modalClose);




//******************************************************************** */
// const refs = {
//     openModalBtn: document.querySelector('.lightbox.is-open'),
//     closeModalBtn: document.querySelector('.lightbox.is-open')
//   }
  
// refs.openModalBtn.addEventListener('click', openModalWindow);
// refs.closeModalBtn.addEventListener('click', closeModalWindow); 

// function openModalWindow(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') {
//     return ;
//   };

//   const imageOrigin = event.target.dataset.source;
//   const imageAlt = event.target.alt;
//   const dataIndex = event.target.dataset.index;

//   modalOpen(imageOrigin, imageAlt, dataIndex);
// };

// function keydownModuleWindow(event) {
//   if (event.code === 'Escape') {
//     return closeModalWindow();
//   };
// };

// function modalOpen(image, alt, index) {
//   modalWindowRef.classList.add('is-open');
//   modalImageRef.src = image;
//   modalImageRef.alt = alt;
//   modalImageRef.dataset.index = index;
//   window.addEventListener('keydown', event => keydownModuleWindow(event));
// };

// function closeModalWindow() {
//   modalWindowRef.classList.remove('is-open');
//   delete modalImageRef.dataset.index;
//   window.removeEventListener('keydown', event => keydownModuleWindow(event));
// };


//********************************************************************************* */

// Ще якийсь варіант ... не працює

//   const imageOnClick = (event) => {
//     event.preventDefault()
//     console.log(event.target);
//     // event.target.getAttribute("data-source")
//     const bigImage = document.querySelector(".lightbox__image");
//     const modalWindow = document.querySelector(".js-lightbox");
//     modalWindow.classList.add("is-open");
//     bigImage.setAttribute("src", event.target.getAttribute("data-source"));
    
//   }
//   const imageClose = (event) => {
//     document.querySelector(".js-lightbox").classList.remove("is-open");
//     document.querySelector(".lightbox__image").setAttribute("src", "");
//   }

//   const closeButtonRef = document.querySelector(".lightbox__button");
// // closeButtonRef.addEventListener('click', imageClose);
// galleryRef.addEventListener('click', imageOnClick);

// const closeModalWindow = (event) => {
//   let target = event.target;
//   while (target.tagName != "BODY") {

//     if (target.tagName == 'BUTTON' || target.classList.contains('lightbox__overlay')){
//       imageClose();
//   return;
//     }
//     if (target.classList.contains('js-lightbox')) {
//       return;
//     }
//     if (target.classList.contains('gallery')) {
//       return;
//     }
// target = target.parentNode;

// }
// imageClose();
// }

// const bodyRef = document.querySelector('body');
// bodyRef.addEventListener('click', closeModalWindow);
  

// ******************************************************************************

// Спроби по відео Репети 7 модуль, друге відео, наприкінці



  // const refs = {
  //   openModalBtn: document.querySelector('.lightbox'),
  //   closeModalBtn: document.querySelector('.lightbox')
  // }
  
  // refs.openModalBtn.addEventListener('click', onOpenModal); 
  // refs.closeModalBtn.addEventListener('click', onCloseModal); 
  
  // function onOpenModal() {
  //   document.body.classList.add('show-modal');
  // }
  
  // function onCloseModal() {
  //     document.body.classList.remove('show-modal');
  //   }