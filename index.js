//////////////////////////////////////
// Event Listeners 
//////////////////////////////////////

var questionButton = document.querySelector('.button1');

questionButton.addEventListener('click', function(event) {
  event.preventDefault();
  randomAnswer();
});

//////////////////////////////////////
// Functions
//////////////////////////////////////

// Retrieve random number from array 
function getRandomNumber(array) {
  return Math.floor(Math.random() * array.length);
};

function randomAnswer() {
  var questionInput = document.querySelector('#ask-question');
  var displayInput = document.querySelector('h2');
  var displayRandomAnswer = document.querySelector('h3');
  var getRandomAnswer;

  getRandomAnswer = possibleAnswers[getRandomNumber(possibleAnswers)]
  console.log(getRandomAnswer);

  // Display user input and random answer from the possible answers array
  displayInput.innerHTML = questionInput.value;
  displayRandomAnswer.innerHTML = getRandomAnswer;

  // Hide eight-ball picture and display random answer
  document.querySelector('.eight-ball').style.display= 'none';

  // Remove user's input
  questionInput.value = "";
};
