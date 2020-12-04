import { get, set } from '../utils/storage.utils';
import * as cardsData from '../data/index.data';

function createstatisticsPage() {
  if (!get('gameProgress')) {
    let gameProgress = [];
    for (let key in cardsData) {
      if (key !== 'categoryData') {
        gameProgress.push(cardsData[key]);
      }
    }
    let tempArr = gameProgress.flat();
    set('gameProgress', tempArr);
  }

  const statisticsData = get('gameProgress');

  let contentRow = `
  <div class="main__page  page page--{{class}} {{class}}">
    <div class="{{class}}__btn-wrap">
      <a class="{{class}}__btn {{class}}__btn--repeat" data-{{class}}="repeat">Repeat difficult words</a>
      <button class="{{class}}__btn {{class}}__btn--reset" data-{{class}}="reset">Reset</button>
    </div>
    <div class="{{class}}__table-wrap">
      <table class="{{class}}__table">
        <thead >
          <tr class="{{class}}__header">
          <th class="header__item header__categories" title="categories">Categories</th>
          <th class="header__item header__words" title="words">Words</th>
          <th class="header__item header__translation" title="translation">Translation</th>
          <th class="header__item header__trained" title="trained"></th>
          <th class="header__item header__correct" title="correct"></th>
          <th class="header__item header__incorrect" title="incorrect"></th>
          <th class="header__item header__percent" title="percent">%</th>
          </tr>
        </thead>
        <tbody>
          {{words}}
        </tbody>
      </table>
    </div>
  </div>
  `;

  let cardTemplate = `
  <tr class="{{class}}__row  {{class}}__row--{{cardName}}">
    <td class="{{class}}__item  item__categories">{{category}}</td>
    <td class="{{class}}__item  item__words">{{title}}</td>
    <td class="{{class}}__item  item__translation">{{translate}}</td>
    <td class="{{class}}__item  item__trained">{{click}}</td>
    <td class="{{class}}__item  item__correct">{{guess}}</td>
    <td class="{{class}}__item  item__incorrect">{{mistake}}</td>
    <td class="{{class}}__item  item__percent">{{percent}}</td>
  </tr>`;

  let cardTemplateExport = '';

  statisticsData.forEach((el) => {
    cardTemplateExport += cardTemplate
      .replace(/\{{(class)}}/g, 'statistics')
      .replace(/\{{(cardName)}}/g, el['cardName'])
      .replace(/\{{(category)}}/g, el['category'])
      .replace(/\{{(title)}}/g, el['title'])
      .replace(/\{{(translate)}}/g, el['translate'])
      .replace(/\{{(click)}}/g, el['click'])
      .replace(/\{{(guess)}}/g, el['guess'])
      .replace(/\{{(mistake)}}/g, el['mistake'])
      .replace(/\{{(percent)}}/g, el['percent']);
  });

  let contentRowExport = contentRow
    .replace(/\{{(class)}}/g, 'statistics')
    .replace(/\{{(words)}}/g, cardTemplateExport);

  return contentRowExport;
}
export const statisticsPageTemplate = () => createstatisticsPage();
