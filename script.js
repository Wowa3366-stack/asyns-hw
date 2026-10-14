let i = 0;

let timer = setInterval(function () {
  console.log("Привіт");
  i++;

  if (i == 5) {
    clearInterval(timer);
  }
}, 1000);

const box = document.querySelector(".box");

let size = 50;

setInterval(function () {
  size = size + 10;

  if (size > 150) {
    size = 50;
  }

  box.style.width = size + "px";
}, 1000);

const gameBtn = document.querySelector(".game-btn");
const gameScore = document.querySelector(".game-score");
const gameTime = document.querySelector(".game-time");

let score = 0;
let time = 10;

gameBtn.addEventListener("click", function () {
  if (time > 0) {
    score++;
    gameScore.textContent = "Очки: " + score;
  }
});

const gameTimer = setInterval(function () {
  time--;
  gameTime.textContent = "Час: " + time;

  if (time == 0) {
    clearInterval(gameTimer);
    alert("Гру завершено! Очки: " + score);
  }
}, 1000);

const timerInput = document.querySelector(".timer-input");
const timerBtn = document.querySelector(".timer-btn");

timerBtn.addEventListener("click", function () {
  const seconds = timerInput.value;

  setTimeout(function () {
    alert("Час вийшов!");
  }, seconds * 1000);
});
