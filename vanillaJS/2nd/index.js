const body = document.querySelector("body");
const widthOutput = document.querySelector("#width");
const text = document.querySelector("h2");

function colorChange() {
  const width = window.innerWidth;
  console.log(width);
  if (width < 700) {
    body.style.backgroundColor = "yellow";
    text.innerText = "It's too small!";
  } else if (width >= 700 && width < 1400) {
    body.style.backgroundColor = "blue";
    text.innerText = "Adequate";
  } else if (width >= 1400) {
    body.style.backgroundColor = "green";
    text.innerText = "It's too large!";
  }
  widthOutput.textContent = width;
}
colorChange();
window.addEventListener("resize", colorChange);
