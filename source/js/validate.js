'use strict';

// validate

const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const inputPhone = document.querySelector('#phone');
const onPhoneInput = function () {
  if (inputPhone.value) {
    if (phoneRegExp.test(inputPhone.value)) {
      inputPhone.classList.remove('intro__form-input--invalid');
    } else {
      inputPhone.classList.add('intro__form-input--invalid');
    }
  } else {
    inputPhone.classList.remove('intro__form-input--invalid');
  }
};

inputPhone.addEventListener('input', onPhoneInput);

// success-message

const introFormWrapper = document.querySelector('.intro__form-wrapper');
const requestForm = introFormWrapper.querySelector('.intro__form');
const successMessageTemplate = document.querySelector('#success-message').content.querySelector('.success-message');
const closeButton = document.querySelector('.success-message__close');

const detectEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const removeMessage = () => {
  const successMessage = introFormWrapper.querySelector('.success-message');
  successMessage.remove();
};

const onEscPress = (evt) => {
  if (detectEscEvent(evt)) {
    removeMessage();
    requestForm.classList.remove('intro__form--hide');
    document.removeEventListener('keydown', onEscPress);
  }
};

const onButtonPress = () => {
  removeMessage();
  requestForm.classList.remove('intro__form--hide');
  closeButton.removeEventListener('click', onButtonPress);
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  introFormWrapper.appendChild(successMessage);
};

requestForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (phoneRegExp.test(inputPhone.value)) {
    showSuccessMessage();
    requestForm.classList.add('intro__form--hide');
    document.addEventListener('keydown', onEscPress);
    document.querySelector('.success-message__close').addEventListener('click', onButtonPress);
  }
});
