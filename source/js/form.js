let requestForm;
const introFormWrapper = document.querySelector('.intro__form-wrapper');
const introNoJs = document.querySelector('.intro__nojs');
const modalSuccess = document.querySelector('.intro__success');
const closeButton = document.querySelector('.intro__success-close');
const inputPhone = document.querySelector('#phone');
const inputName = document.querySelector('#name');

if (introFormWrapper) {
  requestForm = introFormWrapper.querySelector('form');
  introFormWrapper.classList.remove('intro__form-wrapper--nojs');
}

if (introNoJs) {
  introNoJs.classList.add('intro__nojs--hide');
}

let isStorageSupport = true;
let phoneStorage = '';
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
  introFormWrapper.classList.remove('intro__form-wrapper--hide');
};

if (requestForm) {
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

    introFormWrapper.classList.add('intro__form-wrapper--hide');
    closeButton.addEventListener('click', hideSuccessMessage);
  });
}
