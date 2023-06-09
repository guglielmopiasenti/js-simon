console.log("JS OK");

// Getting the elements from the DOM
const timerContainer = document.getElementById("timer-container");
const numbersContainer = document.getElementById("numbers-container");
const guessContainer = document.getElementById("guess-container");

// Timer
let seconds = 30;
timerContainer.innerText = seconds;

const countdown = setInterval(() => {
  timerContainer.innerText = --seconds;
  if (seconds === 0) {
    timerContainer.innerText = "Remember the numbers? Write 'em down!";
    clearInterval(countdown);
    // hiding numbers
    numbersContainer.innerText = "";
  }

  // Event listener for the submit button
  const submitButton = document.getElementById("submit-guess");
  submitButton.addEventListener("click");
}, 1000);

// Array to store the random numbers
let randomNumbers = [];

// generate 5 random numbers
while (randomNumbers.length < 5) {
  // generate a a random number between 1 and 100
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  // check if the number is already in the array
  if (!randomNumbers.includes(randomNumber)) {
    randomNumbers.push(randomNumber);
  }

  console.log(randomNumbers);
}
// printing numbers in the HTML
numbersContainer.innerText = randomNumbers;

// Function to check the user's guesses
function checkGuesses() {
  const guess1 = parseInt(document.getElementById("guess1").value);
  const guess2 = parseInt(document.getElementById("guess2").value);
  const guess3 = parseInt(document.getElementById("guess3").value);
  const guess4 = parseInt(document.getElementById("guess4").value);
  const guess5 = parseInt(document.getElementById("guess5").value);

  const userGuesses = [guess1, guess2, guess3, guess4, guess5];
  const correctGuesses = [];
}

// Compare the user's guesses with the random numbers
for (let i = 0; i < randomNumbers.length; i++) {
  if (userGuesses.includes(randomNumbers[i])) {
    correctGuesses.push(randomNumbers[i]);
  }
}
