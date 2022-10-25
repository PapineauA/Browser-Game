//Start Game button
let startBtn = document.createElement("button");
startBtn.innerHTML = "Start!";
startBtn.onclick = function () {
  location.href = "game.html";
};
document.getElementById("game").appendChild(startBtn);
startBtn.style.backgroundColor = "#880808";
startBtn.style.height = "5rem";
startBtn.style.width = "25rem";
startBtn.style.fontSize = "1.75rem";
