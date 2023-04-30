const guessForm = document.querySelector(".guessNum__form");
const guessNumInput = document.querySelector(".guessNum__input");
const guessNumOutput = document.querySelector(".guessNum__output");
const randomNum = document.querySelector(".randomNum");
const maxNumInput = document.querySelector(".maxNum__input");
const guessResult = document.querySelector(".guessResult");
const finalResult = document.querySelector(".guessResult h4");

function fn(event) {
  event.preventDefault();
  guessResult.classList.remove("hidden");
  guessNumOutput.innerText = guessNumInput.value;
  const maxNum = maxNumInput.value;
  randomNum.innerText = Math.floor(Math.random() * maxNum + 1);
  if (guessNumOutput.innerText === randomNum.innerText) {
    finalResult.innerText = "You won!";
  } else {
    finalResult.innerText = "You lost!";
  }
}

guessForm.addEventListener("submit", fn);

// const guessNum = document.querySelector(".guessNum")
// const maxNum = document.querySelector(".maxNum")
// const randomNum = document.querySelector(".randomNum")

// function fnYouChose() {
//   // guessNum.value = guessNum.
// }

// guessNum.addEventListener("submit", fnYouChose);
