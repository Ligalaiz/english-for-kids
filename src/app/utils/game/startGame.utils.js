import gameLogicUtils from './gameLogic.utils';
// import  repeatWordUtils from './game/repeatWord.utils';

import { get, set } from '../storage.utils';

export default function startGameUtils({ gameBtn, target, type }) {
  

  function checkStateBtn() {
    if (get('startGame') === 'off') {
      set('startGame', 'on');
      gameBtn.innerText = 'Repeat';
      gameLogicUtils();
    }
  }
 
  function animationBtn() {
    gameBtn.classList.toggle('game__btn--anime');
  }

  if (target.classList.contains('game__btn')) {
    if (type.match(/mousedown/)) {
      animationBtn();
      checkStateBtn();
      // if (get('startGame') === 'on') {
      
      // }
    }
    if (type.match(/mouseup/)) {
      animationBtn();
    }
  }
  
  
  // repeatWordUtils(target, type);
}
