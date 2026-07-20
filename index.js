let scoreHome = document.getElementById("score-home");
// console.log(scoreHome)
let scoreGuest = document.getElementById("score-guest");
// console.log(scoreGuest)
let count = 0;
function homeAdd1() {
  count += 1;
  scoreHome.textContent = count;
  let finalScore = scoreHome.textContent;
  //   console.log(finalScore)
}
function homeAdd2() {
  count += 2;
  scoreHome.textContent = count;
  let finalScore = scoreHome.textContent;
  //   console.log(finalScore)
}
function homeAdd3() {
  count += 3;
  scoreHome.textContent = count;
  let finalScore = scoreHome.textContent;
  //   console.log(finalScore)
}

function guestAdd1() {
  count += 1;
  scoreGuest.textContent = count;
  let finalScore = scoreGuest.textContent;
  //   console.log(finalScore)
}
function guestAdd2() {
  count += 2;
  scoreGuest.textContent = count;
  let finalScore = scoreGuest.textContent;
  //   console.log(finalScore)
}
function guestAdd3() {
  count += 3;
  scoreGuest.textContent = count;
  let finalScore = scoreGuest.textContent;
  //   console.log(finalScore)
}

function resetButton() {
  count = 0;
  scoreHome.textContent = count;
  scoreGuest.textContent = count;
}
