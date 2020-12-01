import { statisticsData } from '../data/index.data';

let contentRow = `
  <div class="main__page  page page--{{class}}">
    <div class="page__row">
      {{cards}}
    </div>
  </div>
  `;

let cardTemplate = `
  <div class="page__card  card">
    <div class="card__content">
      <p class="card__title">{{title}}</p>
      <button class="card__btn"></button>
    </div>
  </div>`;

let cardTemplateExport = '';

statisticsData.forEach((el) => {
  cardTemplateExport += cardTemplate.replace(/\{{(title)}}/g, el['title']);
});

let contentRowExport = contentRow
  .replace(/\{{(class)}}/g, 'statistics')
  .replace(/\{{(cards)}}/g, cardTemplateExport);

export const statisticsPageTemplate = () => contentRowExport;
