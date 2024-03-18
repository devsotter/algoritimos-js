function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
  
    return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  const unsortedArray = [5, 3, 7, 2, 8, 4, 1];
  console.log("Unsorted array:", unsortedArray);
  const sortedArray = mergeSort(unsortedArray);
  console.log("Sorted array:", sortedArray);
  