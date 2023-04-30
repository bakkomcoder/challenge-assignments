const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");
const btn = document.querySelector("button");

function colorFn() {
  const randomColorOne = colors[Math.floor(Math.random() * colors.length)];
  const randomColorTwo = colors[Math.floor(Math.random() * colors.length + 1)];
  body.style.backgroundImage = `linear-gradient(45deg, ${randomColorOne}, ${randomColorTwo})`;
}
colorFn();

btn.addEventListener("click", colorFn);
