import { get, set } from './storage.utils';
import { pageTypeRoutes } from '../app.routes';
import { routerUtils } from './router.utils';
import cardsRenderUtils from './cardsRender.utils';
import changeCardsStyleUtils from './changeCardsStyle.utils';
import * as cardsData from '../data/index.data';

export default function checkStateUtils() {
  if (!get('page')) {
    set('page', 'category');
    set('game', 'off');
  }

  if (!get('gameProgress')) {
    let gameProgress = [];
    for (let key in cardsData) {
      gameProgress.push(cardsData[key]);
    }
    let tempArr = gameProgress.flat()
    set('gameProgress', tempArr);
  }

  if (get('page') === 'category') {
    routerUtils.set(pageTypeRoutes.defaultPageType);
  } else if (get('page') === 'statistics') {
    routerUtils.set('statistics');
  } else {
    let page = get('page');
    cardsRenderUtils({ page });
    setTimeout(() => {
      document.getElementById('checkbox').checked =
        get('game') === 'on' ? true : false;
    }, 0);

    if (get('game') === 'on') {
      changeCardsStyleUtils();
    }
  }
  // set('page', 'category');
  location.hash = get('page');
}
