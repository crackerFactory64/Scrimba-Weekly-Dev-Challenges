const solarSystem = document.getElementById("solarSystem");
const totalEl = document.getElementById("total");

const planetsObj = [
  {
    name: "Mercury",
    moons: 0,
  },
  {
    name: "Venus",
    moons: 0,
  },
  {
    name: "Earth",
    moons: 1,
  },
  {
    name: "Mars",
    moons: 2,
  },
  {
    name: "Jupiter",
    moons: 67,
  },
  {
    name: "Saturn",
    moons: 62,
  },
  {
    name: "Uranus",
    moons: 27,
  },
  {
    name: "Neptune",
    moons: 14,
  },
];

planetsObj.forEach((planet) => {
  const infoCard = document.createElement("div");
  infoCard.classList.add("cards__card");
  infoCard.innerHTML = `
            <h2>${planet.name}</h2>
            <p>Moons: ${planet.moons}</p>
        `;
  solarSystem.append(infoCard);
});

const total = 173;
let count = 0;

const animateTotal = setInterval(() => {
  count < total ? count++ : clearInterval(animateTotal);
  totalEl.innerText = `Total moons: ${count}`;
}, 20);

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.
