//Start Game button
let startBtn = document.createElement("button");
startBtn.innerHTML = "Start!";
startBtn.addEventListener("click", function () {
  console.log("Test");
  startBtn.style.visibility = "hidden";
});
document.getElementById("game").appendChild(startBtn);

//Case Files Button
let fileBtn = document.createElement("button");
fileBtn.innerHTML = "Case Files";
fileBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(fileBtn);

//Victim Button
let victimBtn = document.createElement("button");
victimBtn.innerHTML = "The Victim";
victimBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(victimBtn);

//Suspect Buttons
let suspectBtn1 = document.createElement("button");
suspectBtn1.innerHTML = "Suspect 1";
suspectBtn1.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(suspectBtn1);

let suspectBtn2 = document.createElement("button");
suspectBtn2.innerHTML = "Suspect 2";
suspectBtn2.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(suspectBtn2);

let suspectBtn3 = document.createElement("button");
suspectBtn3.innerHTML = "Suspect 3";
suspectBtn3.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(suspectBtn3);

let suspectBtn4 = document.createElement("button");
suspectBtn4.innerHTML = "Suspect 4";
suspectBtn4.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(suspectBtn4);

let suspectBtn5 = document.createElement("button");
suspectBtn5.innerHTML = "Suspect 5";
suspectBtn5.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(suspectBtn5);

let backBtn = document.createElement("button");
backBtn.innerHTML = "Back";
backBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(backBtn);

let questionBtn = document.createElement("button");
questionBtn.innerHTML = "Question Time!";
questionBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(questionBtn);
