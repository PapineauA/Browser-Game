//Defining the trivia questions
const triviaQuestions = [
  {
    id: 0,
    q: "Who was the victim?",
    a: [
      { text: "Kenny Wolf", isCorrect: true },
      { text: "Eva Wolf", isCorrect: false },
      { text: "Daniel Wolf", isCorrect: false },
      { text: "Morgan Wolf", isCorrect: false },
    ],
  },
  {
    id: 1,
    q: "Around when was the victim's time of death?",
    a: [
      { text: "10:00 PM", isCorrect: false },
      { text: "10:30 PM", isCorrect: true },
      { text: "11:00 PM", isCorrect: false },
      { text: "11:30 PM", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "When was the victim stabbed by the wooden stake?",
    a: [
      { text: "Before death, 10:30 PM", isCorrect: false },
      { text: "After death, 10:30 PM", isCorrect: true },
      { text: "Before death, 11:00 PM", isCorrect: false },
      { text: "After death, 11:00 PM", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Who stabbed the victim with the wooden stake?",
    a: [
      { text: "Eva Wolf", isCorrect: false },
      { text: "Daniel Wolf", isCorrect: false },
      { text: "Chapman Mitchell", isCorrect: false },
      { text: "Morgan Wolf", isCorrect: true },
    ],
  },
  {
    id: 4,
    q: "How was the closed room created?",
    a: [
      {
        text: "The room was never a closed room to begin with",
        isCorrect: false,
      },
      {
        text: "The victim died inside the room, and somebody went in and out of the room through the window",
        isCorrect: false,
      },
      {
        text: "The victim died outside the room, and was carried into the room by somebody else",
        isCorrect: true,
      },
      {
        text: "The victim was attacked outside of the room, and retreated inside of the room after being attacked",
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    q: "What is the victim's cause of death?",
    a: [
      { text: "Blood loss", isCorrect: false },
      { text: "Poison", isCorrect: true },
      { text: "Natural causes", isCorrect: false },
      { text: "Heart disease", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "Who is the person who killed the victim?",
    a: [
      { text: "Eva Wolf", isCorrect: false },
      { text: "Daniel Wolf", isCorrect: true },
      { text: "Chapman Mitchell", isCorrect: false },
      { text: "Morgan Wolf", isCorrect: false },
    ],
  },
  {
    id: 7,
    q: "The quiz is over, click results to see how you did!",
    a: [
      { text: "I hope you enjoyed", isCorrect: false },
      { text: "this silly browser", isCorrect: false },
      { text: "game that I made!", isCorrect: false },
      { text: "Thank you for playing!", isCorrect: false },
    ],
  },
];

//Generating the Trivia Section
var start = true;
var total = 0;
function iterate(id) {
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  const question = document.getElementById("question");
  question.innerText = triviaQuestions[id].q;

  //Getting the options for the question
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = triviaQuestions[id].a[0].text;
  op2.innerText = triviaQuestions[id].a[1].text;
  op3.innerText = triviaQuestions[id].a[2].text;
  op4.innerText = triviaQuestions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = triviaQuestions[id].a[0].isCorrect;
  op2.value = triviaQuestions[id].a[1].isCorrect;
  op3.value = triviaQuestions[id].a[2].isCorrect;
  op4.value = triviaQuestions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "green";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "green";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "green";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "green";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
      total = total + 1;
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
    console.log(total);
  });
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 8) {
    id++;
    iterate(id);
  }
});

// Total isn't calculating correctly. Band-aid fix?
function calcTotal() {
  if (total == 1) {
    total = 1;
  } else if (total == 3) {
    total = 2;
  } else if (total == 6) {
    total = 3;
  } else if (total == 10) {
    total = 4;
  } else if (total == 15) {
    total = 5;
  } else if (total == 21) {
    total = 6;
  } else if (total == 28) {
    total = 7;
  }
}

let resultBtn = document.createElement("button");
resultBtn.innerHTML = "Trivia Results!";
resultBtn.onclick = function () {
  calcTotal();
  document.getElementById("game").innerHTML =
    `Congratulations, you managed to get ` +
    total +
    ` out of seven questions correct! Thank you for playing!`;
};
document.getElementById("game").appendChild(resultBtn);
