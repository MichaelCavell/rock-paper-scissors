
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function singleRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerChoice = computerSelection();

    if (playerChoice === 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                return 'Tie! Both players chose Rock';
            case 'Paper':
                return 'You Lose! Paper beats Rock';
            case 'Scissors':
                return 'You Win! Rock beats Scissors';
        }
    } else if (playerChoice === 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                return 'You Win! Paper beats Rock';
            case 'Paper':
                return 'Tie! Both players chose Paper';
            case 'Scissors':
                return 'You Lose! Scissors beats Paper';
        }
    } else {
        switch (computerChoice) {
            case 'Rock':
                return 'You Lose! Rock beats Scissors';
            case 'Paper':
                return 'You Win! Scissors beats Paper';
            case 'Scissors':
                return 'Tie! Both players chose Scissors'; 
        }
    }
}

Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that 
keeps score and reports a winner or loser at the end. You have not officially learned how to “loop” over code to 
repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) 
feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
At this point you should be using console.log() to display the results of each round and the winner at the end. Use prompt() to get input 
from the user. Read the docs here if you need to. Feel free to re-work your previous functions if you need to. Specifically, 
you might want to change the return value to something more useful. Feel free to create more “helper” functions if you think it 
would be useful.

function playGame() {
    for (let i = 0; i < 5; i++) {
        singleRound('rock', getComputerChoice);
    }
}


let checkVal = singleRound('SCISSORS', getComputerChoice);