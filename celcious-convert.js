// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(calsius) {
  const fahrenheit = calsius * 1.8 + 32;
  return fahrenheit;
}
const checkFahrenheit = celsiusToFahrenheit(3);
console.log(checkFahrenheit);
