export default function clearStarsFieldUtils(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

