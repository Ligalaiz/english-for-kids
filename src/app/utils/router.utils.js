import { templatesRoutes } from '../app.routes';

export const routerUtils = {
  set(routeType) {
    document.body.querySelector('.main').innerHTML = templatesRoutes[routeType]();
  },
};

