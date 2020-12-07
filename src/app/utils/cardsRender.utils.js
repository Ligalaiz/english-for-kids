import * as indexData from '../data/index.data';
import cardsShuffleUtils from './cardsShuffle.utils';
import { get, set } from './storage.utils';

function addCards({ target, page }) {
  let tempData;

  let value = page ? page : target.dataset.route || target.dataset.card;

  let tempArray = get('gameProgress')
    .filter(
      (item) =>
        (item['percent'] > 0 && item['percent'] <= 35) ||
        (item['percent'] === 0 && item['mistake'] > 0)
    )
    .slice(0, 8);

  switch (value) {
    case 'city':
      tempData = indexData.cityData;
      break;
    case 'home':
      tempData = indexData.homeData;
      break;
    case 'tehnology':
      tempData = indexData.tehnologyData;
      break;
    case 'weather':
      tempData = indexData.weatherData;
      break;
    case 'sport':
      tempData = indexData.sportData;
      break;
    case 'health':
      tempData = indexData.healthData;
      break;
    case 'animal':
      tempData = indexData.animalData;
      break;
    case 'cars':
      tempData = indexData.carsData;
      break;
    case 'repeat':
      tempData = tempArray;
  }

  cardsShuffleUtils(tempData);

  let contentRow = `
    <label class="switch">
      <input id="checkbox" type="checkbox" data-control="checkbox">
      <span class="slider round"></span>
    </label>
    <div class="main__page  page page--{{class}}" data-page="{{class}}">
      <div class="page__stars  stars"></div>
      <div class="page__row">
        {{cards}}
      </div>
      <button class="game__btn" type="button"></button>
    </div>`;

  let cardTemplate = `
    <div class="page__card  card  card--{{class}}  card--{{cardName}}" data-sound="{{cardName}}" data-category="{{class}}" data-name="{{cardName}}">
      <div class="card__content  card__content--{{class}}  card__content--{{cardName}}">
        <button class="card__btn" data-btn="btn"></button>
        <p class="card__title  card__title--{{class}}   card__title--{{cardName}}">{{title}}</p>
      </div>
    </div>`;

  let cardTemplateExport = '';

  tempData.forEach((el) => {
    cardTemplateExport += cardTemplate
      .replace(/\{{(cardName)}}/g, el['cardName'])
      .replace(/\{{(class)}}/g, el['category'])
      .replace(/\{{(title)}}/g, el['title']);
  });

  let contentRowExport = contentRow
    .replace(/\{{(cards)}}/g, cardTemplateExport)
    .replace(/\{{(class)}}/g, value);

  document.body.querySelector('.main').innerHTML = contentRowExport;
}

export default function cardsRenderUtils({ target, routerUtils, page }) {
  if (!page) {
    if (
      target.classList.contains('nav__link') ||
      target.classList.contains('header__logo') ||
      target.classList.contains('card--category')
    ) {
      if (
        target.dataset.route === 'category' ||
        target.dataset.route === 'statistics'
      ) {
        routerUtils.set(target.dataset.route);
      } else {
        addCards({ target });
      }

      set('page', target.dataset.route || target.dataset.card);
    }
  } else {
    addCards({ page });
  }
}
