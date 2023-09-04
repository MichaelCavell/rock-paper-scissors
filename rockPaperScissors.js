let randomNumber = () => Math.floor(Math.random() * (3 - 1 + 1) + 1);

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

//const computerSelection = getComputerChoice();
//const playerSelection = "scissors";

function playRound(playerSelection, computerSelection) {
    if (playerSelection === null) {
        return "Rock, Paper, or Scissors... you must decide.";
    } 

    let playerLowerCase = playerSelection.toLowerCase();
    let playerChoice = playerLowerCase.charAt(0).toUpperCase() + playerLowerCase.slice(1);

    if (computerSelection === "Paper" && playerChoice === "Rock") {
        return "You Lose! The Internet chose paper, which beats rock";
    } else if (computerSelection === "Scissors" && playerChoice === "Rock") {
        return "You Win! Rock beats the Internet's choice--scissors";      
    } else if (computerSelection === "Rock" && playerChoice === "Rock") {
        return "Tie! You and the Internet both selected rock";
    } else if (computerSelection === "Paper" && playerChoice === "Paper") {
        return "Tie! You and the Internet both selected paper";
    } else if (computerSelection === "Scissors" && playerChoice === "Paper") {
        return "You Lose! The Internet chose scissors, which beats paper";      
    } else if (computerSelection === "Rock" && playerChoice === "Paper") {
        return "You Win! Paper beats the Internet's choice--rock";
    } else if (computerSelection === "Paper" && playerChoice === "Scissors") {
        return "You Win! Scissors beats the Internet's choice--paper";
    } else if (computerSelection === "Scissors" && playerChoice === "Scissors") {
        return "Tie! You and the Internet both selected scissors";      
    } else if (computerSelection === "Rock" && playerChoice === "Scissors") {
        return "You Lose! The Internet chose rock, which beats scissors";
    } else {
        return "hmmmmmmm...";
    }
}

/*function game() {
    let humanScore = 0;
    let computerScore = 0;

    let firstFive = round.substring(0, 5);
    if (firstFive === "You L") {
        computerScore++;
    } if (firstFive === "You W") {
        humanScore++;
    }
    console.log(round);
    console.log("Human " + humanScore);
    console.log("Computer " + computerScore);

    humanChoice = prompt("Rock, Paper, or Scissors?")
    round = playRound(humanChoice, getComputerChoice());
    firstFive = round.substring(0, 5);
    if (firstFive === "You L") {
        computerScore++;
    } if (firstFive === "You W") {
        humanScore++;
    }
    console.log(round);
    console.log("Human " + humanScore);
    console.log("Computer " + computerScore);


    humanChoice = prompt("Rock, Paper, or Scissors?")
    round = playRound(humanChoice, getComputerChoice());
    firstFive = round.substring(0, 5);
    if (firstFive === "You L") {
        computerScore++;
    } if (firstFive === "You W") {
        humanScore++;
    }
    console.log(round);
    console.log("Human " + humanScore);
    console.log("Computer " + computerScore);

    humanChoice = prompt("Rock, Paper, or Scissors?")
    round = playRound(humanChoice, getComputerChoice());
    firstFive = round.substring(0, 5);
    if (firstFive === "You L") {
        computerScore++;
    } if (firstFive === "You W") {
        humanScore++;
    }
    console.log(round);
    console.log("Human " + humanScore);
    console.log("Computer " + computerScore);

    humanChoice = prompt("Rock, Paper, or Scissors?")
    round = playRound(humanChoice, getComputerChoice());
    firstFive = round.substring(0, 5);
    if (firstFive === "You L") {
        computerScore++;
    } if (firstFive === "You W") {
        humanScore++;
    }
    console.log(round);
    console.log("Human " + humanScore);
    console.log("Computer " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lost, better luck next time!");
    } else {
        console.log("Tie!")
    }
} */

document.addEventListener('DOMContentLoaded', function() {
    const rock = document.getElementById("rock");
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const score = document.getElementById('score');
    const roundResult = document.getElementById('result');

    let humanScore = 0;
    let computerScore = 0;

    function counter() {
        let roundString = roundResult.textContent;
        let firstFive = roundString.substring(0, 5);
        if (firstFive === "You L") {
            computerScore++;
        } if (firstFive === "You W") {
            humanScore++;
        }
        let currentScore = document.getElementById('score');
        currentScore.textContent = `Human: ${humanScore} | Internet: ${computerScore}`;
    }

    rock.addEventListener('click', function() {
        const userInput = "rock";
        const computerInput = getComputerChoice(); 
        const result = playRound(userInput, computerInput);
        const resultDisplay = document.getElementById('result');
        resultDisplay.textContent = result;
    });
    rock.addEventListener('click', counter);

    paper.addEventListener('click', function() {
        const userInput = "paper";
        const computerInput = getComputerChoice(); 
        const result = playRound(userInput, computerInput);
        const resultDisplay = document.getElementById('result');
        resultDisplay.textContent = result;
    });
    paper.addEventListener('click', counter);

    scissors.addEventListener('click', function() {
        const userInput = "scissors";
        const computerInput = getComputerChoice(); 
        const result = playRound(userInput, computerInput);
        const resultDisplay = document.getElementById('result');
        resultDisplay.textContent = result;
    });
    scissors.addEventListener('click', counter);
});

