class Start {
  constructor() {
    this.container = document.querySelector('.container');
    this.startBtn = document.createElement('button');

    this.startBtn.classList.add('button');
    this.startBtn.innerText = 'START';
    this.container.append(this.startBtn);
    this.startQuiz();
  }

  startQuiz() {
    this.startBtn.onclick = () => {
      new Quiz();
      this.startBtn.remove();
    };
  }
}

class Quiz {
  constructor() {
    this.quiz = document.createElement('div');
    this.quizContent = document.createElement('div');
    this.quizTitle = document.createElement('div');
    // this.quizSpan = document.createElement('div');
    this.quizQuestion = document.createElement('div');

    this.quizAnswer1 = document.createElement('div');
    this.quizAnswer2 = document.createElement('div');
    this.quizAnswer3 = document.createElement('div');
    this.quizAnswer4 = document.createElement('div');
    this.quizAnswer5 = document.createElement('div');

    this.quizAnswerNumber1 = document.createElement('div');
    this.quizAnswerNumber2 = document.createElement('div');
    this.quizAnswerNumber3 = document.createElement('div');
    this.quizAnswerNumber4 = document.createElement('div');
    this.quizAnswerNumber5 = document.createElement('div');

    this.quizAnswerBoxR1 = document.createElement('div');
    this.quizAnswerBoxL2 = document.createElement('div');
    this.quizAnswerBoxR3 = document.createElement('div');
    this.quizAnswerBoxL4 = document.createElement('div');
    this.quizAnswerBoxR5 = document.createElement('div');

    this.quiz.classList.add('quiz_container');
    this.quizContent.classList.add('quiz_content');
    this.quizTitle.classList.add('quiz_title');
    // this.quizSpan.classList.add('quiz_span');
    this.quizQuestion.classList.add('quiz_quistion');

    this.quizAnswer1.classList.add('quiz_answerR');
    this.quizAnswer2.classList.add('quiz_answerL');
    this.quizAnswer3.classList.add('quiz_answerR');
    this.quizAnswer4.classList.add('quiz_answerL');
    this.quizAnswer5.classList.add('quiz_answerR');

    this.quizAnswerNumbers = [
      this.quizAnswerNumber1,
      this.quizAnswerNumber2,
      this.quizAnswerNumber3,
      this.quizAnswerNumber4,
      this.quizAnswerNumber5,
    ];

    this.quizAnswerNumbers.forEach((item) => {
      item.classList.add('number');
    });

    this.quizAnswerBoxR1.classList.add('answer_right');
    this.quizAnswerBoxR1.classList.add('answer_right::after');

    this.quizAnswerBoxL2.classList.add('answer_left');
    this.quizAnswerBoxL2.classList.add('answer_left::after');

    this.quizAnswerBoxR3.classList.add('answer_right');
    this.quizAnswerBoxR3.classList.add('answer_right::after');
    this.quizAnswerBoxL4.classList.add('answer_left');
    this.quizAnswerBoxL4.classList.add('answer_left::after');
    this.quizAnswerBoxR5.classList.add('answer_right');
    this.quizAnswerBoxR5.classList.add('answer_right::after');

    this.quizTitle.innerText = 'Math Problem';

    const container = document.querySelector('.container');
    container.classList.add('active');

    container.append(this.quiz);

    this.quiz.append(this.quizContent);
    this.quizContent.append(this.quizTitle);
    this.quizContent.append(this.quizSpan);
    this.quizContent.append(this.quizQuestion);

    this.quizContent.append(this.quizAnswer1);
    this.quizAnswer1.append(this.quizAnswerNumber1);
    this.quizAnswer1.append(this.quizAnswerBoxR1);
    this.quizContent.append(this.quizAnswer2);
    this.quizAnswer2.append(this.quizAnswerNumber2);
    this.quizAnswer2.append(this.quizAnswerBoxL2);
    this.quizContent.append(this.quizAnswer3);
    this.quizAnswer3.append(this.quizAnswerNumber3);
    this.quizAnswer3.append(this.quizAnswerBoxR3);
    this.quizContent.append(this.quizAnswer4);
    this.quizAnswer4.append(this.quizAnswerNumber4);
    this.quizAnswer4.append(this.quizAnswerBoxL4);
    this.quizContent.append(this.quizAnswer5);
    this.quizAnswer5.append(this.quizAnswerNumber5);
    this.quizAnswer5.append(this.quizAnswerBoxR5);

    this.prevBtn = document.createElement('button');
    this.nextBtn = document.createElement('button');
    this.prevBtn.classList.add('button');
    this.prevBtn.classList.add('prev_button');
    this.nextBtn.classList.add('button');
    this.nextBtn.classList.add('next_button');
    this.quiz.append(this.prevBtn);
    this.quiz.append(this.nextBtn);

    this.prevBtn.innerText = 'Vorige';
    this.nextBtn.innerText = 'Volgende';
  }
}
class Questions {
  constructor() {
    this.numberOfQuestion = document.createElement('div');
    this.numberOfQuestion.classList.add('quiz_span');
    this.numberOfAllQuestions = document.createElement('div');
    this.numberOfAllQuestions.classList.add('quiz_span');
    this.indexOfQuestion, (this.indexOfPage = 0);

    this.numberOfAllQuestion.innerHTML = questions.length;
  }

  questions = [
    {
      question: 'Wat is 49 - 32',
      number: '1',
      options: ['13', '17', '-17', '16', '697'],
      rightAnswer: 1,
    },
    {
      question: 'Wat is 70 - 14',
      number: '2',
      options: ['18', '79', '56', '32', '34'],
      rightAnswer: 2,
    },
    {
      question: 'Wat is 80 - 15',
      number: '3',
      options: ['74', '65', '93', '40', '975'],
      rightAnswer: 1,
    },
    {
      question: 'Wat is 10 - 20',
      number: '4',
      options: ['-350', '-15', '-10', '-34', '34'],
      rightAnswer: 2,
    },
    {
      question: 'Wat is 56 + 11',
      number: '5',
      options: ['102', '37', '44', '67', '50'],
      rightAnswer: 3,
    },
    {
      question: 'Wat is 21 - 16',
      number: '6',
      options: ['170', '18', '5', '2', '26'],
      rightAnswer: 2,
    },
  ];

  loadQuiz = () => {
    this.question.innerHTML = questions[this.indexOfQuestion].question;

    this.quizAnswer1.innerHTML = questions[this.indexOfQuestion].options[0];
    this.quizAnswer1.innerHTML = questions[this.indexOfQuestion].options[1];
    this.quizAnswer1.innerHTML = questions[this.indexOfQuestion].options[2];
    this.quizAnswer1.innerHTML = questions[this.indexOfQuestion].options[3];
    this.quizAnswer1.innerHTML = questions[this.indexOfQuestion].options[4];

    this.numberOfQuestion.innerHTML = this.indexOfPage + 1;
    this.indexOfPage++;
  };
}

window.onload = () => {
  new Start();
};
