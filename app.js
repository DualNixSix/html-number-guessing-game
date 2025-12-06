console.log("HELLO INDIA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
let answer = Math.floor(Math.random() * 100) + 1;
let lastGuess = null;
let lastResult = null; 

const message = document.getElementById("message");
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");

const guessingGame = () => {
    let guess = parseInt(guessInput.value); // Convert string to integer
    if (lastGuess !== null) {
        message.textContent = ("Your last guess " + lastGuess + " was " + lastResult + ".");
    }

    lastGuess = guess;
    if (guess === answer) {
        alert(guess + " was correct! Great work.");
        message.textContent = guess + " was correct! Refresh page to play again.";
        guessButton.disabled = true;
        guessInput.disabled = true;
        return;
    }

    if (guess > answer) {
        lastResult = "High";
        alert("Your last guess " + lastGuess + " was " + lastResult + ".");
        message.textContent = ("Your last guess " + lastGuess + " was " + lastResult + ".");
    } else {
        lastResult = "Low";
        alert("Your last guess " + lastGuess + " was " + lastResult + ".");
        message.textContent = ("Your last guess " + lastGuess + " was " + lastResult + ".");
    }
    
    guessInput.value = "";
}
