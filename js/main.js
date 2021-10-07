let requestForm;
const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
let submitButton;

const introFormWrapper = document.querySelector('.intro__form-wrapper');
const introNoJs = document.querySelector('.intro__nojs');
const modalSuccess = document.querySelector('.intro__success');
const closeButton = document.querySelector('.intro__success-close');
const inputPhone = document.querySelector('#phone');
const inputName = document.querySelector('#name');

if (introFormWrapper) {
  requestForm = introFormWrapper.querySelector('form');
  introFormWrapper.classList.remove('intro__form-wrapper--nojs');
  submitButton = requestForm.querySelector('button');

  const onPhoneInput = () => {
    if(inputPhone.value){
      if (phoneRegExp.test(inputPhone.value)){
        inputPhone.setCustomValidity('');
        inputPhone.reportValidity();
      } else {
        inputPhone.setCustomValidity('В это поле нельзя вводить буквы');
        inputPhone.reportValidity();
      }
    } else {
      inputPhone.setCustomValidity('');
    }
  };

  inputPhone.addEventListener("input", onPhoneInput);
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

const DEFAULT_ZOOM = 16;
const DEFAULT_COORDS = {
  lat: 59.93879020329167,
  lng: 30.32306104365654
};

const mapWrapper = document.querySelector('.page-footer__map');

if (mapWrapper) {
  const map = L.map('map')
  .setView(DEFAULT_COORDS, DEFAULT_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};
