const words = ["javascript", "html", "css", "react", "node", "python", "java"];
let currentWord = "";
let scrambledWord = "";
let score = 0;

const scrambledWordElement = document.getElementById("scrambled-word");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const messageElement = document.getElementById("message");
const scoreElement = document.getElementById("score");
const newGameButton = document.getElementById("new-game-button");

function chooseWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
    return word.split("").sort(() => Math.random() - 0.5).join("");
}

function newGame() {
    currentWord = chooseWord();
    scrambledWord = scrambleWord(currentWord);
    scrambledWordElement.textContent = scrambledWord;
    messageElement.textContent = "";
    guessInput.value = "";
    guessInput.focus();
}

function checkGuess() {
    const userGuess = guessInput.value.toLowerCase();
    if (userGuess === currentWord) {
        score++;
        scoreElement.textContent = score;
        messageElement.textContent = "Correct!";
        newGame();
    } else {
        messageElement.textContent = "Try again!";
    }
}

guessButton.addEventListener("click", checkGuess);
newGameButton.addEventListener("click", newGame);

newGame();