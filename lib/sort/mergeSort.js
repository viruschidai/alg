(function() {

  function mergeSort(arr) {
    if (!arr) {return;}

    if (arr.length < 2) {
      return arr;
    }

    var dividePoint = Math.ceil(arr.length / 2),
      right = arr.splice(dividePoint, arr.length);

    return combine(mergeSort(arr), mergeSort(right));
  }

  function combine(left, right) {
    var indexI = 0,
      indexJ = 0,
      ret = [];

    while (indexI < left.length && indexJ < right.length) {
      var valueI = left[indexI],
        valueJ = right[indexJ];
      if (valueI > valueJ) {
        ret.push(valueJ);
        indexJ++;
      } else {
        ret.push(valueI);
        indexI++;
      }
    }

    if (indexI < left.length) {
      ret = ret.concat(left.slice(indexI, left.length));
    }

    if (indexJ < right.length) {
      ret = ret.concat(right.slice(indexJ, right.length));
    }

    return ret;
  }

  if ((typeof module === 'object') && module.exports) {
    module.exports = mergeSort;
  } else {
    // just set the global for non-node platforms.
    this.mergeSort = mergeSort;
  }
})();
