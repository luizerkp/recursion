/**
 * Divide  : Divide array into two sub-arrays
 * Conquer : Sort the two sub-arrays recursively using merge sort
 * Combine : Merge the two sub-arrays into a sorted array
 * */

// merge both sub-arrays
const merge = (leftSubArray, rightSubArray) => {
  const leftSubArrayLength = leftSubArray.length;
  const rightSubArrayLength = rightSubArray.length;
  const mergedArray = [];

  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < leftSubArrayLength && rightIdx < rightSubArrayLength) {
    // ***NOTE: for descending order change comparison to '>='
    if (leftSubArray[leftIdx] < rightSubArray[rightIdx]) {
      mergedArray.push(leftSubArray[leftIdx]);
      leftIdx += 1;
    } else {
      mergedArray.push(rightSubArray[rightIdx]);
      rightIdx += 1;
    }
  }

  const leftRemainder = leftSubArray.slice(leftIdx);
  const rightRemainder = rightSubArray.slice(rightIdx);

  return [...mergedArray, ...leftRemainder, ...rightRemainder];
};

function arrayEquals(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}

// recusive call mergeSort
const mergeSort = (arr) => {
  if (!Array.isArray(arr)) {
    return `mergeSort error: parameter must be an Array found ${typeof arr}`;
  }

  if (arr.length <= 1) {
    return arr;
  }

  // find array mid point
  const mid = Math.floor(arr.length / 2);

  const leftSubArray = arr.slice(0, mid);
  const rightSubArray = arr.slice(mid, arr.length);

  // Combine
  return merge(mergeSort(leftSubArray), mergeSort(rightSubArray));
};

const arr = [2, 1, 3, 7, 6, 5, 0, 4, 9, 8];

console.log(mergeSort(arr)); // expected [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const testMergeSort = (mergeSortFunc) => {
  const testArr1 = [];
  const testArr1Expected = [];

  const testArr2 = [2, 1, 3, 7, 6, 5, 0, 4, 9, 8];
  const testArr2Expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const testArr3 = "Hello";
  const testArr3Expected = "mergeSort error: parameter must be an Array found string";

  const testArr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const testArr4Expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const testArr5 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
  const testArr5Expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const testArr6 = 899;
  const testArr6Expected = "mergeSort error: parameter must be an Array found number";

  const testArr7 = ["a", "b", "c", "e"];
  const testArr7Expected = ["a", "b", "c", "e"];

  const testArr8 = [1];
  const testArr8Expected = [1];

  const testArr9 = [5, 10, 7, 11, 1, 8, 9, 6, 3, 4, 2];
  const testArr9Expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  const testArr10 = [27, 2, 2, 4, 22, 5, 1, 3, 3, 1, 33];
  const testArr10Expected = [1, 1, 2, 2, 3, 3, 4, 5, 22, 27, 33];

  const testArr11 = [1, 1, 1, 1, 1, 1, 1, 1, 0];
  const testArr11Expected = [0, 1, 1, 1, 1, 1, 1, 1, 1];

  const testArr12 = true;
  const testArr12Expected = "mergeSort error: parameter must be an Array found boolean";

  const testCases = [
    [testArr1, testArr1Expected],
    [testArr2, testArr2Expected],
    [testArr3, testArr3Expected],
    [testArr4, testArr4Expected],
    [testArr5, testArr5Expected],
    [testArr6, testArr6Expected],
    [testArr7, testArr7Expected],
    [testArr8, testArr8Expected],
    [testArr9, testArr9Expected],
    [testArr10, testArr10Expected],
    [testArr11, testArr11Expected],
    [testArr12, testArr12Expected],
  ];
  testCases.forEach((testCase) => {
    const test = testCase[0];
    const expected = testCase[1];
    const result = mergeSortFunc(test);
    let pass = false;

    if (Array.isArray(result)) {
      pass = arrayEquals(expected, result);
    } else {
      pass = expected === result;
    }

    if (!pass) {
      console.error(`Test case failed for Test: ${test}: expected ${expected}, got ${result}`);
    } else {
      console.log(`Test case passed for Test: ${test}`);
    }
  });
};

testMergeSort(mergeSort);