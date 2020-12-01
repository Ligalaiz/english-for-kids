import cardsSoundUtils from '../cardsSound.utils';

export default function gameTimerUtils(DELAY) {
  const timer = document.querySelector('.timer__wrap'),
    timerTable = document.querySelector('.timer');
  timer.classList.add('timer__wrap--active');

  timerTable.textContent = DELAY;
  let timerSetInterval = setInterval(() => {
    timerTable.textContent = DELAY--;
    cardsSoundUtils({ sound: 'timer', path: 'app' });
    if (DELAY < 0) {
      clearInterval(timerSetInterval);
      cardsSoundUtils({ sound: 'bell', path: 'app' });
      timer.classList.remove('timer__wrap--active');
    }
  }, 1000);
}
