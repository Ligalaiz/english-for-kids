import { get, set } from '../storage.utils';

export default function addResultUtils({ target, type, current }) {
  const gameProgress = get('gameProgress');
  const value = current ? current : target.dataset.name;
  let targetCard = gameProgress.find(
    (item) => item.cardName === value
  );
  targetCard[`${type}`] += 1;
 
  const currentGuess = targetCard['guess'],
  currentMistake = targetCard['mistake'];
  
  targetCard[`percent`] = currentGuess === 0 ? 0 : Math.floor(currentGuess * 100 / (currentGuess + currentMistake));
  
  set('gameProgress', gameProgress);
}
