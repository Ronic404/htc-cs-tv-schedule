import {
  MENU_MOVIES, MENU_TV_CHANNELS, MOVIES_PAGE, TV_CHANNEL_PAGE,
} from './variables.js';

export default function pageSwitcher() {
  if (localStorage.getItem('page') === 'movies') {
    MOVIES_PAGE.classList.remove('hide');
    TV_CHANNEL_PAGE.classList.add('hide');
    MENU_MOVIES.classList.add('menu__item_active');
  } else {
    TV_CHANNEL_PAGE.classList.remove('hide');
    MOVIES_PAGE.classList.add('hide');
    MENU_TV_CHANNELS.classList.add('menu__item_active');
  }
}
