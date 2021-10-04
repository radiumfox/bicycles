'use strict';

const introFormWrapper = document.querySelector('.intro__form-wrapper');
const requestForm = introFormWrapper.querySelector('.intro__form');
const modalSuccess = document.querySelector('.intro__success');
const closeButton = modalSuccess.querySelector('.intro__success-close');

const showSuccessMessage = () => {
  modalSuccess.classList.add('intro__success--show');
};

const hideSuccessMessage = () => {
  modalSuccess.classList.remove('intro__success--show');
  requestForm.classList.remove('intro__form--hide');
};

requestForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  showSuccessMessage();
  requestForm.classList.add('intro__form--hide');
  closeButton.addEventListener('click', hideSuccessMessage);
});
