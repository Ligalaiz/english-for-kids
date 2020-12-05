import { addAnimationBtn, removeAnimationBtn } from './animationBtn.utils';
import { get, set } from '../storage.utils';
import { routerUtils } from '../router.utils';
import sort from './sort.utils';

function changeFlage(isForward, type) {
  isForward[type] = isForward[type] === 'forward' ? 'reverse' : 'forward';
}
//TODO: бросить  в константу
let isForward = {
  category: 'forward',
  title: 'forward',
  translate: 'forward',
  click: 'forward',
  guess: 'forward',
  mistake: 'forward',
  percent: 'forward',
};

export default function sortStatisticDataUtils(target, type) {
  if (target.classList.value.match(/header__item/)) {
    if (type.match(/mousedown/)) {
      addAnimationBtn(target);
      let gameProgress = get('gameProgress');

      if (target.classList.value.match(/header__categories/)) {
        sort({
          arr: gameProgress,
          type: 'category',
          direction: isForward.category,
        });

        changeFlage(isForward, 'category');
      }
      if (target.classList.value.match(/header__words/)) {
        changeFlage(isForward, 'title');
        sort({ arr: gameProgress, type: 'title', direction: isForward.title });
      }
      if (target.classList.value.match(/header__translation/)) {
        changeFlage(isForward, 'translate');
        sort({
          arr: gameProgress,
          type: 'translate',
          direction: isForward.translate,
        });
      }
      if (target.classList.value.match(/header__trained/)) {
        changeFlage(isForward, 'click');
        sort({ arr: gameProgress, type: 'click', direction: isForward.click });
      }
      if (target.classList.value.match(/header__correct/)) {
        changeFlage(isForward, 'guess');
        sort({ arr: gameProgress, type: 'guess', direction: isForward.guess });
      }
      if (target.classList.value.match(/header__incorrect/)) {
        changeFlage(isForward, 'mistake');
        sort({
          arr: gameProgress,
          type: 'mistake',
          direction: isForward.mistake,
        });
      }
      if (target.classList.value.match(/header__percent/)) {
        changeFlage(isForward, 'percent');
        sort({
          arr: gameProgress,
          type: 'percent',
          direction: isForward.percent,
        });
      }

      set('gameProgress', gameProgress);
      routerUtils.set('statistics');
    }
    if (type.match(/mouseup/)) {
      removeAnimationBtn(target);
    }
  }
}
