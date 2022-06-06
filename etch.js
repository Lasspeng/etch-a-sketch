function changeColor(element) {
  element.style.backgroundColor = "white"
}

function createGrid(dimensions=16) {
  for (let i = 0; i < (dimensions * dimensions); i++) {
    const div = document.createElement("div");
    div.className = "square";
    div.addEventListener("mouseover", function() {
      changeColor(div);
    })
    document.getElementById("container").appendChild(div);
  }
}

function removeGrid() {
  const container = document.getElementById("container");
  while (container[0]) {
    container.removeChild(container[0]);
  }
}

var currentGrid = createGrid();

function changeDimensions() {
  result = prompt("Enter a number to change the dimensions. Both dimensions will be the same. The number cannot be higher than 100");
  if (result > 100) {
    alert("You can't input a number that is higher than 100. Try again.")
  }
  removeGrid();
  currentGrid = createGrid(result);
  document.getElementById("container").style.gridTemplateColumns = `repeat(${result}, auto)`;
  document.getElementById("container").style.gridTemplateRows = `repeat(${result}, auto)`;
}