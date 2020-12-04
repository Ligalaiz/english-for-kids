import { get, set } from '../storage.utils';
import { routerUtils } from '../router.utils';

export default function statisticsResetUtils() {
  let gameProgress = get('gameProgress');
  gameProgress.forEach((item) => {
    item.guess = 0;
    item.mistake = 0;
    item.click = 0;
    item.percent = 0;
  });
  set('gameProgress', gameProgress);

  routerUtils.set('statistics');
}
