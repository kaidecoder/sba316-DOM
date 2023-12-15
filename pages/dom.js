let gameBoard = document.getElementById("game-board");
gameBoard.classList.add("grid");
let btn = document.querySelector(".start-btn");
let div = document.querySelectorAll("div");
const scoreEl = document.querySelector(".score");
const countdownEl = document.querySelector(".score").nextElementSibling;
const startEl = document.querySelector(".start-btn");
const container = document.querySelector(".container");
const orangeRedEl = document.querySelector(".orange-red");

let el;
let num;
let score = 0;
let timeUp = false;
let timeLimit = 20000;
let countdown;
let birdSound;
let gameOverSound;
let shipDeath;

const btnColor = prompt("Which color do you like best - purple or orange?  ");

const btnColor2 = prompt("Which color do you like between pink and green? ");

const chosenEl = prompt("Should I change a class or an id?  ");
if (chosenEl === "class") {
  btn.id = "play";
} else {
  container.id = "temp";
}

btn.style.backgroundColor = `${btnColor}`;
btn.style.color = `${btnColor2}`;

startEl.addEventListener("click", startGame);

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
      boxlet.innerHTML += `<img src="../images/ship.png" class="ship " style="width: 40px; height: 40px"/>`;
    }
  });
}

//only show numbers on certain boxes.  Hide the boxes
function createBoard(num) {
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
      //   console.log(item);
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

function sinkShip(e) {
  console.log("sink ship");
  if (e.target) {
    shipDeath = new Audio("../sounds/images_sounds_enemy-death.wav");
    shipDeath.play();
    console.log(this);
    this.style.backgroundImage = 'url("../images/red-x.jpg")';
    this.style.backgroundPosition = "center";
    this.style.backgroundRepeat = "no-repeat";
    this.style.backgroundSize = "cover";
    this.style.zIndex = "500";
    score++;
    scoreEl.textContent = score;
  } else {
    startGame();
  }
}

function startGame() {
  console.log("startGame");
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
    sinkShip();
  }, timeLimit);
  let startCountDown = setInterval(function () {
    countdown--;
    countdownEl.textContent = countdown;
    if (countdown < 0) {
      countdown = 0;
      birdSound.pause();
      clearInterval(startCountDown);
      timeUp = true;
      endGame();
    }
  }, 1000);
}

function endGame() {
  console.log("game");
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

//The document fragment interfered with the eventListener on the play button
//

// const supportsTemplate = function() {
//     return "content" in document.createElement("template")
// }

//     document.addEventListener("DOMContentLoaded", () => {
//         if(supportsTemplate()){
//             console.log("Templates are supported")
//             let templateEl = document.querySelector("#template")
//             let content = templateEl.content
//             document.body.appendChild(content)
//             document.body.appendChild(document.querySelector("#template").content)
//         }else{

//         let df = document.createDocumentFragment()
//         let div1 = document.createElement("div")
//         let div2 = document.createElement("div")
//         let btn = document.createElement("button")
//         div1.classList.add("score")
//         div1.textContent = "0"
//         div2.classList.add("countdown")
//         button.classList.add("start-btn")
//         btn.textContent.add("Start Game")
//         df.appendChild(div1)
//         df.appendChild(div2)
//         df.appendChild(button)
//         document.querySelector(".container").appendChild(df)
//         }
// })

ships.forEach((ship) => {
  return ship.addEventListener("click", sinkShip);
});
