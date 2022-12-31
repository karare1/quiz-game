let allQtn = [

  {
    question: 'What phobia is an extreme fear of the snow?',
    option1: 'Chinophobia',
    option2: 'Hydrophobia',
    option3: 'Nephophobia',
    option4: 'Pogonophobia',
    correct: 1
  },

  {
    question: 'Which fruit has a variety called "Winter Banana"?',
    option1: 'Orange',
    option2: 'Apple',
    option3: 'Pineapple',
    option4: 'Pear',
    correct: 2
  },

  {
    question: 'On which other planet in the Solar System have scientists observed snow falling?',
    option1: 'Jupiter',
    option2: 'Venus',
    option3: 'Mars',
    option4: 'Saturn',
    correct: 3
  },

  {
    question: 'In which country is the International Hair Freezing Contest held?',
    option1: 'Russia',
    option2: 'Finland',
    option3: 'Austria',
    option4: 'Canada',
    correct: 4
  },

  {
    question: 'In which country were the Ugg boots invented?',
    option1: 'Norway',
    option2: 'Canada',
    option3: 'USA',
    option4: 'Australia',
    correct: 3
  },

  {
    question: 'How big was the largest snowflake ever spotted?',
    option1: '5 inch / 12.7cm wide',
    option2: '10 inch / 25.4 cm wide',
    option3: '15 inch / 38.1 cm wide',
    option4: '20 inch / 50.8 cm wide',
    correct: 3
  },

  {
    question: 'What Winter Olympics sport combines both cross-country skiing and shooting?',
    option1: 'Nordic track',
    option2: 'Skiathlon',
    option3: 'Duathlon',
    option4: 'Biathlon',
    correct: 4
  },

  {
    question: 'Which sport involves acro, aerials and moguls?',
    option1: 'Freestyle skying',
    option2: 'Snowboarding',
    option3: 'Alpine skiing',
    option4: 'Nordic combined',
    correct: 1
  },

  {
    question: 'Who authored the book, "The History of the Snowman"?',
    option1: 'James Bolt',
    option2: 'Patrick Sawyer',
    option3: 'Bob Eckstein',
    option4: 'Bob Rich',
    correct: 3
  },

  {
    question: '“Winter Is Coming” is the motto of which family in Game of Thrones?',
    option1: 'House Baratheon',
    option2: 'House Lannister',
    option3: 'House Stark',
    option4: 'House Tully',
    correct: 3
  },

  {
    question: 'What does a chinook mean?',
    option1: 'A type of winter wind',
    option2: 'A type of blizzard',
    option3: 'A type of polar bear',
    option4: 'A type of winter sport',
    correct: 1
  },

  {
    question: 'Which language has the most words for snow?',
    option1: 'Saami',
    option2: 'Scots',
    option3: 'Inuit',
    option4: 'Islandic',
    correct: 2
  }
];

const questionQuiz = document.getElementById('question');
//using Array.from() to convert HTML collection to array (will output an array)
const optionQuiz = Array.from(document.getElementsByClassName('option'));
console.log(optionQuiz);
const qtnCount = document.getElementById('qtn-count');
const scoreCount = document.getElementById('score-count');
const timeCount = document.getElementById("time-count");
const pointsIfCorrect = 100;
const numberOfQtn = 12;
let questionShown;
let countQtn = 0;
let points = 0;
let time = 120;
let listOfQtn;
let selectAwr;


function startGame() {
  countQtn = 0;
  points = 0;
  time = 120;
//using spread operator to create a new array (copy the questions array above into listOfQtn)
  listOfQtn = [...allQtn];
  nextQuestion();
}

runTime(120);

function nextQuestion() {
  if (listOfQtn.length === 0 || countQtn >= numberOfQtn) {
  //saving the player's result in a local storage
    localStorage.setItem('totalResult', scoreCount.innerText);
  // if here are no more questions in the array (all questions are answered), go to the result page and reveal the quiz result 
    return window.location.assign('result.html');
  }

  // increment questions
  countQtn++;
  qtnCount.innerText = countQtn + '/' + numberOfQtn;

  //get random question from 1-12 (get random number and convert it to integer) 
  const randomQtnInx = Math.floor(Math.random() * listOfQtn.length);
  questionShown = listOfQtn[randomQtnInx];

  // reveal a random question from the listOfQtn
  questionQuiz.innerText = questionShown.question;

  optionQuiz.forEach(function (option) {
    const revealOption = option.dataset.value;
  // populate options for the question revealed using dataset (custom attribute)
    option.innerText = questionShown['option' + revealOption];
  });

  //eliminate the current question from the list to avoid revealing the same question again
  listOfQtn.splice(randomQtnInx, 1);
  //allow a user to answer the question
  selectAwr = true;
}

 //check if the reference of the option we clicked on is the same as correct answer reference 
    optionQuiz.forEach(function (option) {
    option.addEventListener('click', function (e) {
    if (!selectAwr) return;

    selectAwr = false;
    const clickedOptionEl = e.target;
    const clickedOptionInx = clickedOptionEl.dataset.value;

    let correctIncorrect = 'incorrect';
    // apply correct or incorrect class to the clicked option based on the correct answer index
    if (clickedOptionInx == questionShown.correct) {
      correctIncorrect = 'correct';
    }
    clickedOptionEl.classList.add(correctIncorrect);
    if (clickedOptionInx == questionShown.incorrect) {

    }

    //function to count score based on the questions answered correctly
    function addScore() {
      if (clickedOptionInx == questionShown.correct) {
        scoreCount.innerText = (++points) * pointsIfCorrect;
      }
    }
    addScore();
    // get a little bit of time before switch to the next question and removed the class 
    setTimeout(function () {
      clickedOptionEl.classList.remove(correctIncorrect);
      nextQuestion();
    }, 2000);

  });
});

// function to activate the timer (1200s)
function runTime() {
  setInterval(function() {
      if(time <= 0 ) {
          clearInterval(time = 0); 
          //return to home page when time is up
          return window.location.assign("index.html");
      }
      //if less then 10 sec, the timeer will change to red
      if(time < 10 && time > 0 || time === 0){
              timeCount.style.color = "red";
          }
      
      timeCount.innerHTML = time;
      time  -=1;
  }, 1000);
}

startGame();

