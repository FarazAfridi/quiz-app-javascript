const container = document.getElementById('container');
const quizQuestion = document.getElementById('quiz-question');
const quizAnswer = document.getElementById('quiz-answer');
const score = document.getElementById('score');
const reset = document.getElementById('reset');
const timing = document.getElementById('timing');

const  arr = [
  {
      question: 'Which vegetable is used to make ketchup ?',
      answer: {
        0: 'Tomato',
        1: 'Potato',
        2: 'Brinjal',
        3: 'Bell pepper',
      },
      correct: 'Tomato'
  },
  {
    question: 'Who is the CEO of Twitter ?',
    answer: {
      0: 'Mark Zuckerberg',
      1: 'Jack Dorsey',
      2: 'Bill Gates',
      3: 'Elon Musk',
    },
    correct: 'Jack Dorsey'
  },
  {
    question: 'PM of Pakistan is ?',
    answer: {
      0: 'Imran Khan',
      1: 'Donald Trump',
      2: 'Javed Miandad',
      3: 'Nawaz Sharif',
    },
    correct: 'Imran Khan'
  }
]

let getScore = 0;
let num = 0;
let sec = 0;

function quiz(){
    if(arr[num] != undefined){
        quizQuestion.innerText = arr[num].question;
        quizQuestion.classList.add('question');

    // creating button and adding answers to it
    for (let i=0; i<4; i++){
    let answer = document.createElement('button');
    answer.addEventListener('click', function(){
        this.innerText === arr[num].correct ? getScore++ : getScore;
        getNextQuestion()
    });
    answer.innerText = arr[num].answer[i];
    quizAnswer.appendChild(answer);
    answer.classList.add('answer');
    
    answer.innerText.length > 5 ? answer.style.padding = '5px' : answer;   
  } 
    } else if(num >= 3){
      score.childNodes[1].innerText = `Your Score is ${getScore}`;
      score.style.display = 'flex';
      score.classList.add('container');
      container.style.display = 'none';
    }
}


function getNextQuestion(){
    num ++;
    quizAnswer.innerText = '';
    sec = 0;
    quiz();
}

function resetScore(){
    num = 0;
    getScore = 0;
    score.style.display = 'none';
    container.style.display = 'flex';
    quiz();
}

function timer(){
    sec++;
  timing.childNodes[0].innerText = sec
   if(sec === 60){
    sec = 0;
    timing.childNodes[0].innerText = sec
    getNextQuestion();
    if(num === arr.length){
      clearInterval(interval)
    }
  }
}

reset.addEventListener('click', resetScore);
reset.classList.add('answer');
let interval = setInterval(timer ,1000)

quiz();