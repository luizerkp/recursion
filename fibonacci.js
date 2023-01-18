import testFibonacci from "../recursion/test.fibonacci.js"; 

// max safe sequence siaze that will yield a fibonacci number that is less than Number.MAX_SAFE_INTERGER
const MAX_SAFE_SEQUENCE_SIZE = 79;

const fibonacci = (sequenceSize, sequenceArr = [0, 1]) => {
  if (sequenceSize === 1 || sequenceSize === 2) {
    return sequenceSize === 1 ? sequenceArr.splice(0, 1) : sequenceArr;
  }
  if (sequenceSize < 1 || sequenceSize > MAX_SAFE_SEQUENCE_SIZE || !Number.isInteger(sequenceSize)) {
    const inputTypeNonIntergerErrMsg = "Can not perform calculation on non-intergers";
    const inputTypeOutOfRange = `Can not Return an array of size ${sequenceSize}`;
    return !Number.isInteger(sequenceSize) ? inputTypeNonIntergerErrMsg : inputTypeOutOfRange;
  }
  const fibNum = sequenceArr[sequenceArr.length - 1] + sequenceArr[sequenceArr.length - 2];
  sequenceArr.push(fibNum);
  return fibonacci(sequenceSize - 1, sequenceArr);
};

// sample error outputs
console.log(fibonacci("a")); // "Can not perform calculation on non-intergers"
console.log(fibonacci(0)); // "Can not Return an array of size 0"

// sample outputs
console.log(fibonacci(1)); // [0]
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

testFibonacci(fibonacci);