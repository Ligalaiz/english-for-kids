import { get, set } from './storage.utils';
import changeCardsStyleUtils from './changeCardsStyle.utils';
import startGameUtils from './game/startGame.utils';
import clearStarsFieldUtils from './game/clearStarsField.utils';

export default function gameUtils(target, type) {
  const gameBtn = document.querySelector('.game__btn');
  const cards = document.querySelectorAll('.card');
  const starsField = document.querySelector('.stars');

  if (type.match(/change/)) {
    if (!target.dataset) return;
    if (target.dataset.control.match(/checkbox/)) {
      if (get('game') === 'on') {
        set('game', 'off');
        changeCardsStyleUtils();
        gameBtn.classList.remove('game__btn--repeat','game__btn--active');
        cards.forEach((item) => item.classList.remove('card--disabled'));
        set('startGame', 'off');
        clearStarsFieldUtils(starsField);
        set('mistake', '0');
        set('currentProgress', []);
      } else if (get('game') === 'off') {
        set('game', 'on');
        changeCardsStyleUtils();
        gameBtn.classList.add('game__btn--active');
        gameBtn.innerText = 'Start';
      }
    }
  }
  startGameUtils({ gameBtn, target, type });
}
