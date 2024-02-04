// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function longestWord(string) {
  const spliteStr = string.split(" ");
  let contentlongestWord = " ";
  for (const word of spliteStr) {
    if (word.length > contentlongestWord.length) {
      contentlongestWord = word;
    }
  }
  return contentlongestWord;
}
const stringOfWords = longestWord(
  "I am learning Programming to become a programmer"
);
console.log(stringOfWords);
