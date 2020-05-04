// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, add some text to the page.

// Hints:
// - Target the <body>

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------

window.addEventListener("click", addText);

const bodyElem = document.querySelector("body");

function addText() {
  bodyElem.innerText = "Hola muchachos";
}
