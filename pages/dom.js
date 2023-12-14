let gameBoard = document.querySelector(".game-board");
gameBoard.classList.add("grid");
// let randomNumber = Math.floor(Math.random() * 49) + 1;
// console.log(randomNumber);
let el;
let randomNum = document.querySelector(".random-number");
let btn = document.querySelector(".start-btn");
let div = document.querySelectorAll("div");
const scoreEl = document.querySelector(".score");
const countdownEl = document.querySelector(".countdown");
const startEl = document.querySelector(".start-btn");

let score = 0;
let timeUp = false;
let timeLimit = 20000;
let countdown;
let birdSound;
let gameOverSound;

function createEl(type, content, cls, cls2, cls3) {
  el = document.createElement(type);
  if (type === "div") {
    el.style.backgroundColor = "#ccc";
    //use textcontent
    el.innerText = content;
    el.classList.add(cls, cls2, cls3);
    gameBoard.append(el);
  }
}

//append the ships with a number to each box
const board = createBoard();
let box = document.querySelectorAll(".box");
let ships = document.querySelectorAll(".ship");
function appendShips() {
  Array.from(box).forEach((boxlet) => {
    if (boxlet.innerText) {
      boxlet.innerHTML += `<img src="../ship.png" class="ship " style="width: 40px; height: 40px"/>`;
    }
  });
}

//only show numbers on certain boxes.  Hide the boxes
function createBoard() {
  for (let i = 1; i <= 49; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      createEl("div", `${i}`, "box", "hidden", "ship");
    }
    createEl("div", ``, "box", "no-ship", "dummy");
  }
}

//toggle the ships
function toggleShips() {
  counter = 0;
  box.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(item);
      if (item.classList.contains("no-ship")) {
        return;
      } else if (item.classList.contains("hidden")) {
        item.classList.toggle("chosen");
        item.style.backgroundColor = "pink";
        item.style.border = "5px solid purple";
      } else {
        let clickSound = new Audio("../sounds/images_sounds_click.wav");
        clickSound.play();
        score += 10;
        item.classList.toggle("hidden");
        item.style.fontFamily = "cursive";
      }
    });
  });
}

function startGame() {
  console.log("startGame")
  createBoard();
  appendShips();
  toggleShips();
  birdSound = new Audio("../sounds/birds.mp3");
  birdSound.play();
  countdown = timeLimit / 1000;
  scoreEl.textContent = 0;
  scoreEl.style.display = "block";
  countdownEl.textContent = countdown;
  timeUp = false;
  score = 0;
  setTimeout(function () {
    timeUp = true;
  }, timeLimit);

  let startCountDown = setInterval(function () {
    countdown--;
    countdownEl.textContent = countdown;
    if (countdown < 0) {
      countdown = 0;
      birdSound.pause();
      clearInterval(startCountDown);
      timeUp = true;
      sinkShip();
      endGame();
    }
  }, 1000);
}

function endGame() {
  deathSound.stop();
  birdSound.stop();
  gameOverSound = new Audio("../sounds/images_sounds_game_over.wav");
  gameOverSound.play();
  if (score > 10) {
    countdownEl.textContent = "Great Job!!";
  } else if (score > 7) {
    countdownEl.textContent = "Wow.  Keep trying!";
  } else {
    countdownEl.textContent = "Try harder!!!";
  }
}

startEl.addEventListener("click", startGame);

function sinkShip(e) {
  let deathSound = new Audio("../sounds/images_sounds_enemy-death.wav");
  deathSound.play();
  score++;
  this.style.backgroundImage = 'url("./red-x.jpg")'
  this.style.backgroundPosition = "center"
  this.style.backgroundRepeat = "no-repeat"
  this.style.backgroundSize = "cover"
  scoreEl.textContent = score;
}

ships.forEach((ship) => {
  let shipDeath = new Audio("../sounds/images_sounds_enemy-death.wav");
  shipDeath.play();
  return ship.addEventListener("click", sinkShip);
});
