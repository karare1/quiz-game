
let allQtn = [
   
  {question: 'What phobia is an extreme fear of the snow?',
  option1: 'Chinophobia',
  option2: 'Hydrophobia',
  option3: 'Nephophobia',
  option4: 'Pteromerhanophobia',
  correct: 1
  },

  {question: 'Which fruit has a variety called "Winter Banana"?',
  option1: 'Orange',
  option2: 'Apple',
  option3: 'Pineapple',
  option4: 'Pear',
  correct: 2
  },

  {question: 'On which other planet in the Solar System have scientists observed snow falling?',
  option1: 'Jupiter',
  option2: 'Venus',
  option3: 'Mars',
  option4: 'Saturn',
  correct: 3
  },

  {question: 'In which country is the International Hair Freezing Contest held?',
  option1: 'Russia',
  option2: 'Finland', 
  option3: 'Austria',
  option4: 'Canada',
  correct: 4
  },

  {question: 'In which country were the Ugg boots invented?',
  option1: 'Norway',
  option2: 'Canada',
  option3: 'USA',
  option4: 'Australia',
  correct: 3
  },

  {question: 'How big was the largest snowflake ever spotted?',
   option1: '5 inch / 12.7cm wide',
   option2: '10 inch / 25.4 cm wide',
   option3: '15 inch / 38.1 cm wide',
   option4: '20 inch / 50.8 cm wide',
   correct: 3
  },

  {question: 'What Winter Olympics sport combines both cross-country skiing and shooting?',
  option1: 'Nordic track',
  option2: 'Skiathlon',
  option3: 'Duathlon',
  option4: 'Biathlon',
  correct: 4
  },

  {question: 'Which sport involves acro, aerials and moguls?',
  option1: 'Freestyle skying',
  option2: 'Snowboarding',
  option3: 'Alpine skiing',
  option4: 'Nordic combined',
  correct: 1
  },

  {question: 'Who authored the book, "The History of the Snowman"?',
  option1: 'James Bolt',
  option2: 'Patrick Sawyer',
  option3: 'Bob Eckstein',
  option4: 'Bob Rich',
  correct: 3
  },

  {question: '“Winter Is Coming” is the motto of which family in Game of Thrones?',
  option1: 'House Baratheon',
  option2: 'House Lannister',
  option3: 'House Stark',
  option4: 'House Tully',
  correct: 3
  },  

  {question: 'What does a chinook mean?',
  option1: 'A type of winter wind',
  option2: 'A type of blizzard',
  option3: 'A type of polar bear',
  option4: 'A type of winter sport',
  correct: 1
  },

  {question: 'Which language has the most words for snow?',
  option1: 'Saami',
  option2: 'Scots',
  option3: 'Inuit',
  option4: 'Islandic',
  correct: 2
  }
];

const questionQuiz = document.getElementById('question');
console.log(questionQuiz);
const optionQuiz = Array.from(document.getElementsByClassName('option'));
console.log(optionQuiz);

let questionShown = {};
let countQtn = 0; 
let points = 0;
let listOfQtn = [];
let selectAwr;


const pointsIfCorrect = 100;
const numberOfQtn = 12;

// startGame = () => {
function startGame () {
  countQtn = 0; 
  points = 0;
  listOfQtn = [...allQtn];
  console.log(listOfQtn);
  nextQuestion();
};

function nextQuestion () {
  
  countQtn++;
  const randomQtnInx = Math.floor(Math.random() * listOfQtn.length);
  questionShown = listOfQtn[randomQtnInx];
  questionQuiz.innerText = questionShown.question;

  optionQuiz.forEach(function(option) {
    const revealOption = option.dataset['value'];
    // console.log(revealOption);
    option.innerText = questionShown['option' + revealOption];
  });

  listOfQtn.splice(randomQtnInx, 1);
  selectAwr = true;
};


startGame();
