export default function changeCardsStyleUtils() {
  const cards = [...document.querySelectorAll('.card')];
  const cardsContent = [...document.querySelectorAll('.card__content')];
  cards.forEach((item) => {
    item.classList.toggle('card--game');
  });
  cardsContent.forEach((item) => {
    item.classList.toggle('card__content--game');
  });
}