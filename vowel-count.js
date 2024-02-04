// Task-3:
// Write a function to count the number of vowels in a string.

function vowelCounter(string) {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (const word of string) {
    // console.log(word);
    for (const vowel of vowels) {
      if (word === vowel) {
        count++;
      }
    }
  }
  return count;
}
const numberOfVowels = vowelCounter("aeiou");
console.log(numberOfVowels);
