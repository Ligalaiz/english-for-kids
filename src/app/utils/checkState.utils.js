import { get, set } from './storage.utils';
import { pageTypeRoutes } from '../app.routes';
import { routerUtils } from './router.utils';
import cardsRenderUtils from './cardsRender.utils';
import changeCardsStyleUtils from './changeCardsStyle.utils';
import * as cardsData from '../data/index.data';
import restoreCurrentProgressUtils from './restoreCurrentProgress.utils';
import restoreCardsListenersUtils from './game/restoreCardsListeners.utils';

export default function checkStateUtils() {
  if (!get('page')) {
    set('page', 'category');
    set('game', 'off');
  }

  if (!get('mistake')) set('mistake', '0');

  if (!get('startGame')) {
    set('startGame', 'off');
  }

  if (!get('currentProgress')) {
    set('currentProgress', []);
  }

  if (!get('repeat')) set('repeat', []);

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
      const gameBtn = document.querySelector('.game__btn');
      changeCardsStyleUtils();
      gameBtn.classList.add('game__btn--active');
      if (get('startGame') === 'on') {
        gameBtn.innerText = 'Repeat';
        gameBtn.classList.add('game__btn--repeat', 'game__btn--active');

        restoreCurrentProgressUtils();
        restoreCardsListenersUtils();
      } else {
        gameBtn.innerText = 'Start';
      }
    }
  }
  location.hash = get('page');
}
