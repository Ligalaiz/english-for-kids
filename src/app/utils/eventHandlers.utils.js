import cardsSoundUtils from './cardsSound.utils';
import cardsRenderUtils from './cardsRender.utils';
import cardsRotateUtils from './cardsRotate.utils';
import { menuSwitcherUtils, menuCloseUtils, homeBtnUtils } from './menuSwitcher.utils';
import { get } from './storage.utils';
import gameUtils from './game.utils';
import addResultUtils from './statistics/addResult.utils';
import statisticsResetUtils from './statistics/statisticsReset.utils';


function handler(e, routerUtils) {
  const { target, type } = e;

  if (type.match(/click/)) {
    if (target.classList.value.match(/header__btn/)) {
      menuSwitcherUtils();
    }
    if (target.classList.value.match(/statistics__btn--reset/)) {
      statisticsResetUtils();
    }

    if (
      target.classList.value.match(/nav__link|header__logo|overlay--active/)
    ) {
      if (document.querySelector('.nav').classList.contains('nav--active')) {
        menuCloseUtils();
      }
    }

    cardsRenderUtils({ target, routerUtils });
    if (target.dataset.sound && get('game') === 'off') {
      cardsSoundUtils({target});
      addResultUtils({target, type: 'click'});
    }

    setTimeout(() => {
      if (document.getElementById('checkbox')) {
        document.getElementById('checkbox').checked =
          get('game') === 'on' ? true : false;
      }
      location.hash = get('page');
    }, 0);
  }

  if (type.match(/mousedown|mouseup|mouseleave|change/)) {
    cardsRotateUtils(target, type);
    homeBtnUtils(target, type);
    gameUtils(target, type);
  }
}

export default function eventHandlersUtils(routerUtils) {
  document.addEventListener('mouseup', (e) => handler(e));
  document.addEventListener('mousedown', (e) => handler(e));
  document.addEventListener('change', (e) => handler(e));
  document.addEventListener('click', (e) => handler(e, routerUtils));
}
