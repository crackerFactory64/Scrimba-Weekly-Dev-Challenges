const solarSystem = document.getElementById("solarSystem");
const planets = [
  {
    name: "Mercury",
    diameter: 4879,
    color: "grey",
    moons: 0,
    ringed: false,
  },
  {
    name: "Venus",
    diameter: 12104,
    color: "yellow",
    moons: 0,
    ringed: false,
  },
  {
    name: "Earth",
    diameter: 12742,
    color: "green",
    moons: 1,
    ringed: false,
  },
  {
    name: "Mars",
    diameter: 6779,
    color: "pink",
    moons: 2,
    ringed: false,
  },
  {
    name: "Jupiter",
    diameter: 139822,
    color: "yellow",
    moons: 67,
    ringed: true,
  },
  {
    name: "Saturn",
    diameter: 116464,
    color: "orange",
    moons: 62,
    ringed: true,
  },
  {
    name: "Uranus",
    diameter: 50724,
    color: "grey",
    moons: 27,
    ringed: true,
  },
  {
    name: "Neptune",
    diameter: 49244,
    color: "blue",
    moons: 14,
    ringed: true,
  },
  {
    name: "Pluto",
    diameter: 2370,
    color: "white",
    moons: 5,
    ringed: false,
  },
];

planets.splice(planets.length - 1, 1, {
  name: "Planet Rock",
  diameter: 66666,
  color: "black",
  moons: 666,
  ringed: true,
});

function renderPlanets() {
  for (let i = 0; i < planets.length; i++) {
    const planet = document.createElement("div");
    planet.style.minHeight = `${planets[i].diameter / 1000}px`;
    planet.style.minWidth = `${planets[i].diameter / 1000}px`;
    planet.style.background = `conic-gradient( 
            black 0deg 180deg, 
            var(--${planets[i].color}) 180deg 360deg)`;
    planet.classList.add("main__planet");
    const planetLabel = document.createElement("div");
    planetLabel.innerHTML = `<h3>${planets[i].name}</h3>
        <p>Moons: ${planets[i].moons}</p>
        <p>Ringed: ${planets[i].ringed ? "Yes" : "No"}</p>`;
    planetLabel.classList.add("main__label");
    planet.append(planetLabel);
    solarSystem.appendChild(planet);
  }
}

renderPlanets();

// Task:
// 1. Remove Pluto from the planets array
// 2. Add a new planet to the planets array (invent one)

// NOTE: these should be done without changing the code above line 50

// Stretch goals:
// - 1. Add a new fact to one of the planets, e.g whether it has rings.
// - 2. Add the moons to each planet (see previous challenge for the numbers of moons required.)

// What did you think? 🧑‍🚀

// https://form.typeform.com/to/AbIFTOMS
