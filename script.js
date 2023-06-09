console.log("JS OK");

// Getting the elements from the DOM
const timerContainer = document.getElementById("timer-container");
const numbersContainer = document.getElementById("numbers-container");

// Timer
let seconds = 30;
timerContainer.innerText = seconds;

const countdown = setInterval(() => {
  timerContainer.innerText = --seconds;
  if (seconds === 0) {
    timerContainer.innerText = "Remember the numbers? Write 'em down!";
    clearInterval(countdown);
  }
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
}

numbersContainer.innerText = randomNumbers;
