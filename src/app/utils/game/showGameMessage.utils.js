import { get, set } from '../storage.utils';
export default function showGameStatusUtils() {
  const message = document.querySelector('.message__wrap');
  const text = document.querySelector('.message__text');
  const overlay = document.querySelector('.overlay');
  if (Number(get('mistake')) === 0) {
    message.classList.add('message__wrap--active-success');
    text.innerText = 'Success!';
  } else {
    message.classList.add('message__wrap--active-failure');
    text.innerText = `${get('mistake')} ${
      Number(get('mistake')) > 1 ? 'mistakes' : 'mistake'
    }`;
  }
  overlay.classList.add('overlay--active-message');
  setTimeout(() => {
    if (Number(get('mistake')) === 0) {
      message.classList.remove('message__wrap--active-success');
    } else {
      message.classList.remove('message__wrap--active-failure');
    }
    set('mistake', '0');
    overlay.classList.remove('overlay--active-message');
    text.innerText = '';
  }, 3000);
}
