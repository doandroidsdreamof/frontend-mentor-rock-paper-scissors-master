let tl = gsap.timeline({ defaults: { ease: "elastic", duration: .4 } })

const arr = ["rock", "paper", "scissors"];
const arrWinLose = ["YOU WIN", "YOU LOSE", "DRAW"];

const circleOne = document.querySelector('.item1');
const circleTwo = document.querySelector('.item2');

const hoverOne = document.querySelector('.move1');
const hoverTwo = document.querySelector('.move2');
const hoverThree = document.querySelector('.move3');

const gameButtons = document.querySelectorAll('.event');
const score = document.querySelector('.score');

const playAgainButton = document.querySelector('.playagain');
const whoWin = document.querySelector('.whowin');

const paperColor = "hsl(230, 89%, 62%)";
const rockColor = "hsl(349, 71%, 52%)";
const scissorsColor = "hsl(39, 89%, 49%)";

const paperUrl = "url('/images/icon-paper.svg')";
const scissorsUrl = "url('/images/icon-scissors.svg')";
const rockUrl = "url('/images/icon-rock.svg')";

var gameScore = 0;
var breakPoint = window.matchMedia("(max-width: 720px)");


function animationButton() {
  tl.restart();
  tl.to('.event, .triangle ', { visibility: "hidden", stagger: .1, duration: .4, opacity: 0, y: 0 }, "-=2")
    .to('.playagain ', { display: "block", duration: .3, scale: 1, opacity: 1, y: 0 }, "1")
    .to('.whowin ', { display: "block", duration: .3, scale: 1, opacity: 1, y: 0 }, "1")
    .to('.item1, .item2 ', { display: "block", duration: .3, scale: 1.2, opacity: 1 }, "1")
  hoverOne.style.scale = "1";
  hoverTwo.style.scale = "1";
  hoverThree.style.scale = "1";
  if (breakPoint.matches) {
    tl.restart();
    tl.to('.item1, .item2 ', { display: "block", duration: .3, scale: 1.2, opacity: 1, y: -55 }, "1")
  }
}

function disableClick() {
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].style.pointerEvents = "none";
  }
}

function openClick() {
  for (let i = 0; i < gameButtons.length; i++) {
    gameButtons[i].style.pointerEvents = "initial";
  }
}

for (let i = 0; i < gameButtons.length; i++) {
  gameButtons[i].addEventListener('mouseover', (e) => {
    const target = e.target;
    if (breakPoint.matches) {
      return
    }
    else if (target.classList.contains('move1') || target.classList.contains('image1')) {
      hoverOne.style.scale = "1.2";
    }
    else if (target.classList.contains('move2') || target.classList.contains('image2')) {
      hoverTwo.style.scale = "1.2";
    }
    else if (target.classList.contains('move3') || target.classList.contains('image3')) {
      hoverThree.style.scale = "1.2";
    }
  })
}

for (let i = 0; i < gameButtons.length; i++) {
  gameButtons[i].addEventListener('mouseout', (e) => {
    const target = e.target;
    if (breakPoint.matches) {
      return;
    }
    else if (target.classList.contains('move1')) {
      hoverOne.style.scale = "1";
    }
    else if (target.classList.contains('move2')) {
      hoverTwo.style.scale = "1";
    }
    else if (target.classList.contains('move3')) {
      hoverThree.style.scale = "1";
    }
  })
}

for (let i = 0; i < gameButtons.length; i++) {
  gameButtons[i].addEventListener('click', (e) => {
    const paper = gameButtons[i].classList.contains('paper');
    const scissors = gameButtons[i].classList.contains('scissors');
    const rock = gameButtons[i].classList.contains('rock');
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    e.stopPropagation();
    tl.to('.playagain', { 'clip-path': 'circle(160% at 0% 100%)', display: 'block', opacity: 1, duration: 1 })
    if (paper && randomItem == "rock") {
      whoWin.innerText = arrWinLose[0];
      animationButton();
      disableClick();
      score.innerText = ++gameScore;
      circleOne.style.borderColor = paperColor;
      circleOne.style.backgroundImage = paperUrl;
      circleTwo.style.borderColor = rockColor;
      circleTwo.style.backgroundImage = rockUrl;
    }
    if (paper && randomItem == "scissors") {
      whoWin.innerText = arrWinLose[1];
      animationButton();
      disableClick();
      circleOne.style.borderColor = paperColor;
      circleOne.style.backgroundImage = paperUrl;
      circleTwo.style.borderColor = scissorsColor;
      circleTwo.style.backgroundImage = scissorsUrl;
    }
    if (paper && randomItem == "paper") {
      whoWin.innerText = arrWinLose[2];
      animationButton();
      disableClick();
      circleOne.style.borderColor = paperColor;
      circleOne.style.backgroundImage = paperUrl;
      circleTwo.style.borderColor = paperColor;
      circleTwo.style.backgroundImage = paperUrl;
    }
    if (scissors && randomItem == "paper") {
      whoWin.innerText = arrWinLose[0];
      animationButton();
      disableClick();
      score.innerText = ++gameScore;
      circleOne.style.borderColor = scissorsColor;
      circleOne.style.backgroundImage = scissorsUrl;
      circleTwo.style.borderColor = paperColor;
      circleTwo.style.backgroundImage = paperUrl;
    }
    if (scissors && randomItem == "rock") {
      whoWin.innerText = arrWinLose[1];
      animationButton();
      disableClick();
      circleOne.style.borderColor = scissorsColor;
      circleOne.style.backgroundImage = scissorsUrl;
      circleTwo.style.borderColor = rockColor;
      circleTwo.style.backgroundImage = rockUrl;
    }
    if (scissors && randomItem == "scissors") {
      whoWin.innerText = arrWinLose[2];
      animationButton();
      disableClick();
      circleOne.style.borderColor = scissorsColor;
      circleOne.style.backgroundImage = scissorsUrl;
      circleTwo.style.borderColor = scissorsColor;
      circleTwo.style.backgroundImage = scissorsUrl;
    }
    if (rock && randomItem == "scissors") {
      whoWin.innerText = arrWinLose[0];
      animationButton();
      disableClick();
      score.innerText = ++gameScore;
      circleOne.style.borderColor = rockColor;
      circleOne.style.backgroundImage = rockUrl;
      circleTwo.style.borderColor = scissorsColor;
      circleTwo.style.backgroundImage = scissorsUrl;
    }
    if (rock && randomItem == "paper") {
      whoWin.innerText = arrWinLose[1];
      animationButton();
      disableClick();
      circleOne.style.borderColor = rockColor;
      circleOne.style.backgroundImage = rockUrl;
      circleTwo.style.borderColor = paperColor;
      circleTwo.style.backgroundImage = paperUrl;
    }
    if (rock && randomItem == "rock") {
      whoWin.innerText = arrWinLose[2];
      animationButton();
      disableClick();
      circleOne.style.borderColor = rockColor;
      circleOne.style.backgroundImage = rockUrl;
      circleTwo.style.borderColor = rockColor;
      circleTwo.style.backgroundImage = rockUrl;
    }

  })
}

playAgainButton.addEventListener('click', (e) => {
  e.stopPropagation();
  openClick();
  tl.timeScale(1.5);
  tl.from('.event, .triangle ', { visibility: "hidden", stagger: .1, duration: .3, opacity: 1, y: 0 }, "-=2")
  tl.reverse(1);
})
