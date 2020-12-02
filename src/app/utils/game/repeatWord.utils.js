import { get } from '../storage.utils';
import cardsSoundUtils from '../cardsSound.utils';

export default function repeatWordUtils() {
  cardsSoundUtils({
    sound: get('gameArray')[get('gameArray').length - 1],
    path: get('page'),
  });
}
