export const modalContent = document.createElement('div');

export const renderModal =  () => {
  
  const modal = document.createElement('div');
  modal.classList.add('modal');
  

  modalContent.classList.add('modal_content');
  
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  modal.addEventListener('click', (event) => {
    if (event.target.className === 'modal') {
      removeModal();
    }
  });
}

const removeModal = () => {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
}