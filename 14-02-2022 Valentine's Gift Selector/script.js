const foodSelect = document.getElementById("food-select");
const transportSelect = document.getElementById("transport-select");
const balloonCheck = document.getElementById("balloon-checkbox");
const submit = document.getElementById("btn");
const costEl = document.getElementById("cost-el");
const error = document.getElementById("error");

function calculate() {
  error.style.visibility = "hidden";
  const food = +foodSelect.value;
  const transport = +transportSelect.value;
  const balloons = balloonCheck.checked;
  let cost = food + transport;

  if (cost > 5) {
    if (balloons) {
      cost = cost + 10;
    }
    costEl.innerText = `$${cost}`;
  } else {
    error.style.visibility = "visible";
  }

  // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
  // 2. Display the total cost in the cost-el span.
}

submit.addEventListener("click", calculate);
