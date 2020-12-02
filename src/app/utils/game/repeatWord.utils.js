import { get } from '../storage.utils';
import cardsSoundUtils from '../cardsSound.utils';

export default function repeatWordUtils(target, type) {
  const repeatBtn = document.querySelector('.repeat__btn');
  function repeat() {
    {
      cardsSoundUtils({
        sound: get('gameArray')[get('gameArray').length - 1],
        path: get('page'),
      });
    }
  }

  if (target.classList.contains('game__btn')) {
    if (type.match(/mousedown/)) {
      repeat();
    }
  }
}
