//Description of Emoji Details.....
const emojiDetails = [
  { description: "smiling face with sunglasses", emoji: "😎" },
  { description: "Thumb up", emoji: "👍" },
  { description: "Heart eyes", emoji: "😍" },
  { description: "Crying face", emoji: "😢" },
  { description: "Party popper", emoji: "🥳🎉" },
];

let currentEmojiIndex = 0;
let score = 0;
let timer;
let seconds = 60;

//Queryselector.....
const guessInput = document.querySelector("#guess-input");
const resultElement = document.querySelector("#result");
const scoreElement = document.querySelector("#score");
const timerElement = document.querySelector("#timer");

//function for displaying the emoji..
function displayEmoji() {
  const descriptionElement = document.querySelector("#description");
  descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
  timerElement.textContent = `Timer: ${seconds} seconds`;
}

function checkGuess() {
  const guess = guessInput.value.trim().toLowerCase();
  const correctEmoji = emojiDetails[currentEmojiIndex].description
    .trim()
    .toLowerCase();

  if (guess === correctEmoji) {
    resultElement.textContent = "Correct. Congratulations ✅";
    score++;
  } else {
    resultElement.textContent = `Wrong !! It was: ${emojiDetails[currentEmojiIndex].description}`;
  }

  scoreElement.textContent = `Score: ${score}`;
  guessInput.value = "";
  guessInput.focus();
  nextEmoji();
}

function nextEmoji() {
  currentEmojiIndex++;
  setTimeout(() => {
    resultElement.textContent = "";
  }, 2000);

  if (currentEmojiIndex === emojiDetails) {
    currentEmojiIndex = 0;
  }

  displayEmoji();
}

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkGuess();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  displayEmoji();
  startTimer();
});

function startTimer() {
  timer = setInterval(() => {
    seconds--;
    timerElement.textContent = `Timer: ${seconds} seconds`;
    if (seconds <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  guessInput.disabled = true;
  timerElement.textContent = "";
}
