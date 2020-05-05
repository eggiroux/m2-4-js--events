const clockElem = document.querySelector("#clock");
const stopwatchElem = document.querySelector("#stopwatch");
const timerElem = document.querySelector("#timer");

const stopwatchField = document.querySelector("#stopwatch");
const startStopwatchBtn = document.querySelector("#swStart");
const stopStopwatchBtn = document.querySelector("#swStop");
const resetStopwatchBtn = document.querySelector("#swReset");
stopStopwatchBtn.disabled = true;

const timerInputField = document.querySelector(".timerInput");
const timerInputDisplay = document.querySelector(".timerDisplay");
const timerStartBtn = document.querySelector("#timerStart");

////////
//clock section
///////
let clockUpdate = setInterval(function () {
  let currentTime = new Date();
  let dateElements = String(currentTime).split(" ");
  clockElem.innerText = dateElements[4];
}, 1000);

////////
//stopwatch section
///////
let stopwatchInterval = 0;
let stopwatchTimer = 0;
let displayTimerString = "";

function startStopwatch() {
  startStopwatchBtn.disabled = true;
  stopStopwatchBtn.disabled = false;
  console.log("start the stopwatch");
  stopwatchInterval = setInterval(function () {
    stopwatchTimer = stopwatchTimer + 0.01;

    if (String(stopwatchTimer.toFixed(2)).length === 4) {
      displayTimerString = `00.0${stopwatchTimer.toFixed(2)}`;
    } else if (String(stopwatchTimer.toFixed(2)).length === 5) {
      displayTimerString = `00.${stopwatchTimer.toFixed(2)}`;
    }

    stopwatchField.innerText = displayTimerString;
  }, 10);
}

function stopStopwatch() {
  console.log("stop the stopwatch");
  clearInterval(stopwatchInterval);
  startStopwatchBtn.disabled = false;
  stopStopwatchBtn.disabled = true;
}

function resetStopwatch() {
  stopwatchTimer = 0;
  stopwatchField.innerText = "00.00.00";
}

startStopwatchBtn.addEventListener("click", startStopwatch);

stopStopwatchBtn.addEventListener("click", stopStopwatch);

resetStopwatchBtn.addEventListener("click", resetStopwatch);

////////
//timer section
///////
let timerInterval = 0;

timerSoundAlert = new sound("chime.mp3");

function startTimer() {
  timerSoundAlert.stop();
  let newTimer = Number(timerInputField.value);
  if (newTimer !== 0) {
    timerInterval = setInterval(function () {
      newTimer = newTimer - 0.01;
      displayTimerValue = newTimer.toFixed(2);
      timerInputDisplay.innerText = displayTimerValue;
      if (displayTimerValue == 0) {
        timerInputDisplay.innerText = "00.00";
        clearInterval(timerInterval);
        timerSoundAlert.play();
        alert("Timer's Finished!");
      }
    }, 10);
  } else {
    alert("You need to input a timer value!");
  }
}

timerStartBtn.addEventListener("click", startTimer);

//this is totally ripped from the wc3 help thing
function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}
