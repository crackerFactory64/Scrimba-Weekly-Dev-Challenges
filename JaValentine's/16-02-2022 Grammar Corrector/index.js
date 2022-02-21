const paragraph = document.getElementById("paragraph");
const btn = document.getElementById("btn");

function correct() {
  const wordArr = paragraph.innerText.toLowerCase().split("");

  wordArr[0] = wordArr[0].toUpperCase();

  wordArr.forEach((char, index) => {
    if (char === " ") {
      wordArr[index + 1] = wordArr[index + 1].toUpperCase();
    }
  });

  paragraph.innerText = wordArr.join("");
}

btn.addEventListener("click", correct);
