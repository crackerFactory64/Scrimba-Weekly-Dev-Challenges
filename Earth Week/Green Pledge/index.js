const body = document.body;
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const formSubmit = document.getElementById("form-submit");
const checkboxes = document.querySelectorAll(".checkbox");
const checkboxesContainer = document.getElementById("checkboxes-container");
const thanksSection = document.getElementById("thanks");
const thanksBody = document.getElementById("thanks-body");

let pledged = false;

function checkIfPledged() {
  let checkCount = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    } else {
      checkCount--;
    }
  });

  checkCount > -5 ? (pledged = true) : (pledged = false);

  pledged ? (formSubmit.disabled = false) : (formSubmit.disabled = true);
}

function submitForm(event) {
  event.preventDefault();
  if (pledged) {
    form.style.display = "none";
    thanksBody.innerHTML = `You're doing your bit to protect the planet, ${nameInput.value}!`;
    thanksSection.style.display = "block";
  }
}

form.addEventListener("submit", submitForm);
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", checkIfPledged);
});

// Task:
// Part 1: Add validation to check that the name and email fields are filled in and display a warning message if not (you might not need JS for this 😜).
// Part 2: Hide the form and show a thank you message on submit.

// stretch goal 1️⃣:  Add warning styling if the name and email fields are empty (you might not need JS for this either)

// stretch goal 2️⃣:  Personalise the thank you message with the user's name.

// stretch goal 3️⃣:  Disable the button when no checkboxes are checked.
