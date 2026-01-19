//Q4
function greet() {
  console.log("Hello, Welocome to JavaScript!");
}
//Q5
function add(a, b) {
  return a + b;
}
console.log("Sum:", add(58998, 10)); // Output: Sum: 59008

//Q6
function isEven(number) {
  return number % 2 === 0;
}

isEven(8); // true
isEven(13); // false

//Q7
const square = (num) => num * num;
square(5); // 25

//Q8
function calculateArea(radius = 1) {
  return Math.PI * radius * radius;
}

calculateArea(5); // 78.53981633974483
