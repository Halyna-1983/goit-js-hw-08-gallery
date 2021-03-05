const refs = {
      openModalBtn: document.querySelector('[data-action="open-modal"]')
      closeModalBtn: document.querySelector('[data-action="close-modal"]')
    }
    
    refs.openModalBtn.addEventListener('click', onOpenModal); 
    refs.closeModalBtn.addEventListener('click', onCloseModal); 
    
    function onOpenModal() {
      document.lightbox.classList.add('is-open');
    }
    function onCloseModal() {
        document.lightbox.classList.remove('is-open');
      }