export default function checkGuessCardUtils(arr, cards, value) {
  let filterCards = null;
  if (value === 'guess') {
    filterCards = cards.filter(function (card) {
      return (
        arr.filter(function (item) {
          return card.dataset.sound === item.card && item.state === 'true';
        }).length !== 0
      );
    });
  } else {
    filterCards = cards.filter(function (card) {
      return (
        arr.filter(function (item) {
          return card.dataset.sound !== item.card || item.state === 'false';
        }).length !== 0
      );
    });
  }
  return filterCards;
}
