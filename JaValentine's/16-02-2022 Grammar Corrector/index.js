const paragraph = document.getElementById("paragraph");
const btn = document.getElementById("btn");

function correct() {
  let wordArr = paragraph.innerText.split("");

  wordArr = wordArr.map((letter) => letter.toLowerCase());
  wordArr[0] = wordArr[0].toUpperCase();

  wordArr.forEach((letter, index) => {
    if (letter === " ") {
      wordArr[index + 1] = wordArr[index + 1].toUpperCase();
    }
  });

  paragraph.innerText = wordArr.join("");
}

btn.addEventListener("click", correct);
