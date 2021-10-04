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
