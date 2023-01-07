
const fibonacci = (sequenceSize, sequenceArr = [0, 1]) => {
  if (sequenceSize === 1 || sequenceSize === 2) {
    return sequenceSize === 1 ? sequenceArr.splice(0, 1) : sequenceArr;
  } else if (sequenceSize < 1 || !Number.isInteger(sequenceSize)) {
    const inputTypeNonIntergerErrMsg = "Can not perform calculation on non-intergers";
    const inputTypeLessThanOne = "Can not Return an array of size 0";
    return !Number.isInteger(sequenceSize) ? inputTypeNonIntergerErrMsg : inputTypeLessThanOne;
  }
  const fibNum = sequenceArr[sequenceArr.length - 1] + sequenceArr[sequenceArr.length - 2];
  sequenceArr.push(fibNum);
  return fibonacci(sequenceSize - 1, sequenceArr);
};

// sample error outputs
console.log(fibonacci("a"));  // "Can not perform calculation on non-intergers"
console.log(fibonacci(0))  // "Can not Return an array of size 0"

// sample outputs
console.log(fibonacci(1))  // [0]
console.log(fibonacci(8))  // [0, 1, 1, 2, 3, 5, 8, 13]

const testFibonacci = (fibonacci, ) => { 
  // the first 50 fibonacci numbers   
  const fibSequeneToFiftyNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049];

  // error messages
  const inputTypeNonIntergerErrMsg = "Can not perform calculation on non-intergers";
  const inputTypeLessThanOne = "Can not Return an array of size 0";

  const testCases = [    
  ["a", inputTypeNonIntergerErrMsg],
  ["1", inputTypeNonIntergerErrMsg],
  [true, inputTypeNonIntergerErrMsg],
  [2.5, inputTypeNonIntergerErrMsg],
  [.5, inputTypeNonIntergerErrMsg],
  [0.1, inputTypeNonIntergerErrMsg],
  [0, inputTypeLessThanOne],
  [-1, inputTypeLessThanOne],
  [50, fibSequeneToFiftyNumbers]
  ];

  for (const testCase of testCases) {
    const size = testCase[0];
    const expected = testCase[1];
    const result = fibonacci(size);
    let pass = false;

    if (Array.isArray(result)) {
      pass = arrayEquals(expected, result);
    } else {
      pass = expected === result;
    }

    if (!pass) {
      console.error(`Test case failed for size = ${size}: expected ${expected}, got ${result}`);
    } else {
      console.log(`Test case passed for size = ${size}`);
    }
  }
}

function arrayEquals(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);
}

testFibonacci(fibonacci);

