const gridElem = document.querySelector("#grid");

let arrayPositions = [];

let gridSquareSize = 10;

for (let i = 0; i < gridSquareSize; i++) {
  for (let j = 0; j < gridSquareSize; j++) {
    arrayPositions.push([i, j]);
  }
}

gridElem.setAttribute(
  "style",
  `display: grid;
    grid-template-columns: repeat(${gridSquareSize}, 80px);
    grid-template-rows: repeat(${gridSquareSize}, 80px);
  
    column-gap: 5px;
    row-gap: 5px;`
);

for (let i = 0; i < 30; i++) {
  let newButton = document.createElement("button");
  newButton.classList.add("btn");
  newButton.classList.add("grid-position");
  newButton.addEventListener("click", toggleColor);
  gridElem.appendChild(newButton);
  //newButton.innerText = i;

  //code for finding random grid index
  let randomIndex = Math.floor(
    Math.random() * Math.floor(arrayPositions.length)
  );
  let gridPosition = arrayPositions.splice(randomIndex, 1)[0];

  console.log(gridPosition);

  newButton.setAttribute(
    "style",
    `grid-column: ${gridPosition[0] + 1} / ${gridPosition[0] + 2};grid-row: ${
      gridPosition[1] + 1
    } / ${gridPosition[1] + 2};`
  );
}

function toggleColor() {
  event.target.classList.toggle("pressed");
}
