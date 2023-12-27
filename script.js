const firstLine = document.getElementById("first-line");
const secondLine = document.getElementById("second-line");
const clounds = document.querySelectorAll(".cloud");

const firstRandom = Math.floor(Math.random() * 10);
const secondRandom = Math.floor(Math.random() * 10);

firstLine.style.animationDuration = `${Math.max(1, firstRandom)}s`;
secondLine.style.animationDuration = `${Math.max(1, secondRandom)}s`;

clounds.forEach((cloud) => {
  cloud.style.animationDuration = `${Math.max(1, firstRandom, secondRandom)}s`;
});
