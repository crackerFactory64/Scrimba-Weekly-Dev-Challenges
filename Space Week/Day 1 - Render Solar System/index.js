const solarSystem = document.getElementById("solarSystem");
const planets = [
  {
    name: "Mercury",
    diameter: 4879,
    color: "grey",
  },
  {
    name: "Venus",
    diameter: 12104,
    color: "yellow",
  },
  {
    name: "Earth",
    diameter: 12742,
    color: "green",
  },
  {
    name: "Mars",
    diameter: 6779,
    color: "pink",
  },
  {
    name: "Jupiter",
    diameter: 139822,
    color: "yellow",
  },
  {
    name: "Saturn",
    diameter: 116464,
    color: "orange",
  },
  {
    name: "Uranus",
    diameter: 50724,
    color: "grey",
  },
  {
    name: "Neptune",
    diameter: 49244,
    color: "blue",
  },
];

function renderSolarSystem() {
  planets.forEach((planet) => {
    const planetEl = document.createElement("figure");
    planetEl.classList.add("main__planet");
    planetEl.style.background = `conic-gradient(rgba(0,0,0,0.6) 0deg 180deg, ${planet.color} 180deg)`;
    planetEl.style.width = planet.diameter;
    const planetLabel = document.createElement("div");
    planetLabel.innerText = `${planet.name}`;
    planetLabel.classList.add("main__label");
    planetEl.append(planetLabel);
    solarSystem.append(planetEl);
  });
}

renderSolarSystem();

// Task:
// Write a function to render
// the planets from the planets array using JavaScript.

// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)