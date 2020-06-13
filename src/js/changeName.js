import { USER_NAME, CHANGE_NAME } from './variables.js';

USER_NAME.addEventListener('click', () => {
  CHANGE_NAME.classList.remove('hide');
  CHANGE_NAME.value = localStorage.getItem('user');
});

CHANGE_NAME.addEventListener('change', () => {
  localStorage.setItem('user', CHANGE_NAME.value);
  USER_NAME.textContent = localStorage.getItem('user');
  CHANGE_NAME.classList.add('hide');
});
