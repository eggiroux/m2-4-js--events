// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
//
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll need a variable to keep track of whether the user has won or lost

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

// the goal of my game is to click as many times as possible ine one second
const resultElem = document.querySelector(".result");
let loop = 0;
let value = 0;

let oneSecondWindow = setInterval(function () {
  if (loop === 0) {
    console.log("gamestart");
    window.addEventListener("click", clickGame);
    loop++;
  } else if (loop >= 1) {
    console.log("game end");
    window.removeEventListener("click", clickGame);
    clearInterval(oneSecondWindow);

    //always end the game after 1 second, but only lose if lose
    if (value === 0) {
      resultElem.innerText = `You lose!!`;
    }
  }
}, 1000);

function clickGame() {
  value++;
  resultElem.innerText = `You Win! ${value}`;
}
