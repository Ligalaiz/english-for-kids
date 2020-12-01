export default function showGameStatusUtils() {
  const message = document.querySelector('.message__wrap');
  message.classList.add('message__wrap--active');

  setTimeout(() => message.classList.remove('message__wrap--active'), 3000);
}
