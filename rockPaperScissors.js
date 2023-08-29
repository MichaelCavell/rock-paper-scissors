/*
1. Your game is going to play against the computer, so begin with a function called 
getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
*/

//1a. Generate random number between 1 and 3
let randomNumber = () => Math.floor(Math.random() * (3 - 1 + 1) + 1);


//1b. If number === 1: Rock; If number === 2: Paper; If number === 3: Scissors
function getComputerChoice() {
    let number = randomNumber();
    if (number === 1) {
        return "Rock";
    } else {
        if (number === 2) {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
}

    console.log(getComputerChoice());