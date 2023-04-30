const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = document.querySelector("h2");

function clickChange() {
  superEventHandler.style.color = colors[0];
  superEventHandler.textContent = "That was a click!";
}

function hoverChange() {
  superEventHandler.style.color = colors[1];
  superEventHandler.innerText = "The mouse is here!";
}

function leaveChange() {
  superEventHandler.style.color = colors[2];
  superEventHandler.innerText = "The mouse is gone.";
}

function resizeChange() {
  superEventHandler.style.color = colors[3];
  superEventHandler.innerText = "You just resized!";
}

function contextmenuChange() {
  superEventHandler.style.color = colors[4];
  superEventHandler.innerText = "That was a right clcik!";
}

superEventHandler.addEventListener("click", clickChange);
superEventHandler.addEventListener("mouseover", hoverChange);
superEventHandler.addEventListener("mouseleave", leaveChange);
superEventHandler.addEventListener("resize", resizeChange);
superEventHandler.addEventListener("contextmenu", contextmenuChange);

// const height = window.innerHeight;
// const width = window.innerWidth;

// if (height < height/2 ) {
//   text.innerText = "You just resized!"
// }
