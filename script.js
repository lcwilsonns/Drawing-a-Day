//Word array and variables
const words = [
  "Ocean",
  "Yellow",
  "Home",
  "Fly",
  "Bird",
  "Expanse",
  "Wave",
  "Read",
  "Open",
  "Closed",
  "Stone",
  "Wood",
  "Old",
  "New",
  "Lake",
  "Petal",
  "Forest",
  "Blue",
  "Green",
  "Poplar",
  "Evergreen",
  "Orange",
  "Metal",
  "Cover",
  "Chair",
  "Window",
  "Door",
  "Morning",
  "Wheels",
  "Mobile",
];
const chosenWords = [];

//Select a random word from the array.
let randomNumber = Math.floor(Math.random() * (words.length - 1));
let randomChosenWord = words[randomNumber];
// chosenWords.push(randomChosenWord);
// console.log(chosenWords);

document.querySelector(".btn").addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * (words.length - 1));
  let randomChosenWord = words[randomNumber];
  document.querySelector("h3").innerHTML = randomChosenWord + "!";
  chosenWords.push(randomChosenWord);
});
