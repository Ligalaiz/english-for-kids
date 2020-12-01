export default function cardsShuffleUtils(tempData) {
  let j, temporary;
  for (let i = tempData.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temporary = tempData[j];
    tempData[j] = tempData[i];
    tempData[i] = temporary;
  }
}
