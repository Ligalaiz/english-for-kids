import { categoryData } from '../data/index.data';

let contentRow = `
  <div class="main__page  page page--{{class}}">
    <div class="page__row">
      {{cards}}
    </div>
  </div>
  `;


let cardTemplate = `
  <div class="page__card  card  card--{{class}}  card--{{cardName}}" data-card="{{cardName}}">
    <div class="card__content  card__content--{{class}}  card__content--{{cardName}}">
      <p class="card__title  card__title--{{class}}   card__title--{{cardName}}">{{title}}</p>
    </div>
  </div>`;

let cardTemplateExport = '';

categoryData.forEach((el) => {
  cardTemplateExport += cardTemplate
    .replace(/\{{(title)}}/g, el['title'])
    .replace(/\{{(cardName)}}/g, el['cardName']);
});

let contentRowExport = contentRow
  .replace(/\{{(cards)}}/g, cardTemplateExport)
  .replace(/\{{(class)}}/g, 'category');

export const categoryPageTemplate = () => contentRowExport;
