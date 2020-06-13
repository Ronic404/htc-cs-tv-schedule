const MENU_MOVIES = document.querySelector('.menu__item-movies');
const MENU_TV_CHANNELS = document.querySelector('.menu__item-tv-channels');

const MOVIES_PAGE = document.querySelector('.movies');
const TV_CHANNEL_PAGE = document.querySelector('.tv-channels');
const POP_UP_PAGE = document.querySelector('.pop-up');

const LOG_IN_BUTTON = document.querySelector('.log-in-button');
const LOG_OUT_BUTTON = document.querySelector('.log-out-button');
const AUTH_BUTTON = document.querySelector('#auth-button');

const HEADER_USER = document.querySelector('.header-user');
const USER_NAME = document.querySelector('.header-user__name');
const CHANGE_NAME = document.querySelector('#change-name');

const AUTH_LOGIN = document.querySelector('#form-auth-login');
const AUTH_PASSWORD = document.querySelector('#form-auth-password');
const BOX_REMEMBER = document.querySelector('#remember');

const LOGIN_ERROR = document.querySelector('.login-error');
const PASSWORD_ERROR = document.querySelector('.password-error');

export {
  MENU_MOVIES, MENU_TV_CHANNELS, MOVIES_PAGE, TV_CHANNEL_PAGE, LOG_IN_BUTTON, POP_UP_PAGE,
  LOG_OUT_BUTTON, USER_NAME, AUTH_LOGIN, BOX_REMEMBER, AUTH_BUTTON, AUTH_PASSWORD, HEADER_USER,
  LOGIN_ERROR, PASSWORD_ERROR, CHANGE_NAME,
};
