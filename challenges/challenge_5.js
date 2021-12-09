import {modalContent, renderModal } from './modal.js'

//renderModal()

//De DOMContentLoadedgebeurtenis wordt geactiveerd wanneer het oorspronkelijke HTML-document volledig is geladen en geparseerd, zonder te wachten tot stylesheets, afbeeldingen en subframes zijn geladen.

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.button_cat')
  .addEventListener('click', (event) => {
    renderModal();
    modalContent.innerText = 'hello from cats';
  });
  document.querySelector('.button_dog')
  .addEventListener('click', (event) => {
    renderModal();
    modalContent.innerText = 'hello from dogs';
  });
  document.querySelector('.button_mouse')
  .addEventListener('click', (event) => {
    renderModal();
    modalContent.innerText = 'hello from mouse';
  });
});




