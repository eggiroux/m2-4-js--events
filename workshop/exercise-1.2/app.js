// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (between 3 and 5 seconds) to click anywhere on the
// screen.
//
// But this time, let's let the user know how much time they have to actually
// 'click'. If they click inside of the required time, you should tell them
// that they've won, else let them know that they've lost.

// In short,
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click (between 3 and 5 seconds)
// - tell the user how much time they have to click.

// HINTS:
// - You can use Math.random to generate a random number betwen 0 and 1, and
//   use math operators to scale it between 3 and 5 seconds

// Stretch goal
// Make the countdown live (show a countdown that updates several times a
// second)

const timeElem = document.querySelector("#time");
const resultElem = document.querySelector("#result");
const clockElem = document.querySelector("#clock");

let loops = 0;
let value = 0;
let intervalClock = 0;

let timeToClick = Math.round(3 + Math.random() * 2);
timeElem.innerText = timeToClick;

//show time left on the clock
let timeLeft = timeToClick;
clockElem.innerText = timeLeft;

let intervalGame = setInterval(function () {
  if (loops === 0) {
    console.log("gamestart");
    intervalClock = setInterval(timerCountdown, 10);
    window.addEventListener("click", clickGame);
  } else if (loops === timeToClick) {
    console.log("gameend");
    clearInterval(intervalGame);
    clearInterval(intervalClock);
    clockElem.innerText = "";
    window.removeEventListener("click", clickGame);
    if (value === 0) {
      resultElem.innerText = `You Lose!`;
    }
  }
  loops++;
}, 1000);

function clickGame() {
  value++;
  resultElem.innerText = `You Win! Clicks: ${value}`;
}

function timerCountdown() {
  timeLeft = (timeLeft - 0.01).toFixed(2);

  clockElem.innerText = `Time Left: ${timeLeft}`;
}
