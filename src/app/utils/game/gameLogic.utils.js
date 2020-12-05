import { get, set } from '../storage.utils';
import cardsSoundUtils from '../cardsSound.utils';
import clickHandlerUtils from './clickHandler.utils';

function toDo() {
  const cards = document.querySelectorAll('.card');

  let songArray = [...cards]
    .map((item) => {
      return {
        sound: item.dataset.sound,
        category: item.dataset.category,
      };
    })
    .sort(() => Math.random() - 0.5);
  set('gameArray', songArray);

  let count = cards.length - 1;

  const getPage =
    get('page') === 'statistics'
      ? get('gameArray')[get('gameArray').length - 1]['category']
      : get('page');

  cardsSoundUtils({ path: getPage, sound: songArray[count]['sound'] });
  clickHandlerUtils({ cards, count, songArray });
}

export default function gameLogicUtils() {
  if (get('game') === 'on') {
    toDo();
  }
}
