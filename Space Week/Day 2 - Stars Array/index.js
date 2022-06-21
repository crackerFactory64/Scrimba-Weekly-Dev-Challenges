// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM.
// Note: This requires very little code!

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star

const galaxy = document.getElementById("galaxy");

function generateStars() {
  const stars = new Array(100).fill("⭐", 0);
  stars.forEach((i) => {
    const star = document.createElement("span");
    star.innerText = "⭐";
    star.style.fontSize = `${Math.ceil(Math.random() * 5)}rem`;
    galaxy.append(star);
  });
}

generateStars();
