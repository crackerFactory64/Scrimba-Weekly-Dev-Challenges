const toggleContainer = document.getElementById("toggle-container");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.getElementById("body");
const button = document.getElementById("button");

function applyRemoveDarkMode() {
  toggleContainer.classList.toggle("toggle-container--light");
  darkModeToggle.classList.toggle("toggle--on");
  body.classList.toggle("body--light");
  button.classList.toggle("button--light");
}

toggleContainer.addEventListener("click", () => {
  applyRemoveDarkMode();
});
