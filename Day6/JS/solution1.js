 
//Q1 Tdentify Data Types

const age = 25
const name1 = "Suvarna"
const isAdmin = true

const undefinedVar = undefined
const department = null
const Address = {
  city: "Pune",
  zip: "443001"
}



const skills = ["JavaScript", "React", "Node.js"]

console.log(typeof age)      // "number"
console.log(typeof name)     // "string"
console.log(typeof isAdmin)  // "boolean"

console.log(typeof undefinedVar) // "undefined"
console.log(typeof null)      // "object"
console.log(typeof Object)      // ""
console.log(typeof Array)



//Q2 Basic Arithmetic Operations
// Addition
const num1 =10
const num2 =20
const sum =num+num2
console.log("The sum of", num1, "and", num2, "is", sum)
//Output: The sum of 10 and 20 is 30

//Substrction
const substraction = num2 - num1
console.log("The substraction of", num2, "and", num1, "is", substraction)
//Output: The substraction of 20 and 10 is 10

//Multiplication
const multiplication = num1 * num2
console.log("The multiplication of", num1, "and", num2, "is", multiplication)
//Output: The multiplication of 10 and 20 is 200

//Division
const division = num2/num1
console.log("The division of", num2, "and", num1, "is", division)
//Output: The division of 20 and 10 is 2  

//Modulus
const modulus = num2 % num1
console.log("The modulus of", num2, "and", num1, "is", modulus)
//Output: The modulus of 20 and 10 is 0 

//Q3 String Operations
const name = "Suvarna Parihar";
console.log("Length:", name.length);
console.log("Uppercase:", name.toUpperCase());
console.log("Lowercase:", name.toLowerCase());
console.log("First Character:", name[0]);