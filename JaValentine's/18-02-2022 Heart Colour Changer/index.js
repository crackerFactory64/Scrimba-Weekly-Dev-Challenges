const body = document.body;
const heart = document.getElementById("heart");
const btn = document.getElementById("btn");

async function changeColor() {
  const result = await fetch("https://apis.scrimba.com/hexcolors/?count=2");
  const data = await result.json();

  const backgroundColor = data.colors[0].value;
  const color = data.colors[1].value;

  body.style.backgroundColor = backgroundColor;
  heart.style.backgroundColor = color;
}

changeColor();

btn.addEventListener("click", changeColor);
