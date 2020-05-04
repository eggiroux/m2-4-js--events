const gridElem = document.querySelector("#grid");

for (let i = 0; i < 4; i++) {
  let newRow = document.createElement("div");
  gridElem.appendChild(newRow);

  for (let j = 0; j < 5; j++) {
    let newButton = document.createElement("button");
    newButton.classList.add("btn");
    newButton.addEventListener("click", addClass);
    newRow.appendChild(newButton);
  }
}

function addClass() {
  event.target.classList.add("pressed");
}
