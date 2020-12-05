import cardsSoundUtils from '../cardsSound.utils';
import { get, set } from '../storage.utils';
import createElementUtils from '../createElement.utils';
import clearStarsFieldUtils from './clearStarsField.utils';
import changeCardsStyleUtils from '../changeCardsStyle.utils';
import showGameMessageUtils from './showGameMessage.utils';
import { pageTypeRoutes } from '../../app.routes';
import { routerUtils } from '../router.utils';
import addResultUtils from '../statistics/addResult.utils';

export default function clickHandlerUtils({ cards, count, songArray }) {
  const starsField = document.querySelector('.stars');
  const gameBtn = document.querySelector('.game__btn');

  function listener(e) {
    e.preventDefault();
    const { target } = e;

    if (!target.closest('.card')) return;

    if (target.closest('.card').dataset.sound === songArray[count]['sound']) {
      createElementUtils(
        'div',
        'stars__item stars__item--true',
        null,
        starsField
      );
      target.closest('.card').classList.add('card--disabled');

      addResultUtils({ target, type: 'guess' });

      cardsSoundUtils({ sound: 'bell', path: 'app' });
      this.removeEventListener('click', listener);
    } else {
      cardsSoundUtils({ sound: 'error', path: 'app' });
      createElementUtils(
        'div',
        'stars__item stars__item--false',
        null,
        starsField
      );
      set('mistake', `${Number(get('mistake')) + 1}`);
      addResultUtils({ current: songArray[count]['sound'], type: 'mistake' });
    }
    songArray.pop();
    set('gameArray', songArray);
    count--;
    if (count >= 0) {
      const getPage =
        get('page') === 'statistics'
          ? get('gameArray')[get('gameArray').length - 1]['category']
          : get('page');
      setTimeout(
        () =>
          cardsSoundUtils({ path: getPage, sound: songArray[count]['sound'] }),
        1000
      );
    }
    if (count < 0) {
      clearStarsFieldUtils(starsField);
      changeCardsStyleUtils();
      showGameMessageUtils();
      if (Number(get('mistake')) > 0) {
        cardsSoundUtils({ sound: 'failure', path: 'app' });
      } else {
        cardsSoundUtils({ sound: 'success', path: 'app' });
      }
      gameBtn.classList.remove('game__btn--active');

      setTimeout(() => {
        set('game', 'off');
        if (document.getElementById('checkbox')) {
          document.getElementById('checkbox').checked =
            get('game') === 'on' ? true : false;
        }
      }, 3000);

      cards.forEach((item) => item.classList.remove('card--disabled'));

      set('startGame', 'off');

      routerUtils.set(pageTypeRoutes.defaultPageType);
    }
  }

  cards.forEach((item) => {
    item.addEventListener('click', listener);
    let intervalId = setInterval(() => {
      if (get('game') === 'off') {
        item.removeEventListener('click', listener);
        clearInterval(intervalId);
      }
    }, 1000);
  });
}
