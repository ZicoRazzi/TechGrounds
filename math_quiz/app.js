const container = document.getElementById('container')
const startBtn = document.querySelector('.button')
let counter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0

const startQuiz = () => {
  createQuiz()
  setAvailableQuestions();

};


const startBtnHandler = () => {
  const startBtn = document.createElement('button');
  startBtn.classList.add('button');
  startBtn.innerText = 'START';
  container.append(startBtn);

  startBtn.onclick = () => {
  startQuiz()
  getNewQuestion()

  startBtn.classList.add('hide');
};
}

startBtnHandler()

const createQuiz = () => {
  const quizContainer = document.createElement("div");
  quizContainer.classList.add("quiz_container");
  container.append(quizContainer);

  const quizContent = document.createElement("div");
  quizContent.classList.add("quiz_content");
  quizContainer.append(quizContent);

  createTitle()
  createQuestionBox()
  createAnswerBoxes()
  buttonsHandler()
}

const createTitle = () => {
  const quizContent = document.querySelector('.quiz_content')
  const quizTitle = document.createElement("div");
  quizTitle.classList.add("quiz_title");
  quizTitle.innerText = "Math problems";
  quizContent.append(quizTitle);
}

const createQuestionBox = () => {
  const quizContent = document.querySelector('.quiz_content')
  const numberOfQuestion = document.createElement("div");
  numberOfQuestion.classList.add("number_of_all_questions");
  quizContent.append(numberOfQuestion);
  const questionBox = document.createElement("div");
  questionBox.classList.add("quiz_question");
  quizContent.append(questionBox);
}

const createAnswerBoxes = () => {
  const quizContent = document.querySelector('.quiz_content')
  const answerBoxes = document.createElement("div");
  answerBoxes.classList.add("answer_boxes");
  quizContent.append(answerBoxes); 
}

const buttonsHandler = () => {
  const quizContainer = document.querySelector('.quiz_container')
  const prevButton = document.createElement("button");
  prevButton.classList.add("button", "prev_button");
  prevButton.innerText = "Vorige";

  quizContainer.append(prevButton);
  const nextButton = document.createElement("button");
  nextButton.classList.add("button", "next_button");
  nextButton.innerText = "Volgende";
  quizContainer.append(nextButton);
  nextButton.onclick = () => {
    console.log("clicked");
    next();
  };
  prevButton.onclick = () => {
    prev();
    console.log("clicked");
  };
  function next() {
    if (counter === questions.length) {
    quizOver()
    } else {
      document.querySelector(".answer_boxes").innerHTML = "";
      getNewQuestion();
    }
  }
  //TO DO
  function prev() {
    counter--;
  }
}
const getNewQuestion = () => {
  const numberOfQuestion = document.querySelector('.number_of_all_questions');
  const questionBox = document.querySelector('.quiz_question');
  const answerBoxes = document.querySelector('.answer_boxes');

  numberOfQuestion.innerText = counter + 1 + " / " + questions.length;
  const questionIndex =
    availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

  currentQuestion = questionIndex;
  questionBox.innerText = currentQuestion.question;
  //get the position of 'questionIndex' from the availableQuestion Array
  const index1 = availableQuestions.indexOf(questionIndex);
  //remove the 'questionIndex' from the availableQuestion Array to prevent repeating
  availableQuestions.splice(index1, 1);
  
  //get the length of options
  const optionLen = currentQuestion.options.length;

  for (let i = 0; i < optionLen; i++) {
    availableOptions.push(i);
    //random option
    const optionIndex =
      availableOptions[Math.floor(Math.random() * availableOptions.length)];
    //get the position 'optionIndex' from availableOptions
    const index2 = availableOptions.indexOf(optionIndex);
    //remove the 'optionIndex' from availableOptions to prevent repeating
    availableOptions.splice(index2, 1);
    const answerOptions = document.createElement("div");
    answerOptions.classList.add("answer");
    answerBoxes.append(answerOptions); 
    answerOptions.innerText = currentQuestion.options[optionIndex];
    answerOptions.id = optionIndex;
    answerOptions.setAttribute("onclick", "getResult(this)");
  }
  counter++;
};


function setAvailableQuestions() {
  const totalQuestion = questions.length;
  for (i = 0; i < totalQuestion; i++) {
    availableQuestions.push(questions[i]);
  }
}

function getResult(element) {
  const answerBoxesDivs = document.querySelectorAll(".answer");
  const id = parseInt(element.id);
  //get the answer by comparing the id of clicked option
  if (id === currentQuestion.rightAnswer) {
    element.classList.add("correct");
    correctAnswers++
    console.log('correct:' +correctAnswers) 
  } else {
    element.classList.add("wrong");
    const answersLen = answerBoxesDivs.length;
    for (let i = 0; i < answersLen; i++) {
      if (answerBoxesDivs[i].id === currentQuestion.rightAnswer.toString()) {
        answerBoxesDivs[i].classList.add("correct");
      }
    }
  }
  unClickableOptions();
}

function unClickableOptions() {
  const answerBoxesDivs = document.querySelectorAll(".answer");
  const answersLen = answerBoxesDivs.length;
  for (let i = 0; i < answersLen; i++) {
    answerBoxesDivs[i].classList.add("already_answered");
  }
}

const quizOver = () => {
  const quizContainer = document.querySelector('.quiz_container')
  quizContainer.classList.add('hide')

  const result = document.createElement('p')
  result.classList.add('end_result')
  container.appendChild(result)

  if (correctAnswers === 0) {
    result.innerText = 'Helaas jouw score is ' + correctAnswers + '. Volgende keer beter!'
  } else {
     result.innerText = 'Gefeliciteerd jij hebt ' + correctAnswers + ' van de 6 vragen goed'

  }   

  const restartBtn = document.createElement('button')
  restartBtn.classList.add('button')
  restartBtn.innerText = 'restart'
  container.appendChild(restartBtn)
  restartBtn.onclick = () => {
    restartQuiz()
   

    restartBtn.classList.add('hide')
  }
}

//TO DO
function resetQuiz() {
  counter = 0;
  correctAnswers = 0
}
//TO DO
function restartQuiz() {
  const result = document.querySelector('.end_result')
  
  result.classList.add('hide')
  
  resetQuiz()
  startQuiz()

}
const questions = [
  {
    question: "Wat is 49 - 32",
    number: "1",
    options: ["13", "17", "-17", "16", "697"],
    rightAnswer: 1,
  },
  {
    question: "Wat is 70 - 14",
    number: "2",
    options: ["18", "79", "56", "32", "34"],
    rightAnswer: 2,
  },
  {
    question: "Wat is 80 - 15",
    number: "3",
    options: ["74", "65", "93", "40", "975"],
    rightAnswer: 1,
  },
  {
    question: "Wat is 10 - 20",
    number: "4",
    options: ["-350", "-15", "-10", "-34", "34"],
    rightAnswer: 2,
  },
  {
    question: "Wat is 56 + 11",
    number: "5",
    options: ["102", "37", "44", "67", "50"],
    rightAnswer: 3,
  },
  {
    question: "Wat is 21 - 16",
    number: "6",
    options: ["170", "18", "5", "2", "26"],
    rightAnswer: 2,
  },
];