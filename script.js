"use strict";
document.querySelector("body").style.backgroundColor = "#222";
//check button
const checkBtn = document.getElementById("checkBtn");
//again button
const againBtn = document.getElementById("againBtn");
//input box
const inputNum = document.getElementById("inputEl");
//super big display box
const numQ = document.getElementById("numEl");
//first display
const start = document.getElementById("start-el");
//create random number
let rdNum = Math.trunc(Math.random() * 20) + 1;
//create score display
const scoreDp = document.getElementById("score-el");
//create score
let score = 20;
scoreDp.textContent = score;
let highScore = 0;
//create high score display
const scoreH = document.getElementById("highscore-el");

//when you click on the check
const check = function () {
  numQ.textContent = Number(inputNum.value);
  //NaN
  if (!Number(inputNum.value)) {
    if (score > 1) {
      start.textContent = "please input valid number!";
      scoreDp.textContent = --score;
    } else {
      start.textContent = "You lost your game!";
      scoreDp.textContent = --score;
    }
    //over the range
  } else if (Number(inputNum.value) < 1 || Number(inputNum.value) > 20) {
    if (score > 1) {
      start.textContent = "Number isn't in range";
      scoreDp.textContent = --score;
    } else {
      start.textContent = "You lost your game!";
      scoreDp.textContent = --score;
    }
  } else if (Number(inputNum.value) !== rdNum) {
    if (score > 1) {
      start.textContent =
        Number(inputNum.value) < rdNum
          ? "Number is too low"
          : "Number is too high";
      scoreDp.textContent = --score;
    } else {
      start.textContent = "You lost your game!";
      scoreDp.textContent = --score;
    }
  }
  //right number
  else if (Number(inputNum.value) === rdNum) {
    start.textContent = "Right number!!";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highScore) {
      highScore = score;
      scoreH.textContent = highScore;
    }
  }
};

//situation:
//1:NaN 2:over the range 3:too high 4:too low 5:Right Number
checkBtn.addEventListener("click", check);
//   //too high
//  else if (Number(inputNum.value) <rdNum) {
//   if (score > 1) {
//     start.textContent = "Number is too low";
//     scoreDp.textContent = --score;
//   } else {
//     start.textContent = "You lost your game!";
//     scoreDp.textContent = --score;
//   }
//   //too low
// } else if (Number(inputNum.value) > rdNum) {
//   if (score > 1) {
//     start.textContent = "Number is too high";
//     scoreDp.textContent = --score;
//   } else {
//     start.textContent = "You lost your game!";
//     scoreDp.textContent = --score;
//   }

//dry way

function reset() {
  score = 20;
  rdNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  numQ.textContent = "？";
}

againBtn.addEventListener("click", function () {
  if (start.textContent === "Right number!!") {
    scoreH.textContent = highScore;
    score = 20;
    scoreDp.textContent = score;
  } else {
    score = 20;
    scoreDp.textContent = score;
  }
  reset();
  console.log(rdNum);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    check();
  }
});
