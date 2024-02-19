// Question 1: Sum all numbers
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

// let output = sumRange(4);
// console.log(output);

// function sumRange(n) {
//   if (n === 1) {
//     return 1;
//   } else {
//     return n + sumRange(n - 1);
//   }
// }

// Question 2: Power function
// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

// function power(base, exponent) {
//   if (exponent === 0) {
//     return 1;
//   } else {
//     return base * power(base, exponent - 1);
//   }
// }
// console.log(2, 4);

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.


// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// let allAreLessThanSeven = all([1, 2, 9], function (num) {
//   return num < 7;
// });

// function all(array, callback) {
//   let copy = copy || array.slice();

//   if (copy.length === 0) return true;

//   if (callback(copy[0])) {
//     copy.shift();
//     return all(copy, callback);
//   } else {
//     return false;
//   }
// }
// console.log(allAreLessThanSeven); // false





function mergeShort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeShort(leftArr), mergeShort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}
const arr = [250, 5, 5, 7, 8, 16, 80, 41, 39, 42, 17, 69, 0, 2, 3, 1];

// log's out  [0, 1, 2, 3, 5, 5, 7, 8, 16, 17, 39, 41, 42, 69, 80, 250] with shorted
const showMergeShort = document.querySelector(".output-mergeShort");
showMergeShort.textContent = ` MergeShort question: [250, 5, 5, 7, 8, 16, 80, 41, 39, 42, 17, 69, 0, 2, 3, 1]
MergeShort answer: [${mergeShort(arr)}]`;
