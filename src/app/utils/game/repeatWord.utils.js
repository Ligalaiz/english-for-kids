import { get } from '../storage.utils';
import cardsSoundUtils from '../cardsSound.utils';

export default function repeatWordUtils() {
  const getPage =
    get('page') === 'statistics'
      ? get('gameArray')[get('gameArray').length - 1]['category']
      : get('page');
      
  cardsSoundUtils({
    sound: get('gameArray')[get('gameArray').length - 1]['sound'],
    path: getPage,
  });
}
