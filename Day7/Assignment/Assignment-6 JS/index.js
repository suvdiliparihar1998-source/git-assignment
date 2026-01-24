// Q1. Student Object and JSON Handling
const student = {
  studentId: 101,
  fullName: "Rahul Sharma",
  email: "rahul.sharma@example.com",
  course: "Computer Science",
  marks: [85, 92, 78, 88, 95],
};

// Convert the student object into a JSON string and print it
const jsonString = JSON.stringify(student);
console.log("JSON String:");
console.log(jsonString);

// Convert the JSON string back into a JavaScript object and print the result
const parsedStudent = JSON.parse(jsonString);
console.log("\nParsed Student Object:");
console.log(parsedStudent);

// Q2. Student List Using Arrays
let students = ["Amit", "Priya", "Raj", "Sneha"];

// Print the list of students
console.log("\nOriginal list of students:");
console.log(students);
o;
// Add a new student to the list
students.push("Karan");
console.log("\nAfter adding a new student:");
console.log(students);

// Remove the first student from the list
students.shift();
console.log("\nAfter removing the first student:");
console.log(students);

// Print the total number of students
console.log("\nTotal number of students:");
console.log(students.length);

// Display the last student in the list
console.log("\nLast student in the list:");
console.log(students[students.length - 1]);

// Q3. Marks Processing Using Array Methods
let marks = [35, 67, 82, 49, 90, 58];

// 1. Create a new array containing marks of students who have passed (marks ≥ 50)
const passedMarks = marks.filter((mark) => mark >= 50);
console.log("\nMarks of students who passed (>=50):");
console.log(passedMarks);

// 2. Create a new array that converts marks into percentage format
const percentageMarks = marks.map((mark) => `${mark}%`);
console.log("\nMarks in percentage format:");
console.log(percentageMarks);

// 3. Check and display whether any student has scored above 85
const hasAbove85 = marks.some((mark) => mark > 85);
console.log("\nIs there any student with marks above 85?");
console.log(hasAbove85);
