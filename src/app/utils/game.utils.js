import { get, set } from './storage.utils';
import changeCardsStyleUtils from './changeCardsStyle.utils';
import gameLogicUtils from './game/gameLogic.utils'


export default function gameUtils(target) {
  const repeatBtn = document.querySelector('.repeat__btn');
  
  if (!target.dataset) return;
  if (target.dataset.control.match(/checkbox/)) {
    if (get('game') === 'on') {
      set('game', 'off');
      changeCardsStyleUtils();
      repeatBtn.classList.remove('repeat__btn--active');
    } else if (get('game') === 'off') {
      set('game', 'on');
      changeCardsStyleUtils();
      repeatBtn.classList.add('repeat__btn--active');
    }
    gameLogicUtils();
  }
}
