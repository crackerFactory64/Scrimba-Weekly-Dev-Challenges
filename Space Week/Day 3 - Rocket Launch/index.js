const countdownDisplay = document.getElementById("countdown-display");
const rocket = document.getElementById("rocket");
let timeRemaining = 5;

// Task:
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

const countdown = setInterval(() => {
  timeRemaining--;

  if (timeRemaining > 0) {
    countdownDisplay.innerText = timeRemaining;
  }

  if (timeRemaining === 0) {
    if (launchOrFail()) {
      rocket.classList.add("blast-off");
      countdownDisplay.innerText = "Blast off!";
    } else {
      rocket.classList.add("fail"),
        (countdownDisplay.innerText = "Failure to launch.");
    }

    clearInterval(countdown);
  }
}, 1000);

function launchOrFail() {
  return Math.ceil(Math.random() * 10) % 2 ? true : false;
}

// Stretch goals:
// 1) Add fire under the rocket.
// 2) Randomly don’t launch the rocket when the timer reaches 0.
