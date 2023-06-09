console.log("JS OK");

// Getting the elements from the DOM
const timerContainer = document.getElementById("timer-container");
const numbersContainer = document.getElementById("numbers-container");

// Timer
let seconds = 30;
timerContainer.innerText = seconds;

setTimeout(() => {
  timerContainer.innerText = --seconds;
  if (seconds === 0) {
    timerContainer.innerText = "Remember the numbers? Write 'em down!";
    clearInterval(seconds);
  }
}, 1000);
