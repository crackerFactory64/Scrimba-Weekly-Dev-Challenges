let coffeesPerDay = [];
const reusableCupDiscount = 0.5;
const coffeePrice = 3;
const days = [
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const coffeeInputs = document.querySelectorAll("input");
const dailySavings = document.getElementById("daily-savings");
const totalEl = document.getElementById("total-p");
const moneyFormat = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

function getCoffees() {
  coffeesPerDay = [];
  coffeeInputs.forEach((input) => {
    coffeesPerDay.push(input.value);
  });
  updateDOM();
}

getCoffees();

function updateDOM() {
  dailySavings.innerText = "";
  const savingsPerDayArr = coffeesPerDay.map((coffees) => {
    return coffees * reusableCupDiscount;
  });

  savingsPerDayArr.forEach((dailySaving, index) => {
    let dayLi = document.createElement("li");
    dayLi.innerHTML = days[index] + ": " + moneyFormat.format(dailySaving);
    dailySavings.append(dayLi);
  });

  totalEl.innerText =
    "Total savings: " +
    moneyFormat.format(savingsPerDayArr.reduce((a, b) => a + b));
}

coffeeInputs.forEach((input) => {
  input.addEventListener("input", getCoffees);
});

// Task: Based on the number of coffees bought and the reusable cup discount, calculate and render each day's savings in the dailySavings element.

// stretch goal 1️⃣: Show the total savings

// stretch goal 2️⃣: Add an input to add more entries to coffeesPerDay

// stretch goal 3️⃣: Improve the formatting of the numbers, e.g. $1.5 = $1.50
