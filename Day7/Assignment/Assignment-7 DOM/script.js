// Get elements using DO   M methods
var inputBox = document.getElementById("userInput");
var paragraph = document.getElementById("textPara");
var button = document.getElementById("updateBtn");

// Add click event to button
button.addEventListener("click", function () {
  // 1. Replace paragraph text with input value
  paragraph.innerText = inputBox.value;

  // 2. Change paragraph text color
  paragraph.style.color = "green";

  // 3. Change button text
  button.innerText = "Updated";

  // 4. Change button background color
  button.style.backgroundColor = "purple";
});
