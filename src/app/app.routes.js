import {
  commonPageTemplate,
  categoryPageTemplate,
  statisticsPageTemplate,
} from './pages/index.pages';

export const pageTypeRoutes = {
  defaultPageType: 'category',
  categoryPageType: 'category',
  statisticsPageType: 'statistics',
};

export const templatesRoutes = {
  [pageTypeRoutes.defaultPageType]: categoryPageTemplate,
  [pageTypeRoutes.categoryPageType]: categoryPageTemplate,
  [pageTypeRoutes.statisticsPageType]: statisticsPageTemplate,
};

commonPageTemplate(document.querySelector('body'));

