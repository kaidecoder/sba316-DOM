let gameBoard = document.querySelector(".game-board");
gameBoard.classList.add("grid");
// let randomNumber = Math.floor(Math.random() * 49) + 1;
// console.log(randomNumber);
let el;
// let randomNum = document.querySelector(".random-number");
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
let shipDeath;

function createEl(type, content, cls, cls2, cls3) {
  el = document.createElement(type);
  if (type === "div") {
    el.style.backgroundColor = "#ccc";
    el.textContent = content;
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
  
  birdSound = new Audio("../sounds/birds.mp3");
  birdSound.play();
  countdown = timeLimit / 1000;
  scoreEl.textContent = 0;
  scoreEl.style.display = "block";
  countdownEl.textContent = countdown;
  timeUp = false;
  toggleShips();
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
          sinkShip();
          clearInterval(startCountDown);
          timeUp = true;
          endGame();
      
    }
  }, 1000);
}

function endGame() {
    console.log("game")
  shipDeath.pause();
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
  shipDeath = new Audio("../sounds/images_sounds_enemy-death.wav");
  shipDeath.play();
  score++;
  this.style.backgroundImage = 'url("../red-x.jpg")'
  this.style.backgroundPosition = "center"
  this.style.backgroundRepeat = "no-repeat"
  this.style.backgroundSize = "cover"
  scoreEl.textContent = score;
}

ships.forEach((ship) => {
  return ship.addEventListener("click", sinkShip);
});
