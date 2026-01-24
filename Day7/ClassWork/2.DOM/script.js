// Change the paragraph text
function changeText() {
  document.getElementById("mainText").innerText = "This Text changed";
}

// Change text color from blue to red
function changeColor() {
  document.getElementById("mainText").style.color = "red";
}

// Show hello message with name
function showText() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("result").innerText = "Hello, " + name;
}
