//Choose a random color
const button = document.querySelector("button");
const body = document.querySelector("body");
const colors = ["red", "green", "blue", "yellow", "pink", "purple"];
//Starting background color before the click
body.style.backgroundColor = "lightblue";
// Event listener wait for user input
button.addEventListener("click", changeBackground);
// Function for random color
function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length + 1);
  body.style.backgroundColor = colors[colorIndex];
}
