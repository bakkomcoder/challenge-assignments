const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const dday = new Date("2023-09-04 00:00:00").getTime();
  const today = new Date().getTime();
  const gap = dday - today;
  const day = String(Math.ceil(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hour = String(
    Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const min = String(
    Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const sec = String(Math.ceil((gap % (1000 * 60)) / 1000)).padStart(2, "0");
  clockTitle.innerText = `${day}일 ${hour}시간 ${min}분 ${sec}초 남음`;
}

getClock();
setInterval(getClock, 1000);
