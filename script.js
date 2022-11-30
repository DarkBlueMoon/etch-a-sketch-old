let gridRows = 16;
let gridCols = 16;
const containerDiv = document.querySelector(".container");

function createGrid(rows, cols) {
  for (let i = 0; i < rows * cols; i++) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-cols", cols);
    const cell = document.createElement("div");
    cell.classList.add("cell");
    containerDiv.appendChild(cell);
  }
}

createGrid(gridRows, gridCols);
