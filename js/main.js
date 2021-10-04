'use strict';
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

const navLinks = navMain.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('click', (evt)=> {
    const id = evt.target.dataset.id;
    const element = document.querySelector(`#${id}`);
    element.scrollIntoView({block: 'center', behavior: 'smooth'});
  });
});

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
