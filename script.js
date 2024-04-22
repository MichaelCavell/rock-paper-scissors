
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

function winnerCheck(string) {
    if (string.includes('You Lose!')) {
        return 1;
    } else if (string.includes('You Win!')) {
        return 2;
    } else { 
        return 3;
    }
}

function gameWinnerCheck(computerScore, userScore) {
    if (computerScore > userScore) {
        return 1;
    } else if (computerScore < userScore) {
        return 2;
    } else {
        return 3;
    }
}

function playGame() {
    let computerScore = 0;
    let userScore = 0;

    for (let i = 0; i < 5; i++) {
        let userMove = prompt('Rock, Paper, or Scissors?')
        let currentRound = singleRound(userMove, getComputerChoice);
        console.log(currentRound);
        let roundWinner = winnerCheck(currentRound);
        switch (roundWinner) {
            case 1:
                computerScore++
                break;
            case 2:
                userScore++
                break;      
        } 
        console.log(`The current score is Computer: ${computerScore} | User(you!): ${userScore}`);
    }

    let gameWinner = gameWinnerCheck(computerScore, userScore);
    switch (gameWinner) {
        case 1:
            console.log(`You lose! The final score is Computer: ${computerScore} | User(you!): ${userScore}`)
            console.log(`Refresh to play again!`);
            break;
        case 2:
            console.log(`You win! The final score is Computer: ${computerScore} | User(you!): ${userScore}`);
            console.log(`Refresh to play again!`);
            break;  
        case 3:  
            console.log(`You tie! The final score is Computer: ${computerScore} | User(you!): ${userScore}`);
            console.log(`Refresh to play again!`);
            break;  
    } 
}

playGame();