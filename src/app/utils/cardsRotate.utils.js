import * as indexData from '../data/index.data';

export default function cardsRotateUtils(target, type) {
  let targetObj = null;

  if (type.match(/mousedown/)) {
    if (!target.dataset) return;
    if (target.dataset.btn) {
      let targetName = target.closest('.card').dataset.name,
        targetCategoryArray =
          indexData[`${target.closest('.card').dataset.category}Data`];

      target.classList.add('card__btn--hidden');
      target.closest('.card').classList.add('card--rotate');

      target
        .closest('.card')
        .querySelector('.card__title')
        .classList.add('card__title--rotate');

      try {
        targetObj = targetCategoryArray.find(
          (item) => item['cardName'] === targetName
        );
      } catch (e) {
        console.error(e);
      }

      target
        .closest('.card')
        .querySelector('.card__title').innerText = `${targetObj['translate']}`;

      target.closest('.card').addEventListener('mouseleave', ({ target }) => {
        target
          .closest('.card')
          .querySelector('.card__title')
          .classList.remove('card__title--rotate');

        target
          .closest('.card')
          .querySelector('.card__title').innerText = `${targetObj['title']}`;

        target
          .closest('.card')
          .querySelector('.card__btn')
          .classList.remove('card__btn--hidden');

        target.classList.remove('card--rotate');
      });
    }

    if (type.match(/mouseup/)) {
      target.classList.remove('card__btn--active');
    }
  }
}
