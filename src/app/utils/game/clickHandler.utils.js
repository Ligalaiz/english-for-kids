import cardsSoundUtils from '../cardsSound.utils';
import { get, set } from '../storage.utils';
import createElementUtils from '../createElement.utils';
import clearStarsFieldUtils from './clearStarsField.utils';
import changeCardsStyleUtils from '../changeCardsStyle.utils';
import showGameMessageUtils from './showGameMessage.utils';
import { pageTypeRoutes } from '../../app.routes';
import { routerUtils } from '../router.utils';

export default function clickHandlerUtils({ cards, count, songArray }) {
  const starsField = document.querySelector('.stars');
  const gameBtn = document.querySelector('.game__btn');

  function listener(e) {
    e.preventDefault();
    const { target } = e;

    if (!target.closest('.card')) return;

    if (target.closest('.card').dataset.sound === songArray[count]) {
      createElementUtils(
        'div',
        'stars__item stars__item--true',
        null,
        starsField
      );
      target.closest('.card').classList.add('card--disabled');

      console.log('добавляем в score успех');

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
      console.log('добавляем в score ошибку');
    }
    songArray.pop();
    set('gameArray', songArray);
    count--;
    if (count >= 0) {
      setTimeout(
        () => cardsSoundUtils({ path: get('page'), sound: songArray[count] }),
        1000
      );
    }
    if (count < 0) {
      clearStarsFieldUtils(starsField);
      changeCardsStyleUtils();
      showGameMessageUtils();
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
