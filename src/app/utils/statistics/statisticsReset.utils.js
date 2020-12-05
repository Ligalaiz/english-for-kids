import { get, set } from '../storage.utils';
import { routerUtils } from '../router.utils';
import { addAnimationBtn, removeAnimationBtn } from './animationBtn.utils';

export default function statisticsResetUtils(target, type) {
  if (target.classList.value.match(/statistics__btn--reset/)) {
    if (type.match(/mousedown/)) {
      addAnimationBtn(target);
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
    if (type.match(/mouseup/)) {
      removeAnimationBtn(target);
    }
  }
}
