import { get } from '../storage.utils';
import checkGuessCardUtils from './checkGuessCard.utils';
import clickHandlerUtils from './clickHandler.utils';

export default function restoreCardsListenersUtils() {
  const songArray = get('gameArray');
  const currentProgress = get('currentProgress');
  let count = songArray.length - 1;
  const cards = [...document.querySelectorAll('.card')];

  const disabledCards = checkGuessCardUtils(currentProgress, cards, 'guess');

  disabledCards.forEach((item) => item.classList.add('card--disabled'));

  const filterCards = checkGuessCardUtils(currentProgress, cards, 'notGuess');
  console.log(filterCards);
  clickHandlerUtils({ cards: filterCards, count, songArray });
}
