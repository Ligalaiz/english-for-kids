import { addAnimationBtn, removeAnimationBtn } from './animationBtn.utils';


export default function repeatDifficultWordsUtils(target, type) {
  if (target.classList.value.match(/statistics__btn--repeat/)) {
    if (type.match(/mousedown/)) {
      addAnimationBtn(target);
    }
    if (type.match(/mouseup/)) {
      removeAnimationBtn(target);
    }
  }
}
