//De DOMContentLoadedgebeurtenis wordt geactiveerd wanneer het oorspronkelijke HTML-document volledig is geladen en geparseerd, zonder te wachten tot stylesheets, afbeeldingen en subframes zijn geladen.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.button_cat').addEventListener('click', (event) => {
    renderModal();
    modalContent.innerText = 'hello from cats';
  });
  document.querySelector('.button_dog').addEventListener('click', (event) => {
    renderModal();
    modalContent.innerText = 'hello from dogs';
  });
  document.querySelector('.button_mouse').addEventListener('click', (event) => {
    renderModal();
    modalContent.innerText = 'hello from mouse';
  });
});

const modalContent = document.createElement('div');

function renderModal() {
  //maak bg modal div
  const modal = document.createElement('div');
  modal.classList.add('modal');
  //maak inhoud van modal div met toegevoegd argument

  modalContent.classList.add('modal_content');
  //render modal en child in DOM
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  //remove modal if bg clicked
  modal.addEventListener('click', (event) => {
    if (event.target.className === 'modal') {
      removeModal();
    }
  });
}

function removeModal() {
  const modal = document.querySelector('.modal');
  if (modal) {
    modal.remove();
  }
}
