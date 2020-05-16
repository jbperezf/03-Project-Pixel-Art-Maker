const inputElements = document.querySelectorAll("input");
/* 
Input elements:
 - 0 height
 - 1 width
 - 2 submit
 - 3 color
*/

// Select color input
let colorPicker = inputElements[3];

// Select PixelCanvas
let pixelCanvas = document.getElementById("pixelCanvas");

// function draw(event)
let drawOnClick = pixelCanvas.addEventListener("click", function (event) {
  if (event.target.nodeName === "TD") {
    event.target.style.backgroundColor = colorPicker.value;
  }
});

// Select size input
let height = inputElements[0];
let width = inputElements[1];

// When size is submitted by the user, call makeGrid()
const submitButton = inputElements[2];
submitButton.addEventListener("click", makeGrid);

function makeGrid(event) {
  pixelCanvas.innerHTML = "";

  for (let rows = height.defaultValue; rows <= height.value; rows++) {
    // Create new row
    let newRow = pixelCanvas.insertRow();
    for (let cells = width.defaultValue; cells <= width.value; cells++) {
      // Create new cell
      newRow.insertCell();
    }
  }

  event.preventDefault();
}
