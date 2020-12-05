export default function sort({ arr, type, direction }) {
  function forward() {
    arr.sort((a, b) => {
      if (a[type] < b[type]) {
        return -1;
      }
      if (a[type] > b[type]) {
        return 1;
      }
      return 0;
    });
    return arr;
  }

  function reverse() {
    arr.sort((a, b) => {
      if (a[type] < b[type]) {
        return 1;
      }
      if (a[type] > b[type]) {
        return -1;
      }
      return 0;
    });
    return arr;
  }

  return direction === 'forward' ? forward() : reverse();
}
