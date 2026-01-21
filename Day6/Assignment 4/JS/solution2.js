//Q4
//Simple Function Declaration
function greet() {
  console.log("Hello, Welocome to JavaScript!");
}
//Q5
// Function With Parameters
function add(a, b) {
  return a + b;
}
console.log("Sum:", add(58998, 10)); // Output: Sum: 59008

//Q6
// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

isEven(8); // true
isEven(13); // false

//Q7
// Using Arrow Function
const square = (num) => num * num;
square(5); // 25

//Q8
// Function with Default Parameter
function calculateArea(radius = 1) {
  return Math.PI * radius * radius;
}

calculateArea(5); // 78.53981633974483
