import createElementUtils from '../createElement.utils';

export default function createStarsUtils(value) {
  const starsField = document.querySelector('.stars');
  createElementUtils(
    'div',
    `stars__item stars__item--${value}`,
    null,
    starsField
  );
}