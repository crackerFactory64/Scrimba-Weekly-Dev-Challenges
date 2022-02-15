const toInput = document.getElementById("recipient-input");
const fromInput = document.getElementById("sender-input");
const greetingSelect = document.getElementById("greeting-select");
const customGreeting = document.getElementById("custom-greeting");
const greetingDisplay = document.getElementById("greeting-display");

function writeGreeting() {
  greetingSelect.value === "custom"
    ? (customGreeting.style.display = "block")
    : (customGreeting.style.display = "none");

  const to = toInput.value;
  const from = fromInput.value;

  const greeting =
    greetingSelect.value !== "custom"
      ? greetingSelect.value
      : customGreeting.value;

  greetingDisplay.innerText = `To: ${to}
    
    ${greeting}`;

  if (fromInput.value) {
    greetingDisplay.innerText += `

    From: ${from}`;
  }
}

toInput.addEventListener("keyup", writeGreeting);
fromInput.addEventListener("keyup", writeGreeting);
greetingSelect.addEventListener("change", writeGreeting);
customGreeting.addEventListener("keyup", writeGreeting);
