// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function repeatedNumbers(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === target) {
      count++;
    } else {
      count = 0;
    }
  }
  return count;
}

const arr = [5, 7, 8, 20, 20, 50, 5, 4, 20, 70, 210, 20, 20];
console.log(repeatedNumbers(arr, 50));
