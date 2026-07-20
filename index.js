let scoreHome = document.getElementById("score-home");
// console.log(scoreHome)
let scoreAway = document.getElementById("score-away");
// console.log(scoreAway)
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

function awayAdd1() {
  count += 1;
  scoreAway.textContent = count;
  let finalScore = scoreAway.textContent;
  //   console.log(finalScore)
}
function awayAdd2() {
  count += 2;
  scoreAway.textContent = count;
  let finalScore = scoreAway.textContent;
  //   console.log(finalScore)
}
function awayAdd3() {
  count += 3;
  scoreAway.textContent = count;
  let finalScore = scoreAway.textContent;
  //   console.log(finalScore)
}

function resetButton() {
  count = 0;
  scoreHome.textContent = count;
  scoreAway.textContent = count;
}
