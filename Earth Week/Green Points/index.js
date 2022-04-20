const pointsEl = document.getElementById("points-p");
const btnsContainer = document.getElementById("btns-container");

const actionsArr = [
  {
    name: "recycledPaper",
    emoji: "📄",
    text: "recycled paper",
    good: true,
  },
  {
    name: "boughtSecondHand",
    emoji: "🛍",
    text: "bought 2nd hand",
    good: true,
  },
  {
    name: "tookTrain",
    emoji: "🚂",
    text: "took train",
    good: true,
  },
  {
    name: "leftLightsOn",
    emoji: "💡",
    text: "left lights on",
    good: false,
  },
  {
    name: "drippingTap",
    emoji: "🚰",
    text: "let tap drip",
    good: false,
  },
  {
    name: "leftCarRunningWhileDucksCrossed",
    emoji: "🦆",
    text: "left car running while ducks crossed road",
    good: false,
  },
];

function renderBtns() {
  actionsArr.forEach((action) => {
    btnsContainer.innerHTML += `
        <button 
          class="
            action-btn 
            ${action.good ? "action-btn--good" : "action-btn--bad"}
            " 
          
            onclick="tallyAction(${action.good ? true : false})
          
        ">
           ${action.emoji}${action.text}
        </button>
      `;
  });
}

renderBtns();

let score = 0;
let actionCount = 0;

function tallyAction(good) {
  good ? (score = score + 5) : (score = score - 5);
  actionCount++;
  pointsEl.innerText = `${score} points today from ${actionCount} actions`;

  score >= 0
    ? (document.body.style.backgroundColor = "#a7d878ff")
    : (document.body.style.backgroundColor = "#d13f32");
}
// Task: For each action in actionsArr, render a button on the page which matches the design on the slide.
// The button should show:
// 1. the emoji
// 2. the action name
// 3. Add +5 points to the user’s score for good actions, and -5 for bad actions on click
// 4. Update the points total in the DOM on click

// stretch goal 1️⃣: Change each button color, green for good activities, red for bad.

// stretch goal 2️⃣: Change the background color to reflect the user's total points. 0 or above = green, below 0 = red.

// stretch goal 3️⃣: Add an activity count.
