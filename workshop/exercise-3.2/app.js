const gridElem = document.querySelector("#grid");

for (let i = 0; i < 4; i++) {
  let newRow = document.createElement("div");
  newRow.classList.add("gridRow");
  gridElem.appendChild(newRow);

  for (let j = 0; j < 5; j++) {
    let newButton = document.createElement("button");
    newButton.classList.add("btn");
    newButton.addEventListener("click", toggleButton);
    newRow.appendChild(newButton);
    //newButton.innerText = `${i}`;
  }
}

function toggleButton() {
  event.target.classList.toggle("pressed");
}
