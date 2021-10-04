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

'use strict';
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const body = document.querySelector('.page-body');
const navLinks = navMain.querySelectorAll('a');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    body.classList.add('page-body--no-scroll');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    body.classList.remove('page-body--no-scroll');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', (evt)=> {
    link.removeAttribute('href');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    body.classList.remove('page-body--no-scroll');
    const id = evt.target.dataset.id;
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({block: 'center', behavior: 'smooth'});
  });
});
