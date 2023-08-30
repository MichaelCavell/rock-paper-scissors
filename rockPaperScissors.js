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

/*
2. Write a function that plays a single round of Rock Paper Scissors. The function should 
take two parameters - the playerSelection and computerSelection - and then return a string 
that declares the winner of the round like so: "You Lose! Paper beats Rock" - Make your 
function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, 
RocK or any other variation).
*/

const computerSelection = getComputerChoice();
const playerSelection = "scissors";

function playRound(playerSelection, computerSelection) {
    let playerLowerCase = playerSelection.toLowerCase();
    let playerChoice = playerLowerCase.charAt(0).toUpperCase() + playerLowerCase.slice(1);
    if (computerSelection === "Paper" && playerChoice === "Rock") {
        return "You Lose! Paper beats rock";
    } else if (computerSelection === "Scissors" && playerChoice === "Rock") {
        return "You Win! Rock beats scissors";      
    } else if (computerSelection === "Rock" && playerChoice === "Rock") {
        return "Tie! You both selected rock";
    } else if (computerSelection === "Paper" && playerChoice === "Paper") {
        return "Tie! You both selected paper";
    } else if (computerSelection === "Scissors" && playerChoice === "Paper") {
        return "You Lose! Scissors beats paper";      
    } else if (computerSelection === "Rock" && playerChoice === "Paper") {
        return "You Win! Paper beats rock";
    } else if (computerSelection === "Paper" && playerChoice === "Scissors") {
        return "You Win! Scissors beats paper";
    } else if (computerSelection === "Scissors" && playerChoice === "Scissors") {
        return "Tie! You both selected scissors";      
    } else if (computerSelection === "Rock" && playerChoice === "Scissors") {
        return "You Lose! Rock beats scissors";
    } else {
        return "hmmmmmmm...";
    }
}

/*
3. Write a NEW function called game(). Use the previous function inside of this one to 
play a 5 round game that keeps score and reports a winner or loser at the end.

3a. call playRound function 5 times
*/

function game() {
    let humanChoice1 = prompt("Rock, Paper, or Scissors?")
    round1 = playRound(humanChoice1, getComputerChoice());
    console.log(round1);

    let humanChoice2 = prompt("Rock, Paper, or Scissors?")
    round2 = playRound(humanChoice2, getComputerChoice());
    console.log(round2)

    let humanChoice3 = prompt("Rock, Paper, or Scissors?")
    round3 = playRound(humanChoice3, getComputerChoice());
    console.log(round3)

    let humanChoice4 = prompt("Rock, Paper, or Scissors?")
    round4 = playRound(humanChoice4, getComputerChoice());
    console.log(round4)

    let humanChoice5 = prompt("Rock, Paper, or Scissors?")
    round5 = playRound(humanChoice5, getComputerChoice());
    console.log(round5)
} 

game();