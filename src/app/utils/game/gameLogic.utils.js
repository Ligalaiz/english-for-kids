import { get, set } from '../storage.utils';
import gameTimerUtils from './gameTimer.utils';
import { DELAY, DELAY_MS } from '../../constants/constants';
import cardsSoundUtils from '../cardsSound.utils';
import clickHandlerUtils from './clickHandler.utils';

function toDo() {
  const cards = document.querySelectorAll('.card');

  let songArray = [...cards]
    .map((item) => item.dataset.sound)
    .sort(() => Math.random() - 0.5);
  set('gameArray', songArray);

  let count = cards.length - 1;

  cardsSoundUtils({ path: get('page'), sound: songArray[count] });
  clickHandlerUtils({ cards, count, songArray });
}

export default function gameLogicUtils() {
  if (get('game') === 'on') {
    // gameTimerUtils(DELAY);
    // setTimeout(() => toDo(), DELAY_MS);
    toDo();
  }
}
