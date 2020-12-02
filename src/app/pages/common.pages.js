import createElementUtils from '../utils/createElement.utils';

export const commonPageTemplate = (parent) => {
  createElementUtils('div', 'wrap', [
    createElementUtils('header', 'header', [
      createElementUtils('button', 'header__btn', null, null, ['type','button']),
      createElementUtils('a', 'header__logo', 'English for kids', null, ['href','#'], ['route','category']),
      createElementUtils('nav', 'header__nav nav', [
        createElementUtils('ul', 'nav__list reset-list', [

          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Category', null, ['href','#'], ['route', 'category']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'City', null, ['href','#'], ['route', 'city']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Home', null, ['href','#'], ['route', 'home']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Tehnology', null, ['href','#'], ['route', 'it']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Weather', null, ['href','#'], ['route', 'weather']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Sport', null, ['href','#'], ['route', 'sport']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Health', null, ['href','#'], ['route', 'health']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Animal', null, ['href','#'], ['route', 'animal']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Cars', null, ['href','#'], ['route', 'cars']),
          ], null),
          createElementUtils('li', 'nav__item', [
            createElementUtils('a', 'nav__link', 'Statistics', null, ['href','#'], ['route', 'statistics']),
          ], null),

        ], null),
      ], null),
    ], null),
    createElementUtils('main', 'main', null, null),
    createElementUtils('div', 'timer__wrap', [
      createElementUtils('div', 'timer', null, null),
    ], null),
    createElementUtils('div', 'message__wrap', [
      createElementUtils('div', 'message__image', null, null),
      createElementUtils('div', 'message__text', null, null),
    ], null),
    createElementUtils('div', 'overlay', null, null),
  ], parent);
}

