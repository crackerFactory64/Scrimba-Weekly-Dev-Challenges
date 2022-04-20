const recycleBtn = document.getElementById("recycle-btn");
const recycleSelect = document.getElementById("recycle-select");
const recycleBin = document.getElementById("recycle-bin");
const infoParagraph = document.getElementById("info-paragraph");
const emptyBtn = document.getElementById("empty-btn");

let itemCount = 0;

function recycle() {
  console.log(itemCount);

  if (recycleSelect.value) {
    if (itemCount >= 25) {
      infoParagraph.innerText = "The bin is full!";
      emptyBtn.style.visibility = "visible";
    } else {
      itemCount > 0
        ? (recycleBin.innerText += recycleSelect.value)
        : (recycleBin.innerText = recycleSelect.value);

      itemCount++;
    }
  }
}

function empty() {
  emptyBtn.style.visibility = "hidden";
  itemCount = 0;
  infoParagraph.innerText = "Recycled items will appear above ⬆️";
  recycleBin.innerText = "";
}

recycleBtn.addEventListener("click", recycle);
emptyBtn.addEventListener("click", empty);

// Task: Wire up the <select> tag and recycle button so that an emoji of the selected item appears in the DOM each time the recycle button is pressed.

// stretch goal 1️⃣ Add an item limit to indicate when the recycle bin is full

// stretch goal 2️⃣: Add the option to empty the bin.

// stretch goal 3️⃣: Animate adding the items to the bin.
