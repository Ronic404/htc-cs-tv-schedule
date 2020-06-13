import {
  LOG_IN_BUTTON, POP_UP_PAGE, AUTH_LOGIN, BOX_REMEMBER, AUTH_BUTTON, AUTH_PASSWORD, USER_NAME,
  LOG_OUT_BUTTON, HEADER_USER, LOGIN_ERROR, PASSWORD_ERROR,
} from './variables.js';

export default function setUser() {
  LOG_IN_BUTTON.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    POP_UP_PAGE.classList.remove('hide');
  });

  LOG_OUT_BUTTON.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    POP_UP_PAGE.classList.remove('hide');
    LOG_IN_BUTTON.classList.remove('hide');
    HEADER_USER.classList.add('hide');

    AUTH_LOGIN.value = localStorage.getItem('user');
    localStorage.removeItem('user');
  });

  AUTH_BUTTON.addEventListener('click', (event) => {
    event.preventDefault();

    if (!AUTH_LOGIN.value) {
      LOGIN_ERROR.classList.remove('hide');
    } else {
      LOGIN_ERROR.classList.add('hide');
    }

    if (!AUTH_PASSWORD.value) {
      PASSWORD_ERROR.classList.remove('hide');
    } else {
      PASSWORD_ERROR.classList.add('hide');
    }

    if (AUTH_LOGIN.value && AUTH_PASSWORD.value) {
      USER_NAME.textContent = AUTH_LOGIN.value;
      POP_UP_PAGE.classList.add('hide');
      LOG_IN_BUTTON.classList.add('hide');
      HEADER_USER.classList.remove('hide');

      if (BOX_REMEMBER.checked) {
        localStorage.setItem('user', AUTH_LOGIN.value);
      } else {
        localStorage.removeItem('user');
      }

      BOX_REMEMBER.checked = false;
      AUTH_LOGIN.value = '';
      AUTH_PASSWORD.value = '';
      document.body.style.overflow = '';
    }
  });
}

function hidePopUp() {
  document.body.style.overflow = '';
  POP_UP_PAGE.classList.add('hide');
}

document.body.addEventListener('keydown', (event) => {
  if (!POP_UP_PAGE.classList.contains('hide') && event.keyCode === 27) {
    hidePopUp();
  }
});

document.body.addEventListener('click', (event) => {
  if (document.body.style.overflow === 'hidden' && event.target.classList.contains('pop-up')) {
    hidePopUp();
  }
});
