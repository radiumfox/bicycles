'use strict';

const introFormWrapper = document.querySelector('.intro__form-wrapper');
const introNoJs = document.querySelector('.intro__nojs');
const requestForm = introFormWrapper.querySelector('.intro__form');
const modalSuccess = document.querySelector('.intro__success');
const closeButton = modalSuccess.querySelector('.intro__success-close');
const inputPhone = introFormWrapper.querySelector('#phone');
const inputName = introFormWrapper.querySelector('#name');

introFormWrapper.classList.remove('intro__form-wrapper--nojs');
introNoJs.classList.add('intro__nojs--hide');

let isStorageSupport = true;
// eslint-disable-next-line no-unused-vars
let phoneStorage = '';
// eslint-disable-next-line no-unused-vars
let nameStorage = '';

try {
  phoneStorage = localStorage.getItem('phoneNumber');
  nameStorage = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

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

  if (isStorageSupport) {
    if (inputPhone.value) {
      localStorage.setItem('phoneNumber', inputPhone.value);
    }
    if (inputName.value) {
      localStorage.setItem('name', inputName.value);
    }
  }
  requestForm.classList.add('intro__form--hide');
  closeButton.addEventListener('click', hideSuccessMessage);
});
