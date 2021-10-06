const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const body = document.querySelector('.page-body');
const navLinks = document.querySelectorAll('.main-nav__link');

if (navMain) {
  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', () => {
    if (!navMain.classList.contains('main-nav--opened')) {
      navMain.classList.add('main-nav--opened');
      body.classList.add('page-body--no-scroll');
    } else {
      navMain.classList.remove('main-nav--opened');
      body.classList.remove('page-body--no-scroll');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (evt)=> {
      evt.preventDefault();
      const id = link.getAttribute('href');
      body.classList.remove('page-body--no-scroll');
      navMain.classList.remove('main-nav--opened');

      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
}
