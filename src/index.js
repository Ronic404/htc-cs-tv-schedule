/* eslint-disable import/order */
import './style.scss';

import './img/logos/header-logo.svg';
import './img/logos/footer-logo.svg';

import {
  MENU_MOVIES, MENU_TV_CHANNELS, LOG_IN_BUTTON, USER_NAME, HEADER_USER,
} from './js/variables.js';

import './js/changeName.js';
import pageSwitcher from './js/pageSwitcher.js';
import setUser from './js/setUser.js';

/* ===== SWIPER ===== */
import Swiper from 'swiper';
import '../node_modules/swiper/css/swiper.min.css';

if (!localStorage.getItem('page')) {
  localStorage.setItem('page', 'movies');
  MENU_MOVIES.classList.add('menu__item_active');
}

if (!localStorage.getItem('user')) {
  LOG_IN_BUTTON.classList.remove('hide');
} else {
  HEADER_USER.classList.remove('hide');
  USER_NAME.textContent = localStorage.getItem('user');
}

MENU_MOVIES.addEventListener('click', () => {
  MENU_MOVIES.classList.add('menu__item_active');
  MENU_TV_CHANNELS.classList.remove('menu__item_active');
  localStorage.setItem('page', 'movies');
  pageSwitcher();
});

MENU_TV_CHANNELS.addEventListener('click', () => {
  MENU_MOVIES.classList.remove('menu__item_active');
  MENU_TV_CHANNELS.classList.add('menu__item_active');
  localStorage.setItem('page', 'tv-channels');
  pageSwitcher();
});

pageSwitcher();
setUser();

// eslint-disable-next-line no-unused-vars
const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    680: {
      slidesPerView: 2,
    },
    980: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  },
});
