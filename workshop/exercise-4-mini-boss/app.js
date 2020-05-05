const mainElem = document.querySelector("main");
const btnStartElem = document.querySelector(".btnStart");
const timerElem = document.querySelector(".timer");
const gridElem = document.querySelector("#grid");

btnStartElem.addEventListener("click", startGame);

let positionsArray = [];
let buttonsArray = [];
let timeLeft = 0;
let buttonsClicked = 0;
let buttonsToClick = 0;

function startGame() {
  //remove button
  mainElem.removeChild(btnStartElem);
  //spawn a grid
  spawnGrid(10, 9);
  //start the timer
  timerStart();
}

function spawnGrid(gridWidth, gridHeight) {
  //map all the grid positions in an array
  let positionsArray = [];
  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      positionsArray.push([i, j]);
    }
  }
  //give the gridElem the attributes based on this gridSize
  gridElem.setAttribute(
    "style",
    `display: inline-grid;
    grid-template-columns: repeat(${gridWidth}, 8vw);
    grid-template-rows: repeat(${gridHeight}, 8vh);
    
    column-gap: 5px;
    row-gap: 5px;
    align-items: stretch;`
  );
  //randomly decide how many buttons will be added and set the timer for 2 seconds per button
  let buttonQty = Math.floor(10 + Math.random() * 10);
  timeLeft = buttonQty;
  buttonsToClick = buttonQty;

  //create all the buttons
  for (let i = 0; i < buttonQty; i++) {
    let newButton = document.createElement("button");
    newButton.classList.add("btn");
    newButton.addEventListener("click", clickButton);
    gridElem.appendChild(newButton);
    buttonsArray.push(newButton);

    //find a random position in the positions array
    let randomIndex = Math.floor(
      Math.random() * Math.floor(positionsArray.length)
    );
    let gridPosition = positionsArray.splice(randomIndex, 1)[0];

    //set each button in the array with CSS grid attribute
    newButton.setAttribute(
      "style",
      `grid-column: ${gridPosition[0] + 1} / ${gridPosition[0] + 2};grid-row: ${
        gridPosition[1] + 1
      } / ${gridPosition[1] + 2};`
    );
  }
}

function clickButton() {
  event.target.removeEventListener("click", clickButton);
  event.target.classList.add("pressed");
  buttonsClicked++;
}

function timerStart() {
  let timerInterval = setInterval(function () {
    timeLeft = (timeLeft - 0.01).toFixed(2);
    timerElem.innerText = timeLeft;

    if (buttonsClicked === buttonsToClick) {
      clearInterval(timerInterval);
      alert(`You win! With ${timeLeft} left.`);
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("You Lose!");
      buttonsArray.forEach(function (item) {
        item.removeEventListener("click", clickButton);
      });
    }
  }, "10");
}
