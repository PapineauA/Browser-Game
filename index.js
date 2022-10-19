let startBtn = document.createElement("button");
startBtn.innerHTML = "Start!";
startBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(startBtn);
