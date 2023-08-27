// 3 segons de marge mínim entre la última del parell i la seguent.
const actions = [
  {/////////////////////////////////////PRIMERA PREGUNTA
    time: 17,
    actionIndex: 0,
    character: "red",
    possibleEmotions: ["miedo", "confusion", "sorpresa"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 26,
    actionIndex: 0,
    solution: "miedo",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////SEGONA PREGUNTA
  {
    time: 33,
    actionIndex: 1,
    character: "red",
    possibleEmotions: ["tristeza", "ternura", "miedo"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 43,
    actionIndex: 1,
    solution: "ternura",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////TERCERA PREGUNTA
  {
    time: 46,
    actionIndex: 2,
    character: "red",
    possibleEmotions: ["ansiedad", "sorpresa", "confusion"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 53,
    actionIndex: 2,
    solution: "ansiedad",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////QUARTA PREGUNTA
  {
    time: 57,
    actionIndex: 3,
    character: "heart",
    possibleEmotions: ["ansiedad", "optimismo", "verguenza"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 65,
    actionIndex: 3,
    solution: "optimismo",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////CINQUENA PREGUNTA
  {
    time: 69,
    actionIndex: 4,
    character: "heart",
    possibleEmotions: ["verguenza", "admiracion", "ternura"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 77,
    actionIndex: 4,
    solution: "admiracion",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////SISENA PREGUNTA
  {
    time: 80,
    actionIndex: 5,
    character: "red",
    possibleEmotions: ["miedo", "ternura", "verguenza"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 91,
    actionIndex: 5,
    solution: "verguenza",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////SETENA PREGUNTA
  {
    time: 94,
    actionIndex: 6,
    character: "brown",
    possibleEmotions: ["confusion", "verguenza", "susto"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 101,
    actionIndex: 6,
    solution: "confusion",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////VUITENA PREGUNTA
  {
    time: 128,
    actionIndex: 7,
    character: "red",
    possibleEmotions: ["susto", "tristeza", "verguenza"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 136,
    actionIndex: 7,
    solution: "susto",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////NOVENA PREGUNTA
  {
    time: 143,
    actionIndex: 8,
    character: "three",
    possibleEmotions: ["verguenza", "confusion", "desaprobacion"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 152,
    actionIndex: 8,
    solution: "desaprobacion",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////DESENA PREGUNTA
  {
    time: 180,
    actionIndex: 9,
    character: "red",
    possibleEmotions: ["tristeza", "miedo", "ansiedad"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 192,
    actionIndex: 9,
    solution: "tristeza",
    action: function () {
      respond(this);
    },
  },/////////////////////////////////////ONZENA PREGUNTA
  {
    time: 223,
    actionIndex: 10,
    character: "red",
    possibleEmotions: ["confusion", "verguenza", "ternura"],
    action: function () {
      ask(this);
    },
  },
  {
    time: 233,
    actionIndex: 10,
    solution: "ternura",
    action: function () {
      respond(this);
    },
  },
];
const ask = ({ character, possibleEmotions, actionIndex }) => {
  showQuestion(character);
  showPossibleEmotions(possibleEmotions);
  applyBlinkClassToHeart(actionIndex);
};

const respond = ({ solution, actionIndex }) => {
  const answerWrapper = document.getElementById("answerWrapper");
  const decision = document.getElementById("decision");
  decision.style.display = "flex";
  
  if (!answerWrapper.classList.contains("noEvents")) {
    answerWrapper.classList.add("noEvents");
  }
  
  const answers = answerWrapper.querySelectorAll(".possibleEmotionsActive");
  let isAnswered = false;
  let isCorrect = false;
  const correctAnswer = document.getElementById(solution); // div correcte
  correctAnswer.style.backgroundColor = "transparent";
  const correctAnswerHTML = correctAnswer.outerHTML; // html del div
  
  for (const answer of answers) {
    if (answer.classList.contains("chosen")) {
      isAnswered = true;
      if (answer.id === solution) {
        isCorrect = true;
        replaceClassToHeart(actionIndex, "HeartConquered");
        decision.style.backgroundColor="rgba(0, 255, 0, 0.35)"
        decision.innerHTML = "¡Correcto! " + correctAnswerHTML;
        answer.classList.add("correct");
      } else {
        answer.classList.add("incorrect");
      }
    } else if (answer.id === solution) {
      answer.classList.add("correct");
    } else {
      answer.classList.add("incorrect");
    }
  }
  
  if (isAnswered && !isCorrect) {
    replaceClassToHeart(actionIndex, "heartGray");
    decision.style.backgroundColor="rgba(255, 0, 0, 0.35)"
    decision.innerHTML = "¡Incorrecto! " + correctAnswerHTML;
  } else if (!isAnswered) {
    replaceClassToHeart(actionIndex, "heartGray");
    decision.style.backgroundColor="rgba(255, 0, 0, 0.35)"
    decision.innerHTML = "¡Fuera de tiempo! " + correctAnswerHTML;
  }
  
  setTimeout(() => {
    normalState();
    correctAnswer.style.backgroundColor = "";
  }, 1500);
};

const normalState = () => {
  const answerWrapper = document.getElementById("answerWrapper");
  const answers = answerWrapper.querySelectorAll(".possibleEmotionsActive");
  for (const answer of answers) {
    answer.className = "";
    setTimeout(() => {
      answer.style.display = "none";
    }, 400);
  }
  const question = document.getElementById("question");
  const character=document.getElementById("character");
  const char = character.querySelector(".questionCharacterActive");
  question.className = "";
  char.className = "";
  answerWrapper.classList.remove("noEvents");
  const decision = document.getElementById("decision");
  decision.style.display = "none";
  decision.style.backgroundColor=""
  decision.style.color=""
  decision.innerHTML = "";
};

const showQuestion = (character) => {
  const question = document.getElementById("question");
  const char = document.getElementById(character);
  question.style.display = "flex";
  question.classList.add("questionCharacterActive");
  //char.style.display = "flex";
  char.classList.add("questionCharacterActive");
};

const showPossibleEmotions = (possibleEmotions) => {
  for (const emotion of possibleEmotions) {
    const emotionButton = document.getElementById(emotion);
    emotionButton.style.display = "flex";
    emotionButton.classList.add("possibleEmotionsActive");
  }
};

const answerChosen = (div) => {
  const answerWrapper = document.getElementById("answerWrapper");
  answerWrapper.classList.add("noEvents");
  div.classList.add("chosen");
};

document.addEventListener("DOMContentLoaded", function () {
  const divs = document.querySelectorAll("#answerWrapper > div");
  for (const div of divs) {
    div.addEventListener("click", function (event) {
      answerChosen(div);
    });
  }
});
