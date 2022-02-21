const allEmojisP = document.getElementById("all-emojis-p");
const uniqueEmojisP = document.getElementById("unique-emojis-p");
const filterBtn = document.getElementById("filter-btn");
const sortBtn = document.getElementById("sort-btn");

const emojis = [
  "💘",
  "💘",
  "🌞",
  "🧡",
  "🍇",
  "🧁",
  "⚡️",
  "💝",
  "🐱",
  "💘",
  "🧡",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "⚡️",
  "🐶",
  "💘",
  "🍇",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "💕",
  "⚡️",
  "💘",
  "🌞",
  "🐱",
  "💘",
  "💫",
  "🍓",
  "💜",
  "⚡️",
  "🧡",
  "💕",
  "🍇",
  "💘",
];

emojis.forEach((emoji) => {
  allEmojisP.textContent += emoji;
});

function filterDuplicates() {
  uniqueEmojisP.innerText = "";

  const filteredEmojis = emojis.filter((emoji, index) => {
    return emojis.indexOf(emoji) === index;
  });

  filteredEmojis.forEach((emoji) => {
    uniqueEmojisP.innerText += emoji;
  });
}

function sortEmojis() {
  emojis.sort();

  allEmojisP.innerHTML = "";
  emojis.forEach((emoji) => {
    allEmojisP.textContent += emoji;
  });

  if (uniqueEmojisP.innerText !== "") {
    filterDuplicates();
  }
}

filterBtn.addEventListener("click", filterDuplicates);
sortBtn.addEventListener("click", sortEmojis);
