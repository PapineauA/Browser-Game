//Case Files Button
let fileBtn = document.createElement("button");
fileBtn.innerHTML = "Case Files";
fileBtn.addEventListener("click", function () {
  fileBtn.style.visibility = "hidden";
  victimBtn.style.visibility = "visible";
  sceneBtn.style.visibility = "visible";
  suspectBtn1.style.visibility = "visible";
  suspectBtn2.style.visibility = "visible";
  suspectBtn3.style.visibility = "visible";
  suspectBtn4.style.visibility = "visible";
  suspectBtn5.style.visibility = "visible";
  questionBtn.style.visibility = "hidden";
  backBtn.style.visibility = "visible";
});
document.getElementById("game").appendChild(fileBtn);
fileBtn.style.backgroundColor = "#880808";
fileBtn.style.height = "5rem";
fileBtn.style.width = "12rem";
fileBtn.style.fontSize = "1.75rem";

//Victim Button
let victimBtn = document.createElement("button");
victimBtn.innerHTML = "The Victim";
victimBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(victimBtn);

//Scene Button
let sceneBtn = document.createElement("button");
sceneBtn.innerHTML = "Crime Scene";
sceneBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").append(sceneBtn);

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

//Back Buttons
let fileBackBtn = document.createElement("button");
fileBackBtn.innerHTML = "Back";
fileBackBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(fileBackBtn);

let backBtn = document.createElement("button");
backBtn.innerHTML = "Back";
backBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(backBtn);

//Trivia Start Button
let questionBtn = document.createElement("button");
questionBtn.innerHTML = "Question Time!";
questionBtn.addEventListener("click", function () {
  console.log("Test");
});
document.getElementById("game").appendChild(questionBtn);
questionBtn.style.backgroundColor = "#880808";
questionBtn.style.height = "5rem";
questionBtn.style.width = "12rem";
questionBtn.style.fontSize = "1.75rem";
questionBtn.style.alignContent = "left";

//Button Visibility on Page Load
victimBtn.style.visibility = "hidden";
sceneBtn.style.visibility = "hidden";
suspectBtn1.style.visibility = "hidden";
suspectBtn2.style.visibility = "hidden";
suspectBtn3.style.visibility = "hidden";
suspectBtn4.style.visibility = "hidden";
suspectBtn5.style.visibility = "hidden";
fileBackBtn.style.visibility = "hidden";
backBtn.style.visibility = "hidden";
